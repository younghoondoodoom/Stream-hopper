# 사용기술

- react
- react-router-dom
- react-modal
- react-wordcloud
- recoil
- axios
- recharts
- bootstrap
- scss

# 폴더 구조

```bash
frontend
|
├── public
│
├── src
│   │
|   |
│   ├── api : axios 통신 모음
│   │
|   |
│   ├── components
│   │       |── access : 라우팅 접근 권한 설정한 component
|   |       |
|   |       |── intro, main, ott-test 각 page별 컴포넌트 폴더
|   |       |
|   |       |── 기타 : navBar, Routing 등
|   |
│   ├── images : 이미지 모음
│   │
|   |
│   ├── pages : service page
│   │
|   |
│   └── store : user / movie / test store
└── App.js / App.scss
```

## 실행(stream-hopper/djangoreact에서 실행)

1. migrate
   python manage.py migrate 실행

2. runserver
   python manage.py runserver

3. npm start(port:8000)
   cd frontend
   npm install
   npm start

# 구현 기능

### 1. 홈 페이지

- Header navBar : search, toggle-menu
- 로그인 전 후 ui 변경
- backgroundImg 슬라이드

### 2. 회원가입 페이지 & 로그인 페이지

- 회원가입 양식이 알맞지 않으면 alert로 경고창 출력
- 회원가입 후 로그인 페이지로 이동
- 로그인 후 token을 localstorage에 저장
- 로그인 양식이 알맞지 않으면 alert로 경고창 출력

#### 접근제한

- 페이지가 이동될 대마다 localstorage에 있는 token이 유효한지 확인
- 확인 후 !valid면 로그인 페이지로 이동
- 로그인 후 로그인과. 회원가입 페이지 접근 시도하면 메인 페이지로 이동
- 로그인 전, 후 ui 변경

### 3. 메인 페이지

- axios로 요청한 Top Rated Movie 메인페이지에 표시
- img 클릭 하면 그 타켓의 detail 정보 모달 구현.

#### 영화 검색기능

- pagination 기능
- 검색 필터링 적용
- 검색 단어 onChange 시 바로 반영하여 결과 출력
- img 클릭 시 detail modal

### 4. 서비스 소개 페이지

- rechart를 이용하여 인사이트 도출
- 서비스 소개 페이지 내 추천 서비스 라우팅
- 팀 소개 페이지

### 5. OTT 추천 서비스 페이지

- 성별, 나이, 우선순위 등을 입력 받아 recoil atom에 값 저장
- 문항을 다 선택해야 다음 페이지로 갈 수 있음.
- 장르, 선호하는 영화 선택 시 토글 기능 구현
- 선호하는 영화 이미지 클릭 시 모달.
- 페이지네이션

### 6. 영화 추천 서비스 페이지

- 개인에게 적합한 영화 (ott추천 서비스의 문항값을 토대로) 추천
- 이미지 클릭 시 세부정보 모달을 이용해 띄움.
- 좋아요 버튼 구현
- img hover 시에 user와 일치율 보여줌.
- 제출 버튼 클릭 시 문항 값 post 요청

#### 결과 페이지

- 자신에게 적합한 ott 정보(가격, 화질, 동시 접속 인원 등)
- 문항 조사 시 user가 가장 중요하게 생각하는 장르 보

### 7. 마이페이지

- 추천받은 ott, contents 리스트 보여줌.
- contents delete 기능 구현
