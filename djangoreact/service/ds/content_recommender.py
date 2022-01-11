import pandas as pd
from entertainment.models import ContentReviews, Contents
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel


def get_tfid_matrix(merged_movies):
    """TF-IDF matrix로 변환"""
    tfidf = TfidfVectorizer(stop_words="english")
    merged_movies["overview"] = merged_movies["overview"].fillna("")

    tfidf_matrix = tfidf.fit_transform(merged_movies["overview"])
    return tfidf_matrix


def get_content_recommendations(title, n=10):
    """
    줄거리가 가장 유사한 n 개의 콘텐츠 추천
    Args:
      title(str) : 콘텐즈 제목
    Returns:
      {movie_id(int) :movie_title(str)}(dict) 
    """
    merged_movies = pd.DataFrame(list(Contents.objects.all().values()))

    indices = pd.Series(
        [x for x in range(merged_movies["title"].nunique())],
        index=merged_movies["title"].unique(),
    )
    idx = indices[title]

    tfidf_matrix = get_tfid_matrix(merged_movies)
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    sim_scores = list(enumerate(cosine_sim[idx]))

    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    sim_scores = sim_scores[1 : n + 1]
    movie_indices = [i[0] for i in sim_scores]

    return dict(
        zip(
            merged_movies["id"].iloc[movie_indices].unique(),
            merged_movies["title"].iloc[movie_indices].unique(),
        )
    )
