from surprise.model_selection import train_test_split
from surprise import Reader, SVD,Dataset,dump

import numpy as np
import pandas as pd 

from entertainment.models import ContentReviews, Contents
from service.models import OTTservice

def prepare_dataset(test_size=0.1):
    '''
    TMDB에서 가져온 데이터의 중첩된 값들을 새로운 컬럼으로 빼줌
      args: 
      테스트용 데이터  사이즈
    returns: 
      적용한 데이터,학습용 데이터,테스트용 데이터
     '''
    df = pd.read_csv('./data/tmdb_ratings_processed_v1.csv')

    reader = Reader(rating_scale=(0, 10))
    data = Dataset.load_from_df(df[['username', 'content_id', 'rating']], reader)
    trainset, testset = train_test_split(data, test_size)
  
    return df,data, trainset, testset 

def colloborative_recommender(user_id,n=20):
    '''
    latent factor 모델인 SVD을 이용하여  해당 유저와 가장 유사한 유저들 기반으로 학습하여
    가장 높게 점수를 줄 영화를 리턴
    args: 
      Contents 모델
      user_id 유저 아이디
      n 추천 받고 싶은 영화 갯수(기본10개)
    returns: 
      입력한 유저가 가장 높게 평가할 영화id, title
    '''
    df = pd.DataFrame(list(Contents.objects.all().values()))

    movies = df[['title', 'vote_count', 'release', 'tmdb_id','rating']]
    svd = dump.load('./svd')[1]
    movies['est'] = movies['tmdb_id'].apply(lambda x: svd.predict(user_id,x).est)

    movies=movies.sort_values('est',ascending=False)
    
    return [( movies['tmdb_id'].iloc[x], movies['title'].iloc[x] ,  round( movies['est'].iloc[x]*10,1) ) for x in range(len(movies))  ][1:n+1]    
  
def new_collaborative(user_id ,n=20):
    '''
    latent factor 모델인 SVD를 재학습하여  해당 유저와 가장 유사한 유저들 기반으로 학습하여
    가장 높게 점수를 줄 영화를 리턴
    args: 
      리뷰데이터 전체 , 영화 데이터
    returns: 
      입력한 유저가 가장 높게 평가할 영화id, title
    args: 전체 리뷰 데이터
    returns: 
        {id:[제목 , 예상 평점(백분율 %) ]}
    '''
    user_id=str(user_id)
    
    tmdb_id=OTTservice.objects.filter(user_id=user_id).values('user_id','tmdb_id').order_by('created_at')
    tmdb_id_unpack=[ tmdb_id[i]['tmdb_id'].split(',') for i in range(len(tmdb_id))]
    tmdb_id_int= [int(x) for x in sum(tmdb_id_unpack,[])]
    preferred=pd.DataFrame({'user_id':[user_id]*len(tmdb_id_int)})
    preferred['content_id']=tmdb_id_int
    
    ratings= pd.read_csv('./data/tmdb_ratings_processed_v1.csv')
    ratings=ratings[['username','content_id','rating']]
    
    ratings=pd.concat([ratings,preferred.rename(columns={'user_id':'username'})])
    ratings['rating']=ratings['rating'].fillna(np.nanmedian(ratings['rating']))
    ratings.to_csv('./data/tmdb_ratings_processed_v1.csv')
    _,_,trainset,_ =prepare_dataset(0.1)
    

    svd=SVD(n_factors=50,n_epochs=50,lr_all=0.03,reg_all=0.1)
    svd.fit(trainset)
    updated_contents = pd.DataFrame(list(Contents.objects.all().values('title', 'vote_count', 'release', 'tmdb_id','rating')))

    updated_contents['est'] = updated_contents['tmdb_id'].apply(lambda x: svd.predict(user_id,x).est)
    updated_contents=updated_contents.sort_values('est',ascending=False)
    dump.dump ('./svd',algo=svd)

    return [( updated_contents['tmdb_id'].iloc[x], updated_contents['title'].iloc[x] ,  round( updated_contents['est'].iloc[x]*10,1) ) for x in range(len(updated_contents))  ][1:n+1]    
