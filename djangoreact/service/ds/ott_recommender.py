import pandas as pd
from entertainment.models import  Contents, OTT
def get_initialized():
    '''
    점수 초기화
    '''
    weight={'price_range':0,'member_number':0,'genre':0,'member_child_count':0,'pixel':0}

    ott_score=pd.DataFrame({'name':['netflix_basic','netflix_standard','netflix_premium',
                              'disney_montly','disney_yearly',
                              'amazon_montly',
                              'hulu_adv','hulu_no_adv','hulu_live']
                            ,'score':[0]*9})
    return weight, ott_score
def get_ott_genre():
    '''
    각 OTT 탑15 장르
    '''
    
    amazon_genre_top=['Drama',
    'Comedy',
    'Action',
    'Suspense',
    'Kid',
    'Documentary',
    'SpecialInterest',
    'Horror',
    'Romance',
    'Animation',
    'Arts',
    'Entertainment',
    'Culture',
    'ScienceFiction',
    'International']
    disney_genre_top=['Family',
    'Animation',
    'Comedy',
    'Action-Adventure',
    'Nature',
    'ComingofAge',
    'Fantasy',
    'Documentary',
    'Kid',
    'Drama',
    'Docuseries',
    'ScienceFiction',
    'Historical',
    'Music',
    'Musical']
    hulu_genre_top=['Drama',
    'Comedy',
    'Adventure',
    'Action',
    'Documentary',
    'Animation',
    'Horror',
    'Reality',
    'Thriller',
    'Crime',
    'International',
    'Family',
    'Romance',
    'Kid',
    'Lifestyle&Culture']
    netflix_genre_top=['International',
    'Drama',
    'Comedy',
    'Action-Adventure',
    'Romance',
    'Documentary',
    'Independent',
    'Family',
    'Thriller',
    'Crime',
    'Kid',
    'Horror',
    'Docuseries',
    'Music&Musicals',
    'Stand-UpComedy']
    return amazon_genre_top,disney_genre_top,hulu_genre_top,netflix_genre_top

def nan_to_zero(array):
    '''
    nan값 처리
    '''
    if np.isnan(array).any():
        array=np.where(np.isnan(array), 0,array )
    return array

def min_max_scaler(array):
    '''
    min max scaler
    '''
    return (array-min(array))/(max(array)-min(array))

def get_ott_recommendations(age, gender, member_number, member_child_count, member_adult_count, pixel, price_range, genre, first, second, third, prefer_contents, n=4):
    '''
    사용자로부터 받은 입력값을 기반으로 사용자에게 가장 가까운 OTT 추천
    return:
        가장 가까운 n개의 ott를 순서대로 반환
        
    '''
    users=pd.DataFrame({ "gender": [gender],
                          "age": [age],
                         "member_number": [member_number],
                         "member_adult_count": [member_adult_count], 
                         "member_child_count": [member_child_count], 
                         "pixel": [pixel], 
                         "price_range": [price_range], 
                         "genre": [genre], 
                         "first": [first],
                         "second":[second],
                         "third":[third] ,
                       "prefer_contents":[prefer_contents]})
    
    contents = pd.DataFrame(list(Contents.objects.all().values()))
    amazon_genre_top,disney_genre_top,hulu_genre_top,netflix_genre_top = get_ott_genre()
    
    user_genre_list=set(genre.split(","))
    amazon_genre=set(amazon_genre_top)&user_genre_list
    disney_genre=set(disney_genre_top)&user_genre_list
    hulu_genre=set(hulu_genre_top)&user_genre_list
    netflix_genre=set(netflix_genre_top)&user_genre_list
    intersection_genre_cnt=list(map(len,[amazon_genre,disney_genre,hulu_genre,netflix_genre] ))
    intersection_genre_cnt=pd.DataFrame( intersection_genre_cnt)
    
    amazon=set(contents[contents.ott=='amazon'][['content_id']].values.flatten())
    disney=set(contents[contents.ott=='disney'][['content_id']].values.flatten())
    hulu=set(contents[contents.ott=='hulu'][['content_id']].values.flatten())
    netflix=set(contents[contents.ott=='netflix'][['content_id']].values.flatten())
    user_preffered=set(sum(users['prefer_contents'],[]))
    #a,d,h,n
    intersection=[amazon&user_preffered,disney&user_preffered,hulu&user_preffered,netflix&user_preffered]
    intersection_cnt=pd.DataFrame(list(map(len,intersection)))

    weight, ott_score=get_initialized()
    for i in ['price_range','member_number','genre','member_child_count','pixel']:
        if users['first'].values == i:
            weight[i]+=.3
        elif users['second'].values==i:
            weight[i]+=.5
        elif users['third'].values==i:
            weight[i]+=.75
        else:
            weight[i]+=.9


    #정규화
    intersection_normalized= min_max_scaler(intersection_cnt.values)
    intersection_genre_normalized=min_max_scaler(intersection_genre_cnt.values)
    
    intersection_normalized=1-nan_to_zero(intersection_normalized)
    intersection_genre_normalized=1- nan_to_zero(intersection_genre_normalized)
    
    max_users = abs(ott.max_user-users.member_number.values)
    max_users_normalized = min_max_scaler(max_users)

    price = abs(ott.cost-users.price_range.values)
    price_normalized = min_max_scaler(price)
    
    pixel = abs(ott.pixel-users.pixel.values)
    pixel_normalized = min_max_scaler(pixel)
    
    #전체연령가 필요한 경우 디즈니에 가중치 조정
    if users[['age']].values<16 or users[['member_child_count']].values>0 :
        ott_score.score.iloc[3:5]*= (weight['member_child_count']-0.2)
    #weight
    ott_score.score = max_users_normalized * weight['member_number']\
                    +price_normalized*weight['price_range']\
                    +pixel_normalized*weight['pixel']

    ott_score.score[0:3]=ott_score.score[0:3].values+ intersection_normalized[3] +intersection_genre_normalized[3]#Netflix
    ott_score.score[3:5]=ott_score.score[3:5].values+intersection_normalized[1]+intersection_genre_normalized[1] #Disney
    ott_score.score[5]=ott_score.score[5]+intersection_normalized[0]    +intersection_genre_normalized[0]        #Amazon
    ott_score.score[6:]=ott_score.score[6:].values+intersection_normalized[2]+intersection_genre_normalized[2]   #Hulu
    
    return[ x for x in ott_score.sort_values(by='score')['name'][:n]]
