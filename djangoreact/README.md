# 사용 방법

## 가상환경 구축(stream-hopper 디렉토리에서 실행)
1. 디렉토리에 가상환경 생성
  python -m venv venv

2. 가상환경 활성화
  source venv/Scripts/activate

3. requirements.txt 설치
  pip install -r requirements.txt

4. secrets.json 생성
  stream-hopper/djangoreact에 secrets.json 파일을 만들어서 
  ```
  {
	"SECRET_KEY": "50글자 공백없이"
  }


## 실행(stream-hopper/djangoreact에서 실행)
1. migrate
  python manage.py migrate 실행

2. runserver
  python manage.py runserver

3. npm start(port:8000)
  cd frontend
  npm install
  npm start
 
# 소개

## 사용기술
- sqlite
- django 4.0
- APScheduler

## 폴더 구조
```bash
djangoreact
├── data  
│   
├── djangoreact : setting, urls, wsgi, asgi.py
│ 
├── entertainment : contents 관련 검색 및 list 관련 api
│
├── service : main service를 위한 api(미완)
|   
├── users : Customuser를 위한 api 
│   
├── db.sqlite3 
│   
├── load_data.py   
|   
├── manage.py   
└── App.js / App.scss
``` 

## 구현 기능
### 1. Customuser 생성
- 기존에는 회원가입을 진행할 때 더 많은 정보를 받으려고 CustomUser을 생성했으나 방향이 바뀜..
- default User과 거의 유사하지만 id는 email로 사용

### 2. 회원가입/로그인/로그아웃
- dj-rest-auth 라이브러리를 사용해서 구현
- simple token-based HTTP Authentication을 이용하여 토큰 생성 및 db에 저장
- email을 id로 사용
- client에서는 localstorage에 받은 토큰을 담아서 관리

### 3. 메인페이지
- main page에 띄울 movie top3를 json 형태로 전달(get)
- detail page에 띄울 movie detail을 json으로 전달(get)

### 4. 영화 검색기능
- 검색어에 맞는 영화를 db에서 쿼리해서 json 형태로 전달(get)
- title, actor, director 각각 쿼리 가능, 모두 합친 후 쿼리 가능

### 5. Service 준비
- 메인 서비스인 OTT추천 서비스를 위해 미리 환경을 구축 중
- 사용자가 선택한 항목을 db에 저장(데이터 분석팀 요청 사항)
- 3개월 이상 된 데이터를 db에서 자동 삭제(sqlite 문제 때문에 완성 못 함)

# Issue
- sqlite를 postgresql로 바꿀 지 결정
- swagger를 이용해 API 문서 만들기