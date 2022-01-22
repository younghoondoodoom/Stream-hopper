#  **[🍿](https://emojipedia.org/popcorn/) Stream Hopper** 

> " Stream Hopper는 사용하는 스트림 서비스에서 다른 서비스로 이동하는 stream hopping 현상을 돕는다는 의미로 이용자의 성향에 맞춰 최적의 콘텐츠가 많은 OTT로 추천하는 서비스입니다." 

## [🎬](https://emojipedia.org/clapper-board/)  프로젝트 구성 안내

##  Stream-Hopper

## 1. 프로젝트 소개

**1. 사용하려는  모델과 알고리즘을 명시**
- Content Based Filtering(콘텐츠 기반 필터링) : 카운트 기반의 NLP 사용하여 유사도를 구함
- User Based Collaborative Filtering(협업 필터링): Latent factor model을 이용하여 예측, 예측한 점수값으로 해당 유저와의 일치도 구함
- ott recommender :  사용자가 입력한 OTT 희망값과 좋아하는 장르, 영화를 입력값을 받아 점수화하여 구함
- 영화별 리뷰 요약: n-gram(uni,bi,tri-gram)고려하여 tf-idf 벡터화하여 주요 n개 키워드 추출

**2. 웹서비스에 대한 자세한 개요**
- 엔드유저의 희망사항과 취향을 반영한 OTT와 영화를 추천해주는 서비스
- <details><summary>개인이 자신의 취향과 니즈를 선택하면 해당 값에 우선순위를 주어 유저가 원하는 가장 가까운 OTT를 추천해준다.</summary>
    - 유저에게 다양한 정보를 주기위해서 유저가 얼만틈 좋아할지에 대한 예측값과 유저들이 남긴 리뷰에 대한 태그로 인사이트 줌
    - 원하는 컨텐츠 검색 시 어느 OTT에 있는지 검색 가능
</details>

**3. 데이터**
- TMDB API
- Netflix
- Amzon Prime Video
- Disney +
- Hulu

**4.🛠️ 기술 스택과 라이브러리**
###### 버전 관리
<img src="https://img.shields.io/badge/GitLab-FCA121?style=flat-square&logo=GitLab&logoColor=white"/></a>

###### Frontend
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/></a>
```
- react-router-dom
- recoil
- axios
- recharts
- scss
```

###### Backend
<img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white"/></a>
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"/></a>
```
- APScheduler
- djangorestframework
```

###### Data Science
<img src="https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white"/></a>
<img alt="Jupyter" src="https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=Jupyter&logoColor=white"/></a>
```
- sklearn
- surprise
- pandas
- numpy
- re
- request
- seaborn
- matplotlib
- geopandas
- nltk
```

## 2. 프로젝트 목표
***웹서비스의 해결 과제와 데이터 분석으로 해결하기 위한 방안 논의***

1. 문제를 해결하기 위한 특정 질문 명시
- OTT 구독과 해지를 반복하는 이용자들에게 어떤 유용한 서비스를 제공해 줄 수 있을까?
- OTT마다 특성이 있을까? 실제로 이러한것이 유저 구독 결정 여부에 영향을 미칠까?

2. 데이터 분석과 머신러닝을 통해 해결하려는 문제를 구체적으로 작성
- 데이터 분석으로 OTT 특성을 파악
- 해당 특성을 고려해서 유저취향을 빈영하도록 모델링

3. 프로젝트 아이디어 동기
- Covid-19 창궐하면서 외부활동이 제한되고 사람들이 집에 있는 시간이 늘어나면서 OTT 사용이 폭발적으로 증가하였다. 또한 다중 구독이 일반화 되면서 다른 OTT에 원하는 컨텐츠가 있을 시 구독 해지하고 다른 서비스로 구독하는 현상이 늘어났다. 다양한 리스크, 시간, 돈에 대해서 어떻게 하면 사용자들이 효과적으로 활용할 수 있을까? 로 시작했다.
- 단순히 유저들에게 인사이트를 주기보다는 이에 더해서 각  OTT에서 제공하는 **특성과 이용자의 니즈를 맞추어 추천**해주는 것은 어떨까로 생각이 이어졌습니다.

## 3. 프로젝트 기능 설명

1. ***웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명****

| 주요 기능     | 서브 기능 |
| ----------- |-------- |
|1. 사용자의 개인 취향에 맞는 OTT 추천을 받을 수 있음  |  1.실제 유저 데이터를 이용해서 유저의 취향을 예측하여 추천해준다. 이용자가 좋아요 한 영화 데이터가 모델 재학습 시 반영된다.  |
| 2.검색기능으로 영화, TV 쇼 에대한 정보와 실제 유저의 리뷰에서 가져온 키워드, 해당 컨텐츠를 소유하는 OTT확인 가능하다. | 2. 검색결과로 나온 컨텐츠를 클릭한 경우 해당 컨텐츠에 실제 이용자 리뷰를 기반으로 뽑은 키워드로 인사이트 얻음|실제 유저의 리뷰를 기반으로 해당 영화의 키워드를 추출해 인사이트를 준다.   |

## 4. 프로젝트 구성도

- [와이어프레임 링크](https://whimsical.com/streamhopper-KwykEjScJjPCYgwaNwQ2yW)

##  5 . 프로젝트 팀원 역할 분담

| 이름 | 담당 업무 |
| ------ | ------ |
| 👩 김한예슬 | 팀장/Data Scientist,머신러닝  |
| 👨 남기범 |  프론트엔드 개발  |
| 👨 박수영 | Data Scientist |
| 👨 최영훈 | 백엔드 개발 |

- ****멤버별 responsibility****

1. 팀장

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 기획서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 머신러닝 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 인공지능 학습 결과 시각화 담당, UI 디자인 완성
- 수정 단계: 코치님 피드백 반영해서 프론트 디자인 수정

3. 백엔드

- 기획 단계: 데이터셋을 확보하기 위한 데이터베이스 구축, 데이터셋 수집
- 개발 단계: 데이터 베이스 구축 및 API 활용, 웹서비스 사용자의 정보 수집 기능 구현, 인공지능 학습 결과를 활용한 기능 구현
- 수정 단계: 코치님 피드백 반영해서 백엔드 설계/기능 수정

4. 데이터 사이언티스트

- 기획 단계: 웹 서비스 프로젝트 주제에 맞는 모델 및 알고리즘 설정, 모델과 알고리즘에 적합한 데이터셋 수집
- 개발 단계: 데이터 전처리, 학습 모델 구현, 학습 데이터 가공 및 모델 정확도 향상
- 수정 단계: 코치님 피드백 반영해서  데이터 시각화 , 모델 반영

## 6. 버전

- 1.0

## 7. FAQ

#### 사용방법

###### 가상환경 구축

1. 디렉토리에 가상환경 생성
````
   python -m venv venv
````

2. 가상환경 활성화
````
   source venv/Scripts/activate
````

3. requirements.txt 설치

````
   pip install -r requirements.txt
````

4. secrets.json 생성
   stream-hopper/djangoreact에 secrets.json 파일을 만들어서

````
{
	"SECRET_KEY": "50글자 공백없이"
}
````

##### 실행
1. migrate

````
python manage.py migrate
````
2. runserver

````
python manage.py runserver
````
3. npm 

````
cd frontend
npm install
npm start
````
