## 프로젝트 소개
### BeBeFace
“맘편히 맡겨, 엄마의 눈과 마음을 대신하다”<br>
'BeBeFace'는 부모와 돌보미간의 원활한 소통을 돕고 아기의 성장과정을 체계적으로 기록하는 서비스를 제공하는 플랫폼입니다. 현대 사회에서 많은 부모들이 자녀를 타인에게 맡겨야 하는 현실에 직면하고 있습니다. 이런 상황에서 부모들이 가장 크게 고민하는 것이 자녀의 안전과 건강입니다. 'BeBeFace'는 이러한 부모들의 불안을 줄이기 위해 탄생하였습니다.

### 개발기간
2023.11.09~2023.12.19

### 팀인원
4인

### 주요 기능
부모의 빈자리를 채워줄 수 있는 대표적인 두가지 서비스
- AI
  - 아기 침대에 부착된 캠으로 아이를 24시간 돌봄
  - 아이표정을 인식하여 울음, 웃음, 뒤집힘이 감지되면 모바일 폰으로 알림 전송
- 애플리케이션
  - 아기 행동 기록(타임라인)
  - 돌보미 출/퇴근 기록
  - 아기 하루일기
  - 아기 앨범(AI로 웃음이 감지되면 이를 캡처하여 앨범에 적재)


### 담당 업무
- 웹 프론트엔드 개발

  
### 사용기술
- next.js, typescript, swr, react-hook-form, axios, tailwind, prettier, eslint
- next.js를 선택한 이유
  - React Native를 선택한 이유에도 PWA을 만들수 있고 React Native를 통해 크로스 플랫폼 앱을 만들 수 있지만, 개발 진행중 카메라 기능이 필요할지도 모르는 일부 불확실한 부분이 있었으므로 PWA보다 디바이스의 활용이 훨씬 자유로운 React Native를 선택
  - 아이의 표정이 감지되면 앱으로 메시지를 보내주어야 하는데 이것을 어디선가 받고 다시 앱에 메시지를 보내는 로직이 필요. 이러한 처리를 위해서는 서버가 필요했고 서버로써의 역할도 하며 프런트 UI의 간편하게 개발할 수 있는 프런트의 역할도 하는 Next.js를 선택
  - Vue의 Nuxt.js와 React의 Next.js 중에서 Nextjs를 선택한 이유는 Mobile App을 크로스 플랫폼 앱인 React Native로 만들기로 하여 Next.js와 React Native는 둘 다 React를 기반으로 하여 러닝커브가 적은 Next.js를 선택

### 프로젝트를 진행하면서 어려웠던 점
- 백엔드는 클라우드가 아닌 개인 PC에 환경 구축하여 통신이 어려움
- 같은 와이파이를 사용하였기 때문에 IP로 접속하여 테스트를 진행하였으나 백앤드 개발자가 부재중일 때는 테스트가 어려움
- 이를 해결하기 위해 Node.js로 mock api를 구현하여 테스트를 진행


## 설치 및 실행
```bash
npm install // 모듈 설치

npm run build // 프로덕션 환경으로 빌드
npm run start // 프로덕션 모드로 빌드된 애플리케이션을 실행
or
npm run dev // 개발 모드로 실행
```


## 배포
https://wondrous-pudding-b2d415.netlify.app

※ 웹 프론트서버만 호스팅 된 상태로 백서버, DB서버, Flask서버는 로컬 PC에 있어 실제 사용은 불가능<br>
   그럼에도 불구하고 웹 프론트서버만 호스팅 한 이유는 원활한 모바일 앱으로 알림을 보내기 위해


## 시스템 아키텍처
<img src="https://github.com/kosa-final-HLKP/fe-web/assets/59562141/367a4ae9-a213-43d0-8460-4dab3a05c6c7" alt="drawing" width="600"/>

- 프론트웹서버(Next.js)와 백서버(Spring Boot)는 http 프로토콜을 통해 통신
- 백엔드 서버는 로컬DB(MySQL)에 접속하여 데이터 관리
- AI는 Flask 가상환경에서 Tensorflow와 Pythorch로 호환되기 쉽도록 ONNX형식으로 내보내진 YOLO모델을 활용
- AI에서 아기의 울음, 웃음, 뒤집힘이 감지되면 http 통신으로 프론트웹서버(Next.js)에 http 호출하여 모바일 알림을 요청
- 프론트웹서버(Next.js)에서 Firebase FCM을 이용하여 http통신으로 모바일 알림을 요청
- Firebase에서 토큰이 발급된 디바이스(React Native)로 알림 요청
- AI에서 아기의 웃음이 감지되면 백서버(SpringBoot)로 http 통신하여 웃는 이미지를 전송, 이 이미지를 전달받은 백서버(Spring Boot)는 DB에 저장

## 데이터베이스
<img src="./UI캡처/16.png" alt="drawing" width="600"/>
<img src="./UI캡처/14.png" alt="drawing" width="600"/>
<img src="./UI캡처/15.png" alt="drawing" width="600"/>


## UI 캡쳐
<img src="./UI캡처/4.png" alt="drawing" width="600"/>
<img src="./UI캡처/2.png" alt="drawing" width="600"/>
<img src="./UI캡처/13.png" alt="drawing" width="600"/>
<img src="./UI캡처/3.png" alt="drawing" width="600"/>
<img src="./UI캡처/7.png" alt="drawing" width="600"/>
<img src="./UI캡처/12.png" alt="drawing" width="600"/>
<img src="./UI캡처/5.png" alt="drawing" width="600"/>
<img src="./UI캡처/6.png" alt="drawing" width="600"/>
<img src="./UI캡처/1.png" alt="drawing" width="600"/>
<img src="./UI캡처/8.png" alt="drawing" width="600"/>
<img src="./UI캡처/11.png" alt="drawing" width="600"/>
<img src="./UI캡처/9.png" alt="drawing" width="600"/>
<img src="./UI캡처/10.png" alt="drawing" width="600"/>
  
