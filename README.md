# Bittersweet Web Page

### Web Page URL: https://bittersweet.ml/

## 🔷 설명

- ‘Bittersweet Korea’라는 임의의 커피 브랜드를 만들어 해당 브랜드 관련 내용을 소개 및 안내하는 웹 페이지를 구현한다.

- 웹 페이지에는 신 메뉴를 홍보하는 메인 페이지를 비롯하여 브랜드 소개, 판매하는 제품 메뉴 안내, 자주 묻는 질문 정리, 공지사항 안내 게시판 및 해당 브랜드의 오프라인 매장 위치 찾기를 위한 지도 API 등을 포함한다.

- 클라이언트는 CRA(Create React App)를 통해, 서버는 Node.js로 환경을 구축하기 위해 Express 프레임워크를 사용하였다. 로그인 및 게시판 CRUD 기능의 구현을 위해 Database는 MongoDB와 Mongoose를 사용하였다.

- 배포는 먼저 도메인을 Freenom에서 발급받고 AWS Route53을 통해 호스팅 영역을 구성하였고, AWS EC2를 통해 배포를 진행하였다. 또한 HTTPS를 위한 SSL인증서를 발급받았다.

## 🔷 폴더 구조 Tree

```markup
react-bittersweet
├── client
│   ├── build
│   ├── jsconfig.json
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
│       ├── App.js
│       ├── _actions
│       │   ├── types.js
│       │   └── user_action.js
│       ├── _reducers
│       │   ├── index.js
│       │   └── user_reducer.js
│       ├── components
│       │   ├── Footer.js
│       │   ├── Nav.js
│       │   ├── ScrollBtn.js
│       │   ├── faq
│       │   │   └── FormOfFaq.js
│       │   ├── menu
│       │   │   ├── FormOfMenu.js
│       │   │   └── FormOfMenuDetail.js
│       │   ├── store
│       │   │   └── KakaoMap.js
│       │   └── whatsnew
│       │       ├── FormOfNotice.js
│       │       ├── FormOfNoticeDetail.js
│       │       └── FormOfNoticeWrite.js
│       ├── css
│       │   └── App.module.css
│       ├── data
│       │   └── menuData.json
│       ├── hoc
│       │   └── auth.js
│       ├── hooks
│       │   └── useScrollFadeIn.js
│       ├── images
│       ├── index.js
│       ├── routes
│       │   ├── LoginPage.js
│       │   ├── RegisterPage.js
│       │   ├── aboutUs
│       │   │   ├── AboutUs.js
│       │   │   ├── BrandPrinciple.js
│       │   │   ├── Coffee.js
│       │   │   └── History.js
│       │   ├── faq
│       │   │   └── Faq.js
│       │   ├── home
│       │   │   └── Home.js
│       │   ├── menu
│       │   │   ├── Menu.js
│       │   │   ├── MenuBeverage.js
│       │   │   ├── MenuCoffee.js
│       │   │   ├── MenuDetail.js
│       │   │   └── MenuTea.js
│       │   ├── store
│       │   │   └── Store.js
│       │   └── whatsNew
│       │       ├── Notice.js
│       │       ├── NoticeDetail.js
│       │       ├── NoticeEdit.js
│       │       └── NoticeWrite.js
│       └── setupProxy.js
├── node_modules
├── package-lock.json
├── package.json
├── .gitignore
└── server
    ├── config
    │   ├── dev.js
    │   ├── key.js
    │   └── prod.js
    ├── index.js
    ├── middleware
    │   └── auth.js
    └── models
        ├── Posting.js
        └── User.js
```
