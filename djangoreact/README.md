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

````
{
	"SECRET_KEY": "50글자 공백없이"
}


## 실행(stream-hopper/djangoreact에서 실행)
1. migrate
python manage.py migrate 실행

2. runserver
python manage.py runserver

3. npm start
cd frontend
npm install
npm start

# 소개

## 사용기술
- postgresql
- django 4.0
- APScheduler
- djangorestframework 3.13.1
- pandas 1.3.5
- sklearn

## 폴더 구조
```bash
djangoreact
├── data
│
├── djangoreact : settings, urls, wsgi, asgi.py
│
├── entertainment : contents 관련 검색 및 list 관련 api
│
├── service : main service를 위한 api(미완)
|
├── users : Customuser를 위한 api
│
├── mypage : mypage를 위한 api
│
├── load_data.py
|
├── secrets.json
├── venv
├── manage.py
└── App.js / App.scss
````

## 구현 기능

### 1. Customuser 생성

- 기존에는 회원가입을 진행할 때 더 많은 정보를 받으려고 CustomUser을 생성했으나 방향이 바뀜
- default User과 거의 유사하지만 id는 email로 사용

### 2. 회원가입/로그인/로그아웃

- dj-rest-auth 라이브러리를 사용해서 구현
- simple token-based HTTP Authentication을 이용하여 토큰 생성 및 db에 저장
- email을 id로 사용
- client에서는 localstorage에 받은 토큰을 담아서 관리

### 3. 토큰 유효성 확인

- PermissionsAPIView를 만들어 TokenAuthentication과 IsAuthenticated을 확인.
- 모든 api 요청 시에 이 apiview로 get 요청을 해서 token 유효성 확인

### 3. 메인페이지

- main page에 띄울 movie top3를 json 형태로 전달(get)
- detail page에 띄울 movie detail을 json으로 전달(get)

### 4. Cotents 검색기능

- 검색어에 맞는 영화를 db에서 쿼리해서 json 형태로 전달(get)
- title, actor, director 각각 쿼리 가능, 모두 합친 후 쿼리 가능

### 5. Detail Contents

- 각각의 데이터를 detail 페이지에 넘겨줌.
- keyword를 띄운다.

### 6. OTT 추천 Service

- 유저의 입력 값에 따라 사용자에게 맞는 OTT 서비스를 추천해준다.
- OTT DB와 데이터 분석 함수에 맞는 쿼리를 사용해 json으로 정보를 전달.

### 7. Contents 추천 서비스

- 유저가 선택 했던 contents에 따라 맞는 취향에 맞는 contents를 선택해준다.
- Contents DB와 데이터 분석 함수에 맞는 쿼리르 사용해서 json으로 정보를 전달.

### 8. MyPage

- 유저가 좋아요를 눌렀던 Contents를 저장하고 mypage에서 띄운다.
- 유저에게 추천 했던 OTT서비스를 저장한 후 mypage에서 띄운다.
