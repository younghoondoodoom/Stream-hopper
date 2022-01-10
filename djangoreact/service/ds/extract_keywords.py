import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfTransformer
from scipy.sparse import coo_matrix

from sklearn.feature_extraction.text import CountVectorizer

def create_soup(df):
    '''
    contents_id 별로 합친다
    '''
    df['word_count'] = df['content'].apply(lambda x: len(str(x).split(" ")))
    df=df.groupby('content_id')['content'].apply(' '.join).reset_index()  
    return df

def remove_noise(df):
    '''
    노이즈 제거
    '''
    df['processed']=df['content'].str.replace(r'[^a-zA-Z]', ' ')\
    .str.lower()\
    .replace(r"(\\d|\\W)+"," ")\
    .replace(r"&lt;/?.*?&gt;"," &lt;&gt; ").str.strip()

    return df
def normalize(df):
    '''
    표제어, 불용어 처리
    '''
    nltk.download('stopwords')
    stop_words = set(stopwords.words("english"))
    lem = WordNetLemmatizer()

    df['processed']=df['processed'].apply(lambda x: ' '.join([lem.lemmatize(word) for word in x.split() if word not in stop_words]))
    return df


def sort_coo(coo_matrix):
    '''
    희소행렬 만든 후 내림차순 정렬
    '''
    tuples = zip(coo_matrix.col, coo_matrix.data)
    return sorted(tuples, key=lambda x: (x[1], x[0]), reverse=True)
 
def extract_topn(feature_names, sorted_items, topn=10):
    """
    순위 높은 n개 가져오기
    """
    
    sorted_items = sorted_items[:topn]
 
    score_vals = []
    feature_vals = []
    
    for idx, score in sorted_items:
        
        score_vals.append(round(score, 3))
        feature_vals.append(feature_names[idx])
 
    results= {}
    for idx in range(len(feature_vals)):
        results[feature_vals[idx]]=score_vals[idx]
    
    return results
def extract_top_keywords(df):
    """
    영화의 리뷰에서 높은 점수 5개의 단어,n-gram 가져오기
    """
    nltk.download('stopwords')
    stop_words = set(stopwords.words("english"))

    soup=create_soup(df)
    soup=remove_noise(soup)
    soup=normalize(soup)
    corpus=soup['processed'].values

    cv=CountVectorizer(max_df=8,stop_words=stop_words, max_features=10000, ngram_range=(1,3))
    X=cv.fit_transform(corpus)

    tfidf_transformer=TfidfTransformer(smooth_idf=True,use_idf=True)
    tfidf_transformer.fit(X)

    feature_names=cv.get_feature_names()
    soup['keywords']=['']*len(soup)
    soup['keywords']=soup['processed'].apply(lambda x: extract_topn(feature_names,
                                                          sort_coo(tfidf_transformer.transform(cv.transform([x])  ).tocoo())
                                                          ,5))
    soup['keywords']=soup['keywords'].apply(lambda x: [*x])
    return soup[['content_id','keywords']]