<img src="image/samansa_logo.png" alt="서비스 로고">

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

| FrontEnd          | BackEnd                                      | Database            | Infra                        |
| :---------------- | :------------------------------------------- | :------------------ | :--------------------------- |
| React 18.2.0      | Java 17 (Azul Zulu version 17.0.8)           | MySQL 8.0.33        | Vultr EC2 (Ubuntu 20.04 LTS) |
| Next.js 13.5.4    | Spring Boot 3.1.4                            | Redis 7.2.1         | Vultr Kubernetes 1.27.6      |
| TypeScript 5.2.2  | Gradle 8.2.1                                 | Elasticsearch 8.7.1 | Nginx 1.18.0                 |
| Recoil 0.7.7      | Spring Data JPA                              |                     | Jenkins 2.427                |
| React-Query 5.0.5 | IntelliJ IDEA 2023.1.3<br>(Ultimate Edition) |                     | Docker latest                |
| ModuleCSS         | lombok                                       |                     | LoadBalancer                 |
| HTML5             | JWT                                          |
| yarn berry 3.6.4  |
| node 18.17.1 LTS  |

<br>

[🔼 목차로 돌아가기](#목차)

<br>

# 구현

## :dart: 주요 페이지 및 기능

### 메인 페이지

![메인 페이지](image/samansa_main.png)

### 소셜 로그인 & 회원가입 & 닉네임 검사

|                                                  로그인                                                   |                                                                         닉네임 검사                                                                         |
| :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                    ![로그인](image/samansa_login.png)                                     |                                                         ![닉네임 검사](image/samansa_register.gif)                                                          |
| 사용자 편의성을위해 소셜 로그인을 구현했습니다.<br>카카오와 네이버 계정으로 로그인/회원가입이 가능합니다. | 회원가입을 한 경우, 최초 로그인 사용자로 판단해 닉네임 설정 페이지로 이동하게 됩니다. <br> 닉네임을 지정하면 가입이 완료됩니다.<br>닉네임은 중복확인합니다. |

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

### 단어 등록하기

![단어 등록](/image/samansa_word_register.png)

- 사용자는 본인이 원하는 단어에 대한 정의를 직접 등록할 수 있습니다.
- 해당 단어에 대한 예시 문장을 통해 단어에 대한 이해를 높일 수 있습니다.
- 단어를 정의할 수 있는 해시태그를 직접 등록합니다.

<br>

### 검색 및 검색 결과

![검색 페이지](/image/samansa_search.gif)

- 사용자는 궁금한 단어를 검색해볼 수 있습니다.
- 검색 결과에 대한 단어의 정의를 확인할 수 있습니다.
- Elasticsearch를 통해 입력하는 단어에 대한 자동완성 기능을 지원합니다.

<br>

### 색인 기능으로 단어 검색하기

![색인 기능](/image/samansa_index.png)

- 색인 기능을 통해 단어를 검색할 수 있게 사전의 사용성을 높였습니다.
- ㄱ~ㅎ 버튼 외의 **new** 버튼을 통해 최신 7일간의 등록 단어를 색인할 수 있습니다.

<br>

### 좋아요, 싫어요로 단어 평가하기

![색인 기능](/image/samansa_like.png)

- 사용자는 단어에 대해 좋아요/싫어요를 눌러 단어를 평가할 수 있습니다.
- 단어에 대한 좋아요/싫어요를 누르면 해당 단어의 좋아요/싫어요 개수가 증가합니다.
- 좋아요/싫어요 점수로 메인 페이지의 단어 출력 순서가 결정됩니다.
- 좋아요/싫어요 기능은 IP를 기준으로 하기 때문에 비로그인 상태로도 이용할 수 있습니다.

<br>

### 단어 삭제하기 & 신고하기 & 공유하기

- 사용자는 본인이 등록한 단어를 삭제할 수 있습니다.
- 사용자는 단어를 SNS(트위터, 페이스북)로 공유할 수 있습니다.
- 로그인한 사용자는 올바르지 않다고 생각하는 단어에 대해 신고를 진행할 수 있습니다.

<br>

### 모바일 화면 지원

- 모바일 기기로 서비스를 이용하는 사용자를 위해 모바일 화면을 지원합니다.

<br>

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

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/Juahjoah">
            <img src="https://avatars.githubusercontent.com/Juahjoah" width="140px" /> <br><br> 👑 김주아 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/ninnistic">
            <img src="https://avatars.githubusercontent.com/ninnistic" width="140px" /> <br><br> 🎀 박지영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/H4R1B0">
            <img src="https://avatars.githubusercontent.com/H4R1B0" width="140px" /> <br><br> 🐲 박현준 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/Joungwon">
            <img src="https://avatars.githubusercontent.com/Joungwon" width="140px" /> <br><br> 🌳 석정원 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/jungmin0049">
            <img src="https://avatars.githubusercontent.com/jungmin0049" width="140px" /> <br><br> 🧸 손정민 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/hwanheeisjoy">
            <img src="https://avatars.githubusercontent.com/hwanheeisjoy" width="140px" /> <br><br> 🦦 조환희 <br>(Back-End) </a> <br></td>
    </tr>
</table>

### 팀원 역할 상세

<br/>

[🔼 목차로 돌아가기](#목차)

<br/>

## :mega: 소감

<br/>

### 😊 김주아

```

```

### 😎 박지영

```

```

### 🍇 박현준

```

```

### 🏡 석정원

```

```

### 🥳 손정민

```

```

### 👶 조환희

```

```

<br/>

## :seedling: 회고 기록

### [2주차 회고😁](/retrospective/2주차회고.md)

### [3주차 회고🤒](/retrospective/3주차회고.md)

### [4주차 회고🤭](/retrospective/4주차회고.md)

### [5주차 회고🤩](/retrospective/5주차회고.md)

<br/>

[🔼 목차로 돌아가기](#목차)
