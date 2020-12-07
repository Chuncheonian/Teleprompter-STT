# Teleprompter-STT

## Table of Contents
  - [프로젝트 소개](#-프로젝트-소개)
  - [주요 기능](#-주요-기능)
  - [Directory 구조](#-directory-구조)
  - [설치 방법](#keyboard-설치-방법)
  - [팀원](#-팀원)
  - [Reference](#-reference)
  - [License](#-license)


## 🎙 프로젝트 소개
  - 음성에 맞춰 대본을 화면에 실시간으로 출력하는 프롬프터 서비스
  - Untact시대에 화상회의에서 편하게 발표할 수 있도록 도와주는 서비스


## 📜 주요 기능
  - [**Web Speech API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) && [**string-similarity API**](https://www.npmjs.com/package/) 사용
  - Real-time Script Output


## 🗂 Directory 구조
```bash
Teleprompter-STT
├── client                        ---> Front-end [React]
│   ├── public                    ---> 정적 파일 보관
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── components
│   │   │   └── Teleprompter.js   ---> 음성인식 && 문장유사도 수행 
│   │   ├── pages
│   │   │   ├── MainPage.js       ---> 메인 화면
│   │   │   └── PrompterPage.js   ---> 대본 출력 화면
│   │   ├── App.css
│   │   ├── App.js                ---> Router
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   ├── serviceWorker.js
│   │   ├── setupTests.js
│   │   └── styles.js             ---> PrompterPage.js Style
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
│
├── .gitignore
├── LICENSE                       ---> MIT License
├── package-lock.json
├── package.json
├── README.md
└── server.js                     ---> Back-end [Node.js Express]
```

## :keyboard: 설치 방법


#### client 폴더 이동
`$ cd Teleprompter-STT/client`

#### React에 필요한 모듈 설치
`$ npm install`

#### Build File 생성
`$ npm run build`

#### Teleprompter-STT 폴더 이동
`$ cd ..`

#### Node.js에 필요한 모듈 설치
`$ npm install`

#### 시작
`$ npm run server`


## 👥 팀원
- 권동영 (2016110307)
- 김다솔 (2017110268)



## 📋 Reference
- [**Web Speech API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [**string-similarity API**](https://www.npmjs.com/package/)
  


## 📋 License
Teleprompter-STT is [MIT licensed](./LICENSE).
<br></br>
[👆Back To The Top](#Teleprompter-STT)