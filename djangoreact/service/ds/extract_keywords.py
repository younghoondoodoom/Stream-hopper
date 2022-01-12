import nltk
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
from scipy.sparse import coo_matrix
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer


def create_soup(df):
    """id기반으로 수프 만들기"""
    df["word_count"] = df["content"].apply(lambda x: len(str(x).split(" ")))
    df = df.groupby("content_id")["content"].apply(" ".join).reset_index()
    return df


def remove_noise(df):
    """노이즈 제거"""
    df["processed"] = (
        df["content"]
        .str.replace(r"[^a-zA-Z]", " ")
        .str.lower()
        .replace(r"(\\d|\\W)+", " ")
        .replace(r"&lt;/?.*?&gt;", " &lt;&gt; ")
        .str.strip()
    )

    return df


def normalize(df):
    """불용어 제거, 어간 추출"""
    nltk.download("stopwords")
    stop_words = set(stopwords.words("english"))
    lem = WordNetLemmatizer()

    df["processed"] = df["processed"].apply(
        lambda x: " ".join(
            [lem.lemmatize(word) for word in x.split() if word not in stop_words]
        )
    )
    return df


def sort_coo(coo_matrix):
    """희소 행렬변환하고 내림차순 정렬"""
    tuples = zip(coo_matrix.col, coo_matrix.data)
    return sorted(tuples, key=lambda x: (x[1], x[0]), reverse=True)


def extract_topn(feature_names, sorted_items, topn=10):
    """탑 키워드 n개 추출"""

    sorted_items = sorted_items[:topn]

    score_vals = []
    feature_vals = []

    for idx, score in sorted_items:

        score_vals.append(round(score, 3))
        feature_vals.append(feature_names[idx])

    results = {}
    for idx in range(len(feature_vals)):
        results[feature_vals[idx]] = score_vals[idx]

    return results


def extract_top_keywords(df):
    """uni-, bi-, tri-gram  고려해서 5 키워드를 실제 TMDB유저가 작성한 리뷰에서 뽑아내기"""
    nltk.download("stopwords")
    stop_words = set(stopwords.words("english"))

    soup = create_soup(df)
    soup = remove_noise(soup)
    soup = normalize(soup)
    corpus = soup["processed"].values

    cv = CountVectorizer(
        max_df=8, stop_words=stop_words, max_features=10000, ngram_range=(1, 3)
    )
    X = cv.fit_transform(corpus)

    tfidf_transformer = TfidfTransformer(smooth_idf=True, use_idf=True)
    tfidf_transformer.fit(X)

    feature_names = cv.get_feature_names()
    soup["keywords"] = [""] * len(soup)
    soup["keywords"] = soup["processed"].apply(
        lambda x: extract_topn(
            feature_names,
            sort_coo(tfidf_transformer.transform(cv.transform([x])).tocoo()),
            5,
        )
    )
    soup["keywords"] = soup["keywords"].apply(lambda x: [*x])
    return soup[["content_id", "keywords"]]
