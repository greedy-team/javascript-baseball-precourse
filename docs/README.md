# 과제1 요구사항

1. 컴퓨터 랜덤 숫자 생성 (1~9, 서로 다른 3자리)
   - Random.pickNumberInRange(1, 9)를 3번 호출하여 한 자리씩 확정
   - 중복된 숫자가 나오면 다시 뽑기
2. 사용자 입력 처리
3. 입력값 검증 → 실패 시 alert으로 에러 메시지를 보여주고, 다시 입력할 수 있게 한다
   - 숫자가 아닌 경우
   - 세 글자가 아닌 경우
   - 중복된 숫자가 있는 경우
   - 0이 포함된 경우
4. 볼/스트라이크 판정 — play(computerInputNumbers, userInputNumbers)
   - 같은 수가 같은 자리 → 스트라이크
   - 같은 수가 다른 자리 → 볼
   - 같은 수가 전혀 없으면 → 낫싱
   - 결과 String 반환 (볼 먼저, 스트라이크 나중)
5. 결과 화면 출력
6. 게임 종료 처리 (3스트라이크 → 게임 종료 + 재시작 버튼 노출)
7. 게임 재시작 (재시작 버튼 클릭 → 새 랜덤 숫자로 초기화)

## 사용 라이브러리

- MissionUtils (index.html에 포함, import 불필요)
  - Random.pickNumberInRange(1, 9) — 랜덤 숫자 생성
- 외부 라이브러리(jQuery, Lodash 등) 사용 금지, 순수 Vanilla JS만 사용

## 코딩 컨벤션

- var 사용 금지, const와 let 사용
- Airbnb 자바스크립트 코드 컨벤션 준수
- indent depth 2 이하
- 함수(메소드)는 한 가지 일만 하도록 최대한 작게
- 함수(메소드) 길이 15라인 이하
- import 문으로 모듈화

## 검증

npm run test

# MVC 패턴 리펙토링

## Model

- Model은 Controller와 View에 의존하지 않아야 한다.
- 데이터 저장 및 처리

현재 웹에서 다루는 데이터

- 컴퓨터 랜덤 값
- 사용자 입력 값
- 스트라이크
- 볼

--- 모두에게 같게 보여지는 값인가? ---

- 컴퓨터 랜덤 값은 사용자가 입력하는 상태에 상관 없이 같은 값을 입력받는다. (Model)

## View

- View는 Model에만 의존해야 하고, Controller에는 의존하면 안된다.
- View가 Model로부터 데이터를 받을 때는, 사용자마다 다르게 보여주어야 하는 데이터에 대해서만 받아야 한다.
- View가 Model로 부터 데이터를 받을 때, 반드시 Controller에서 받아야 한다.
- 입력을 Controller로 전달

-> 재시도 display: none -> display: block

## Controller

- Controller는 Model과 View를 연결하는 역할
- Controller는 Model과 View에 의존해도 된다.
- 사용자 요청 처리 및 모델과 뷰 연결

-> 흐름 제어 로직

## 구현 결과

- Model: computerNumbers를 자체 관리 (constructor에서 초기화, randomNumbers()로 재생성)
- Model: play()는 파라미터로 userInput만 받고, computerNumbers는 this에서 사용
- View: showRestartButton() 추가 (3스트라이크 시 버튼 노출)
- Controller: constructor에서 이벤트 리스너 자동 등록
- App.js: new Controller(model, view) 한 줄로 조립
