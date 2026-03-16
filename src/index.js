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
    
}

new BaseballGame();