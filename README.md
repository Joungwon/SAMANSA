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

> 2023.10.10 ~ 2023.11.17 (6주)

**Project. SAMANSA**
(Team. 사전을 만드는 사람들)

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

## :bulb: 프로젝트 기획

> 사용자가 만드는 사전,
>
> 사람들이 만드는 사전,
>
> 사전을 만드는 사람들이 완성한
>
> **SAMANSA**

<br/>

### 배경

**당신이 원하는 모든 것을 검색해보세요.**

<hr>

> 하루가 다르게 생기는 신조어들은 사람들 사이의 소통에 장애를 가져오고 있습니다. 예전에는 신조어 때문에 세대 간의 의사소통이 어려워 갈등이 심해진다고 하였지만 최근의 뉴스는 이 신조어로 인하여 같은 세대 안에서도 소통에 어려움을 겪고 있는 일이 많습니다.
>
> 신조어를 포탈에서 검색하면 맨 처음에 ‘ㅇㅇ 뜻’ 이 자동완성에 가장 먼저 뜨는 만큼 요즘 사람들은 인터넷 포털 사이트에서 단어의 뜻을 많이 찾아보고 있습니다. 하지만 포탈에서 검색어를 찾아보는 경우 쉽게 뜻이 나오지 않는 경우도 많습니다.

**저희가 제공하고자 하는 서비스는 사용자가 직접 단어에 대해 정의를 하고, 다른 사용자들이 그 단어에 대하여 평가하여 단어 사전을 만들어 가는 서비스입니다.**

> 다른 사람들과 소통을 하며 모르는 단어가 나오면 그 단어가 무슨 뜻으로 쓰이는지 쉽게 찾아볼 수 있는 사용자 정의 사전 서비스를 만들고 싶었습니다.

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

### 소셜 로그인 & 회원가입 & 닉네임 검사

|                                                  로그인                                                   |                                                                         닉네임 검사                                                                         |
| :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     ![로그인](https://github.com/H4R1B0/samansa/assets/12294460/2888afb8-8e83-49d3-9578-bd7c5bbca847)     |                           ![닉네임 검사](https://github.com/H4R1B0/samansa/assets/12294460/fc96e3c2-f8e3-4c0c-820f-63370aa5de68)                            |
| 사용자 편의성을위해 소셜 로그인을 구현했습니다.<br>카카오와 네이버 계정으로 로그인/회원가입이 가능합니다. | 회원가입을 한 경우, 최초 로그인 사용자로 판단해 닉네임 설정 페이지로 이동하게 됩니다. <br> 닉네임을 지정하면 가입이 완료됩니다.<br>닉네임은 중복확인합니다. |

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

### 단어 등록하기

### 검색 및 검색 결과 확인

### 색인 기능으로 단어 검색하기

### 좋아요, 싫어요로 단어 평가하기

### 단어 삭제하기 & 신고하기 & 공유하기

<br/>

[🔼 목차로 돌아가기](#목차)

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
📦frontend
 ┣ 📂.next
 ┣ 📂.storybook
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┣ 📂login
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂(main)
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┃ ┣ 📂KakaoLoginButton
 ┃ ┃ ┃ ┃ ┃ ┗ 📂NaverLoginButton
 ┃ ┃ ┃ ┣ 📂nickname
 ┃ ┃ ┃ ┗ 📂redirect
 ┃ ┃ ┣ 📂create
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂test
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📂CreateButton
 ┃ ┃ ┃ ┣ 📂DeleteButton
 ┃ ┃ ┃ ┣ 📂IndexButton
 ┃ ┃ ┃ ┣ 📂LikeButton
 ┃ ┃ ┃ ┣ 📂LogoutButton
 ┃ ┃ ┃ ┣ 📂PaginationButton
 ┃ ┃ ┃ ┣ 📂ReportButton
 ┃ ┃ ┃ ┣ 📂RouteButton
 ┃ ┃ ┃ ┣ 📂ShareButton
 ┃ ┃ ┃ ┣ 📂VoteButton
 ┃ ┃ ┃ ┣ 📂WordVoteButton
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┣ 📂Form
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📂SearchInput
 ┃ ┃ ┃ ┗ 📂ValueInput
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂Skeleton
 ┃ ┃ ┗ 📂Textarea
 ┃ ┣ 📂context
 ┃ ┣ 📂store
 ┃ ┣ 📂stories
 ┃ ┃ ┗ 📂assets
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂loader
 ┃ ┗ 📂vendor
 ┗ 📜yarn.lock

```

### BackEnd

```

📦backend/memetionary
 ┣ 📂gradle
 ┃ ┗ 📂wrapper
 ┃ ┃ ┣ 📜gradle-wrapper.jar
 ┃ ┃ ┗ 📜gradle-wrapper.properties
 ┣ 📂src
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┃ ┗ 📂memetionary
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂declaration
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂hashtag
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂link
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂member
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂oauth2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂filter
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂handler
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂token
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂util
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂word
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂wordes
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂document
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┗ 📂resources
 ┃ ┃ ┃ ┣ 📂elasticsearch
 ┃ ┗ 📂test
 ┃ ┃ ┗ 📂java
 ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┗ 📂ssafy
 ┃ ┃ ┃ ┃ ┃ ┗ 📂memetionary
 ┣ 📜build.gradle
 ┣ 📜Dockerfile

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
