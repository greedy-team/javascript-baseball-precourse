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
        

    }
}

new BaseballGame();