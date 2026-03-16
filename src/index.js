import { isValid } from "./isValid.js";

export default class BaseballGame {
    constructor(){
        // 1. 부품(DOM) 가져오기: HTML 요소를 클래스 내부 변수(this)에 저장
        this.userInput = document.querySelector('#user-input');
        this.submit = document.querySelector('#submit');
        this.result = document.querySelector('#result');
        this.restart = document.querySelector('#game-restart-button');

        // 재시작 버튼 숨기기
        this.restart.style.display = 'none';
        
       // 초기 상태 설정: 컴퓨터 숫자 생성
        this.computerNumbers = this.generateComputerNumbers();

        // 시스템 작동 시작: 이벤트(사용자 신호) 받을 준비
        this.initEventListeners();
    }
    // 컴퓨터 숫자 생성 (중복 없는 난수 3개)
    generateComputerNumbers() {
        const numbers = [];
        while (numbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) numbers.push(number);
        }
        return numbers;
    }   
    
    // 이벤트 관리 (사용자 입력과 시스템 반응을 연결)
    initEventListeners() {
        // HTML 태그 안에 직접 <button onclick="play()"> 라고 적는 방법도 있음
        this.submit.addEventListener('click', (e) => {
            
            // 브라우저의 자동 새로고침 본능을 억제
            e.preventDefault();
            
            // 사용자가 입력창에 쓴 값을 가져옴
            const userValue = this.userInput.value;

            // 유효성 검사 모듈(isValid)을 호출해 통과 여부를 확인
            if (!isValid(userValue)) return;

            // play 로직을 실행해 결과를 받아옴
            const resultText = this.play(this.computerNumbers, userValue);
            
            if (resultText === "3스트라이크"){
                // 정답 시 원래 있던 결과창 글자를 싹 
                // 지우고 축하 문구 및 재시작 버튼 활성화
                this.result.innerHTML = `
                    <div>🎉 정답을 맞추셨습니다 🎉</div>
                    <br>게임을 새로 시작하시겠습니까?
                `;
                // textContent (변수만 섞인 글자를 보여줄 때)
                // testContent로 `<b>${strike}스트라이크</b>` 할당하면 그대로 출력됨 
                
                // innerHTML (버튼이나 문단 같은 HTML 구조를 통째로 만들어서 끼워 넣고 싶을 때 사용)
                // 백틱 사이에 <button id="game-restart-button">재시작</button> 이렇게 적어도 구현 가능 
                this.restart.style.display = 'block';

            }else{
                this.result.textContent=resultText;
                // 평소엔 숨기기
                this.restart.style.display='none'; 
            }
        });

        this.restart.addEventListener('click', ()=>{
            this.RestartEvent();
        });
    }

    // 스트라이크/볼 판정
    play(computerInputNumbers, userInputNumbers) {
        
        let strike = 0;
        let ball = 0;

        for(let i=0;i<3;i++){
            const userDigit=Number(userInputNumbers[i]);
            //userInput.value로 가져온 값은 무조건 글자 상태로 들어오기 때문에 
            // Number()을 써서 숫자로 변환
            if(userDigit===computerInputNumbers[i]){
                strike++;
            }else if (computerInputNumbers.includes(userDigit)){
                ball++;
            }
        }
        // 조건에 맞춰 문자열로 출력
        if (strike===0 && ball===0){
            return "낫싱";
        }
        if(strike===3){
            return "3스트라이크"
        }
        // string으로 출력하는 방식
        // 1. 템플릿 리터럴: 백틱(` `)과 ${} 사용 (대부분 템플릿 리터럴 사용함)
        // 2. 문자열 연결 연산자: (+) 기호 사용
        // 3. 배열 합치기(join): result.join(" ") 사용
        // 볼과 스트라이크가 있을수도 없을수도 있으니 join 사용함
        const result = [];

        if(ball > 0){
            result.push(`${ball}볼`);
        }

        if(strike > 0){
            result.push(`${strike}스트라이크`);
        }

        return result.join(" ");

    } 
    
}

new BaseballGame();