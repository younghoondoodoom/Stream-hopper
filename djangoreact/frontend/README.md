# 사용기술
- react
- react-router-dom v6
- react-modal
- recoil
- bootstrap
- sass

# 폴더 구조
```bash
frontend
├── public  
│   
├── src
│   ├── components 
│   │       |── access : 라우팅 접근 권한 설정한 component
|   |       |
|   |       |── google : google로그인 기능 관련 컴포넌트(미완)
|   |       |
|   |       |── 기타 : navBar, Spinner, Routing 등
|   |
│   ├── images : 이미지 모음
│   │
|   |
│   ├── pages : Home, Main, Intro, Login, Register 등
│   │
|   |
│   └── store : user / movie store
└── App.js / App.scss
``` 

# 구현 기능
### 1. 회원가입
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
- img 클릭 시 detail modal
