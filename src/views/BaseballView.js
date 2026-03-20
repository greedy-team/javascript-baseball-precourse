export default class BaseballView {
    constructor(){
        // 1. 부품(DOM) 가져오기: HTML 요소를 클래스 내부 변수(this)에 저장
        this.userInput = document.querySelector('#user-input');
        this.submit = document.querySelector('#submit');
        this.result = document.querySelector('#result');
        this.restart = document.querySelector('#game-restart-button');

        // 재시작 버튼 숨기기
        this.restart.style.display = 'none';
    }

    displayHint(text){
        this.result.textContent=text;
        // 평소엔 숨기기
        this.restart.style.display='none'; 
    }

    displaySuccess(){
        // 정답 시 원래 있던 결과창 글자를 싹 
        // 지우고 축하 문구 및 재시작 버튼 활성화
        this.result.innerHTML = `
            <div>🎉 정답을 맞추셨습니다 🎉</div>
            <br>게임을 새로 시작하시겠습니까?
        `;
        // 버튼 비활성화
        this.submit.disabled=true;

        // textContent (변수만 섞인 글자를 보여줄 때)
        // testContent로 `<b>${strike}스트라이크</b>` 할당하면 그대로 출력됨 
        
        // innerHTML (버튼이나 문단 같은 HTML 구조를 통째로 만들어서 끼워 넣고 싶을 때 사용)
        // 백틱 사이에 <button id="game-restart-button">재시작</button> 이렇게 적어도 구현 가능 
        this.restart.style.display = 'block';
    }

    restartUI(){
        // 입력창 비우기
        this.userInput.value = ''
        this.result.innerHTML = '';
        this.restart.style.display = 'none';

        // 버튼 활성화
        this.submit.disabled = false;
    }
}