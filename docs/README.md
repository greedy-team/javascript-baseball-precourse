## 기능 구현 목록

BaseballGame.js
BaseballGame 클래스 ⇒ 랜덤한 숫자, 유저가 쓴 숫자를 비교하는 클래스

[알맞은 입력인지 검증하는 기능]

- isValidInput
  - 두 배열이 숫자 배열인지 확인하는 기능
  - 배열 길이가 동일한지 검증하는 기능

[입력값에 따른 결과 계산 기능]

- calculateResult
  - 같은 위치에 같은 숫자가 있으면 스트라이크로 판정하는 기능
  - 위치는 다르지만 숫자가 일치하면 볼로 판정하는 기능
  - 최종적으로 {strike, ball} 객체 형태로 결과 반환

[결과 출력 기능]

- textResult
  - 스트라이크와 볼이 모두 0이면 "낫싱" 출력
  - 스트라이크와 볼 개수에 따라 "X볼 Y스트라이크" 형태로 결과 출력
  - 오류 방지와 일관된 출력을 위해 trim() 매서드 사용

index.js

[랜덤숫자 생성 기능]

- randomNumberGenerator
  - 1부터 9까지의 숫자 중 중복 없이 랜덤으로 3개의 숫자를 생성하는 기능
  - Set을 사용해 중복을 제거하고, 최종적으로 문자열 형태로 반환

[유효한 입력인지 검증 기능]

- isValidInput
  - 입력값이 3자리 숫자인지 검증하는 기능
- isNumber
  - 입력값이 모두 1~9 범위의 숫자인지 검증하는 기능

[입력값에 따른 결과 출력 기능]

- showResult
  - isValidInput을 통해 입력이 유효하지 않으면 alert로 경고 메시지 출력
  - bsGame.play 메서드를 통해 결과를 확인하고, 결과를 화면에 출력
  - 3스트라이크일 경우, “3스트라이크” 출력 대신 성공 메시지와 함께 재시작 버튼을 표시

[버튼 숨기기 토글 기능]

- toggleRestartButton
  - 인자로 전달된 값에 따라 재시작 버튼을 보이거나 숨기는 기능

[mvc 패턴 적용]

- baseballGame.js, index.js 삭제
- model 구현
- view 구현
- controller 구현
- add 구현
- html 수정

## 0주차 피드백 적용목록


- git check 명령어로 README.md 롤백
- docs에 기능구현목록, 피드백 적용목록 README.md 생성
- 필요없는 파일 삭제
- 패키지 중복사용 수정(CDN을 통한 패키지 로드 사용)
- 함수 네이밍 변경, 연산자 오타 수정
- 엔터 입력시 웹 새로고침 문제 해결, 이제 엔터 시 입력 Submit

## 1주차 피드백 적용목록

- eslint를 통해 Airbnb 코드 컨벤션 준수
- Code Spell Checker를 사용해 변수 스펠링 검수
- 함수명 변경
- model.js 캡슐화
- 정답 맞췄을 때 버튼 눌리는 문제 해결
