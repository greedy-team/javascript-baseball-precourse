import BaseballModel from '../models/BaseballModel.js';
import BaseballView from '../views/BaseballView.js';
import { isValid } from '../models/isValid.js';

export default class BaseballController {
    constructor(){
        this.model=new BaseballModel();
        this.view=new BaseballView();
        this.initEventListeners();
    }
    initEventListeners(){
        // HTML 태그 안에 직접 <button onclick="play()"> 라고 적는 방법도 있음
        this.view.submit.addEventListener('click', (e) => {
            
            // 브라우저의 자동 새로고침 본능을 억제
            e.preventDefault();
            
            // 사용자가 입력창에 쓴 값을 가져옴
            const userValue = this.view.userInput.value;

            // 유효성 검사 모듈(isValid)을 호출해 통과 여부를 확인
            if (!isValid(userValue)) return;

            // play 로직을 실행해 결과를 받아옴
            const resultText = this.model.play(userValue);
            
            if (resultText === "3스트라이크"){
                this.view.displaySuccess();
            }else{
                this.view.displayHint(resultText);
            }
        });

        this.view.restart.addEventListener('click', ()=>{
            this.model.prepareNewGame()
            this.view.restartUI();
        });
    }
}