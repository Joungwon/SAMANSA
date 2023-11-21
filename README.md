<img src="https://github.com/H4R1B0/samansa/assets/12294460/2225b4fd-58c7-4c0d-95d3-00809cba40fd" />

### 목차

| [소개](#소개)                               | [구현](#구현)                                           | [마치며](#마치며)                           |
| :------------------------------------------ | :------------------------------------------------------ | :------------------------------------------ |
| [:book: 개요](#book-개요)                   | [:dart: 주요 페이지 및 기능](#dart-주요-페이지-및-기능) | [:boy: 팀원](#boy-팀원)                     |
| [:bulb: 프로젝트 기획](#bulb-프로젝트-기획) | [:rocket: 기능시연](#rocket-기능시연)                   | [:mega: 소감](#mega-소감)                   |
| [:cactus: 빌드 환경](#cactus-빌드-환경)     | [:eyes: 산출물](#eyes-산출물)                           | [:seedling: 회고 기록](#seedling-회고-기록) |
|                                             | [:books: 파일 구조도](#books-파일-구조도)               |                                             |

<br/>

# 소개

## :book: 개요

**_👏 SSAFY 9기 2학기 자율 프로젝트 👏_**
사만사(사용자가 만드는 사전)

> 2023.10.10 ~ 2023.11.17 (6주)

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

## :bulb: 프로젝트 기획

<br/>

### 배경

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

## :cactus: 빌드 환경

| FrontEnd                | BackEnd                                      | Database      | Infra                        |
| :---------------------- | :------------------------------------------- | :------------ | :--------------------------- |
| Node.js 18.16.1         | Java 17 (Azul Zulu version 17.0.8)           | MySQL         | Vultr EC2 (Ubuntu 20.04 LTS) |
| React.js 18.2.0         | Spring Boot 3.1.4                            | Redis         | Vultr Kubernetes             |
| react-dom 18.2.0        | Gradle 8.2.1                                 | Elasticsearch | Nginx 1.18.0                 |
| react-icons 4.10.1      | JPA                                          | MongoDB       | Jenkins 2.401.2 LTS          |
| react-modal 3.16.1      | IntelliJ IDEA 2023.1.3<br>(Ultimate Edition) |               | Docker 23.0.6                |
| react-router-dom 6.14.2 | lombok                                       |               | Docker Compose 2.17.3        |
| react-scripts 5.0.1     | mail                                         |
| react-select 5.7.4      | JWT                                          |
| Axios 1.4.0             |
| Recoil 0.7.7            |
| recoil-persist 5.1.0    |
| styled-components 6.0.6 |
| yarn 1.22.19            |
| openvidu-browser 2.28.0 |
| web-vitals 2.1.4        |

<br>

[🔼 목차로 돌아가기](#목차)

<br>

# 구현

## :dart: 주요 페이지 및 기능

### 메인 페이지

![메인 페이지](https://github.com/H4R1B0/samansa/assets/12294460/d7794e20-1d6b-476e-92b4-56b9d90adfc2)

### 소셜 로그인 & 회원가입

|                                                  로그인                                                   |                                                   회원가입                                                    |
| :-------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|     ![로그인](https://github.com/H4R1B0/samansa/assets/12294460/2888afb8-8e83-49d3-9578-bd7c5bbca847)     |      ![회원가입](https://github.com/H4R1B0/samansa/assets/12294460/fc96e3c2-f8e3-4c0c-820f-63370aa5de68)      |
| 사용자 편의성을위해 소셜 로그인을 구현했습니다.<br>카카오와 네이버 계정으로 로그인/회원가입이 가능합니다. | 회원가입의 경우 환영 페이지로 이동하며, <br> 닉네임을 지정하면 가입이 완료됩니다.<br>닉네임은 중복확인합니다. |

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

<br/>

## :eyes: 산출물

|                     요구사항명세서                     |
| :----------------------------------------------------: |
| ![요구사항명세서](/image/산출물_요구사항%20명세서.JPG) |

|                API 명세서                 |               API 명세서(세부)                |
| :---------------------------------------: | :-------------------------------------------: |
| ![API명세서](/image/산출물_API명세서.png) | ![API 상세](/image/산출물_API명세서_세부.png) |

|              ERD              |
| :---------------------------: |
| ![ERD](/image/산출물_ERD.png) |

|                   시스템 구조도                    |             지라 이슈             |
| :------------------------------------------------: | :-------------------------------: |
| ![시스템구조도](/image/산출물_시스템%20구조도.png) | ![지라이슈](/image/Jira_차트.png) |

### 지라 번다운 차트

|                  1주차 스프린트                  |                  2주차 스프린트                  |                  3주차 스프린트                  |
| :----------------------------------------------: | :----------------------------------------------: | :----------------------------------------------: |
| ![번다운차트2](/image/Jira_번다운차트_1주차.PNG) | ![번다운차트3](/image/Jira_번다운차트_2주차.PNG) | ![번다운차트4](/image/Jira_번다운차트_3주차.PNG) |

|                  4주차 스프린트                  |                  5주차 스프린트                  |                  6주차 스프린트                  |
| :----------------------------------------------: | :----------------------------------------------: | :----------------------------------------------: |
| ![번다운차트2](/image/Jira_번다운차트_4주차.PNG) | ![번다운차트3](/image/Jira_번다운차트_5주차.PNG) | ![번다운차트4](/image/Jira_번다운차트_6주차.PNG) |

### 최종발표 PPT

![최종발표 PPT](/image/최종발표_PPT.gif)

<br>

[🔼 목차로 돌아가기](#목차)

<br/>

## :books: 파일 구조도

### FrontEnd

```
frontend
├── node_modules
├── public
│    └── assets                // 이미지 파일 저장 위치
│		      ├──  favicon.ico     // 파비콘
│		      └──  icons           // 아이콘 모음
│		           └── ...
├── src
│    ├──  layout.tsx           // 최상단 컴포넌트
│    ├──  app
│		 │    ├──  (main)          // 메인 페이지
│		 │    │    ├── page.tsx
│		 │    │    └── Home.module.css
│		 │    ├──  auth            // 로그인 페이지
│		 │    │    ├── login
│		 │    │    │    ├── page.tsx
│		 │    │    │    └── LoginPage.module.css
│		 │    │    ├── redirect
│		 │    │    │    ├── page.tsx
│		 │    │    │    └── RedirectPage.module.css
│		 │    │    └── nickname
│		 │    │         ├── page.tsx
│		 │    │         └── NicknamePage.module.css
│		 │    ├──  create          // 단어등록 페이지
│		 │    │    ├── page.tsx
│		 │    │    └── CreatePage.module.css
│		 │    └──  fonts           // 폰트 적용
│		 │
│    ├── components            //  컴포넌트 모음
│		 │    ├──  Form
│		 │    │    └── ...
│		 │    ├──  Card
│		 │    │    └── ...
│		 │    ├──  Button
│		 │    │    └── ...
│		 │    ├──  Header
│		 │    │    └── ...
│		 │    ├──  Input
│		 │    │    └── ...
│		 │    ├──  Textarea
│		 │    │    └── ...
│		 │    └──  Modal
│		 │         └── ...
│		 │
│    ├── stories
│    │    └── assets
│    │         └── ...
│    └── utils                 // 최상단 루트경로에 적용할 라이브러리
│         ├── loader
│         ├── ReactQuaryProvider.tsx        // 리액트 쿼리 적용
│         ├── hydrateOnClient.tsx
│         └── getQuaryClient.tsx
│
├── .storybook                 // 스토리북 루트
│    ├──  main.ts
│    └──  preview.ts
├──.env
├──.eslintrc.json              // eslint 규칙 설정
├──.prettierrc                 // prettier 규칙 설정
├── tsconfig.json              // path alias(절대경로) 설정
├── next.config.js             // swc 빌드 적용 파일
└── package.json
```

### BackEnd

```
backend/memetionary
├── gradle/wrapper
│ ├── gradle-wrapper.jar
│ └── gradle-wrapper.properties
├── src
│ ├── main
│ │ ├── java/com/ssafy/memtionary
│ │ │ ├── common
│ │ │ │ ├── controller
│ │ │ │ ├── ...
│ │ │ │ └── CustomErrorType.java
│ │ │ ├── declaration
│ │ │ │ ├── controller
│ │ │ │ ├── ...
│ │ │ │ └── service
│ │ │ ├── hashtag
│ │ │ │ ├── entity
│ │ │ │ ├── repository
│ │ │ │ └── service
│ │ │ ├── link
│ │ │ │ ├── entity
│ │ │ │ ├── repository
│ │ │ │ └── service
│ │ │ ├── member
│ │ │ │ ├── controller
│ │ │ │ ├── ...
│ │ │ │ └── service
│ │ │ ├── oauth2
│ │ │ │ ├── domain
│ │ │ │ ├── ...
│ │ │ │ ├── token
│ │ │ │ └── repository
│ │ │ ├── word
│ │ │ │ ├── controller
│ │ │ │ ├── ...
│ │ │ │ └── service
│ │ │ ├── wordes
│ │ │ │ ├── controller
│ │ │ │ ├── ...
│ │ │ │ └── service
│ │ │ ├── config
│ │ │ │ └── ...
│ │ │ ├── util
│ │ │ │
│ │ │ └── MemetionaryApplication.java
│ │ │
│ │ └── resources/elasticsearch
│ │ ├── word-mapping.json
│ │ └── word-setting.json
│ │
│ └── test/java/com/ssafy/memtionary
│ ├── word-mapping.json
│ └── word-setting.json
│
├── build.gradle
├── settings.gradle
├── gradlew
└── gradlew.bat

```

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

# 마치며

## :boy: 팀원

### 팀원 역할 상세

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

<br/>

[🔼 목차로 돌아가기](#목차)

```

```
