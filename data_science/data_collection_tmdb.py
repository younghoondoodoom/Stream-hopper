import pandas as pd
import requests
#popular movie
APIKEY=your_apikey
popular_mv = pd.DataFrame()
for i in range(1,501):#데이터 가져와서 json형식으로 바꾸고 컬럼 선택해서 
    response = requests.get(f'https://api.themoviedb.org/3/movie/popular?api_key={APIKEY}&language=en-US&page={i}')
    temp = pd.DataFrame(response.json()['results'])
    popular_mv = popular_mv.append(temp,ignore_index=True)

response = requests.get('https://api.themoviedb.org/3/genre/movie/list?api_key={APIKEY}&language=en-US')

#genre
genre = pd.DataFrame(response.json())
genre_dict = {28 : 'Action' , 12 : 'Adventure', 16 : 'Animation', 35 : 'Comedy' , 
              80 : 'Crime' , 99 : 'Documentary' , 18 : 'Drama' , 10751 : 'Family' ,
              14 : 'Fantasy' , 36 : 'History' , 27 : 'Horror' , 10402 : 'Music' , 
              9648 : 'Mystery' , 10749 : 'Romance' , 878 : 'Science Fiction' , 
              10770 : 'TV Movie' , 53 : 'Thriller' , 10752 : 'War' , 37 : 'Western'}
popular_mv['final_genre'] = ''
for j in range (10000):
    temp=[]
    for i in popular_mv['genre_ids'][j]:
        temp.append(genre_dict[i])
    popular_mv['final_genre'][j] = temp

popular_mv.drop(columns = ['genre_ids'], inplace=True)
popular_mv.rename(columns = {'final_genre' : 'genre'},inplace=True)

top_ids = popular_mv.id.to_list() #id만 따로 뽑아서 함
mv_details = pd.DataFrame()
for i in top_ids:
    response = requests.get(f'https://api.themoviedb.org/3/movie/{i}?api_key={APIKEY}')
    temp1 = pd.DataFrame.from_dict(response.json(),orient='index')
    mv_details = mv_details.append(temp1.T, ignore_index=True)

pop_mv_details = pd.merge(popular_mv,mv_details,on='id')

#kor movies
ids = tmdb_ott_m.id.to_list()
kor_mv = pd.DataFrame()
for i in ids:
  response = requests.get(f'https://api.themoviedb.org/3/movie/{i}?api_key={APIKEY}&language=ko-KR')
  temp1 = pd.DataFrame.from_dict(response.json(),orient='index')
  kor_mv =kor_mvnew_df.append(temp1.T, ignore_index=True)
kor_mv=kor_mv[['id','title','overview','poster_path']]
kor_mv.rename(columns={'title':'kor_title','overview':'kor_overview','poster_path':'kor_image_path'} ,inplace = True)
movie_kor_eng = pd.merge(real_final_df,kor_mv,on='id') 
movie_kor_eng.rename(columns={'movie_rating':'content_rating'},inplace=True)
movie_kor_eng['type']='Movie'

#OTT
tmdb_ott_t=pd.read_csv('../input/1000-movies/TMDB_OTT_TV.csv')
tmdb_ott_t.rename(columns={'tv_rating':'content_rating','cast':'actor','duration':'runtime'},inplace=True)

tmdb_ott_t['type']='TV'

movie_kor_tv =pd.concat([movie_kor_eng, tmdb_ott_t])

#OTT
netflix= pd.read_csv('../input/1000-movies/netflix_titles.csv')
disney = pd.read_csv('../input/1000-movies/disney_plus_titles.csv')
amazon = pd.read_csv('../input/1000-movies/amazon_prime_titles.csv')
hulu   = pd.read_csv('../input/1000-movies/hulu_titles.csv')

netflix['ott']='netflix'
disney['ott'] ='disney'
amazon['ott'] ='amazon'
hulu['ott']   ='hulu'
ott = pd.concat([netflix,disney,amazon, hulu])

ott.rename(columns={'cast':'actor','release_year':'release','duration':'runtime','listed_in':'genre','rating':'movie_rating'},inplace=True)
ott.drop(['date_added','show_id'],axis=1,inplace=True)

pop_mv_details.rename(columns={'original_title_x':'title','overview_x':'overview','poster_path_x':'image_path','vote_average_y':'rating','vote_count_y':'vote_count'},inplace=True)
pop_mv_details=pop_mv_details[['id','title','rating','image_path','overview','vote_count']]

mv_ott=movie_kor_tv.merge(ott, left_on='title',right_on='title',how='right')

final_df=mv_ott[mv_ott.id.notna()].sort_values('id') 
final_df[['id', 'title', 'genre', 'rating', 'image_path', 'country', 'release', 'runtime', 'actor', 'director', 'overview', 'vote_count','movie_rating']]

final_df.reset_index(drop=True, inplace=True)
final_df['id'] = final_df['id'].astype('Int64')
final_df['vote_count'] = final_df['vote_count'].astype('Int64')

real_final_df=final_df[final_df['type']=='Movie']
real_final_df.drop(['type'],axis=1,inplace=True)


movie_ids =real_final_df[real_final_df['type']=='Movie'].id.to_list() 

temp2_rev=[]
for i in movie_ids:
    response = requests.get(f'https://api.themoviedb.org/3/movie/{i}/reviews?api_key={APIKEY}')
    temp1_rev = pd.DataFrame.from_dict(response.json()['results'])
    temp1_rev['content_id']=i
    temp2_rev.append(temp1_rev) 
    
temp_rev_mv= pd.DataFrame()
for i in range(len(temp2_rev)):
    temp_rev_mv=pd.concat([ temp_rev_mv,  temp2_rev[i]])

tv_ids = real_final_df[real_final_df['type']=='TV'].id.to_list() 

temp2_rev=[]
for i in tv_ids:
    response = requests.get(f'https://api.themoviedb.org/3/tv/{i}/reviews?api_key={APIKEY}')
    temp1_rev = pd.DataFrame.from_dict(response.json()['results'])
    temp1_rev['content_id']=i
    temp2_rev.append(temp1_rev) 
    
temp_rev_tv= pd.DataFrame()
for i in range(len(temp2_rev)):
    temp_rev_tv=pd.concat([ temp_rev_tv,  temp2_rev[i]])

mergd_ott_reviews=pd.concat([temp_rev_mv, temp_rev_tv])
mergd_ott_reviews.to_csv('mergd_ott_reviews.csv')