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

# 구현 기능

### 메인 페이지

### 회원가입 페이지

- 회원가입 양식이 알맞지 않으면 alert로 경고창 출력
- 회원가입 후 로그인 페이지로 이동

### 2. 로그인/로그아웃

- 로그인 후 token을 localstorage에 담음
- 로그인 양식이 알맞지 않으면 alert로 경고창 출력

### 3. 접근제한

- 페이지가 이동될 대마다 localstorage에 있는 token이 유효한지 확인
- 확인 후 !valid면 로그인 페이지로 이동
- 로그인 후 로그인과. 회원가입 페이지 접근 시도하면 메인 페이지로 이동
- 로그인 전, 후 ui 변경
- 기본적인 page 라우팅 작업

### 4. Header navBar 구현

- 로그인 전 후 ui 변경
- 토글 기능

### 5. TopMovie List 메인페이지에 표시

- axios로 요청한 Top Rated Movie
- img 클릭 하면 그 타켓의 detail 정보 모달을 이용해 띄움.

### 6. 영화 검색기능

- pagination 기능
- 검색 필터링 적용
- 검색 단어 onChange 시 바로 반영하여 결과창 띄움
- img 클릭 시 detail modal

### 7. 서비스 소개 페이지

- rechart를 이용하여 인사이트 도출
- 서비스 소개 페이지 내 추천 서비스 라우팅
- 팀 소개 페이지

### 8. OTT 추천 서비스

- 성별, 나이, 우선순위 등을 입력 받아 recoil atom에 값 저장
- 장르, 선호하는 영화 선택 시 토글 기능 구현
- 선호하는 영화 이미지 클릭 시 세부정보 모달을 이용해 띄움.
- 페이지네이션

### 9. 영화 추천 서비스

- 개인에게 적합한 영화 (ott추천 서비스의 문항값을 토대로) 추천
- 이미지 클릭 시 세부정보 모달을 이용해 띄움.
- 좋아요 버튼 구현
- img hover 시에 user와 일치율 보여줌.

### 10. 마이페이지

- 추천받은 ott, contents 리스트 보여줌.
-
