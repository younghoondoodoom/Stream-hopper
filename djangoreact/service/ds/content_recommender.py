import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

from entertainment.models import Contents, ContentReviews
import pandas as pd

def get_tfid_matrix(merged_movies):
    '''
    텍스트를 TF-IDF features로 이루어진 매트릭스로 변환
    input: 컨텐츠 데이터셋

    '''
    tfidf = TfidfVectorizer(stop_words='english')
    merged_movies['overview'] = merged_movies['overview'].fillna('')
    
    tfidf_matrix = tfidf.fit_transform(merged_movies['overview'])
    return tfidf_matrix

def get_content_recommendations(title ,n=10):
    '''
    영화 제목을 입력하면 해당 영화의 줄거리/장르&감독&배우 기준으로 유사한 데이터 추천

    input: 컨텐츠 데이터셋
    output: { movie_id : movie_title }
    '''
    merged_movies = pd.DataFrame(list(Contents.objects.all().values())) 

    indices =  pd.Series([ x for x in range(merged_movies['title'].nunique())], index=merged_movies['title'].unique())
    idx = indices[title]
    
    tfidf_matrix=get_tfid_matrix(merged_movies)
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    sim_scores = list(enumerate(cosine_sim[idx]))

    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    sim_scores = sim_scores[1:n+1]
    movie_indices = [i[0] for i in sim_scores]
    
    return dict(zip(merged_movies['id'].iloc[movie_indices].unique(),merged_movies['title'].iloc[movie_indices].unique()))

