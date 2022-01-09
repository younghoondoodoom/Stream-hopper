import pandas as pd

ott_movietv_kor=pd.read_csv('../input/recommendation-data/Contents.csv')
ott_movietv_kor.drop(columns='Unnamed: 0',inplace=True)
ott_movietv_kor.drop_duplicates(['id','ott'],keep='first', inplace=True)
ott_movietv_kor.shape
ott_movietv_kor.to_csv('final_ott_movietv_kor_v2.csv')