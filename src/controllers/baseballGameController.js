import { createUniqueNumberString } from '../models/uniqueNumberString.js';
import { isValidInput } from '../models/inputValidation.js';
import { play } from '../models/determineGame.js';
import { updateResult, clearInput, clearResult, showRestartAlert, hideRestartButton } from '../views/ui.js';

let randomNumber = createUniqueNumberString();
console.log(randomNumber);

export function baseballGame() {
    // const randomNumber = createUniqueNumberString();
    console.log("2");

    setOkButtonClickEvent(randomNumber);
    setRestartButtonClickEvent(randomNumber);
}

function setOkButtonClickEvent() {
    document.getElementById('submit').addEventListener('click', handleOkButtonClick)
}

function handleOkButtonClick(event) {
    event.preventDefault();
    console.log("3");

    const inputNumber = document.getElementById('user-input').value;

    if (!isValidInput(inputNumber)) {
        return;
    }
    const result = play(inputNumber, randomNumber);
    updateResult(result); // (message, isCorrect) -----------------------------
}

function setRestartButtonClickEvent() {
    document.getElementById('game-restart-button').addEventListener('click', handleRestartButtonClick);
}

function handleRestartButtonClick(event) {
    event.preventDefault();
    randomNumber = createUniqueNumberString();
    clearInput();
    clearResult();
    showRestartAlert();
    hideRestartButton();
}



// 입력() -> 확인 버튼() -> 결과 반환()
// function setOkButtonClickEvent(randomNumber) {
//     const $submitButton = document.getElementById('submit'); // [확인 버튼]
//     const $userInput = document.getElementById('user-input'); // 사용자 입력
//     const $result = document.getElementById('result'); // 결과
//     $submitButton.addEventListener('click', function (e) { // 확인 버튼 눌렀을 때의 이벤트
//         e.preventDefault();

//         const inputNumber = $userInput.value;

//         if (!isValidInput(inputNumber)) {
//             return;
//         }
//         const result = play(inputNumber, randomNumber); // 결과 문자열 받기
//         $result.innerHTML = result; // 결과에 매핑
//     });
// }

// 버튼 클릭() -> 입력, 결과 초기화() -> 버튼 숨기기()
/* function clickRestartButton(randomNumber) {
    const $restartButton = document.getElementById('game-restart-button'); // [재시작 버튼]
    const $userInput = document.getElementById('user-input'); // 사용자 입력
    const $result = document.getElementById('result'); // 결과
    $restartButton.addEventListener('click', function (e) { // 확인 버튼 눌렀을 때의 이벤트
        e.preventDefault();
        randomNumber = createUniqueNumberString();

        $userInput.value = ''; // 입력 초기화

        $result.innerHTML = ''; // 결과 초기화
        
        alert("게임이 재시작되었습니다!"); // 알람
        $restartButton.hidden = true; // 버튼 숨기기
    });
}
    */