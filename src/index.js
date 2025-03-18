import BaseballGame from "./BaseballGame.js";

const restartButton = document.querySelector("#game-restart-button");
const resultElement = document.querySelector("#result");
const userInputElement = document.querySelector("#user-input");

let computerNumbers;
const baseballGame = new BaseballGame();

const isValidUserInput = (userInput) => {
  if (/^$/.test(userInput)) { 
    alert("⚠️ 빈 입력입니다.");
    return false;
  }
  if (/\s/.test(userInput)) { 
    alert("⚠️ 입력에 공백이 포함되어 있습니다.");
    return false;
  }
  if (userInput.length > 3) {
    alert("⚠️ 입력이 3자리를 초과합니다.");
    return false;
  }
  if (userInput.length < 3) {
    alert("⚠️ 입력이 3자리 미만입니다.");
    return false;
  }
  if (!/^[1-9]{3}$/.test(userInput)) { 
    alert("⚠️ 입력에 1~9 이외의 문자가 포함되어 있습니다.");
    return false;
  }
  if (new Set(userInput).size !== 3) {
    alert("⚠️ 중복된 숫자가 존재합니다.");
    return false;
  }
  return true;
};

const generateRandomNumbers = () => {
  const numbers = new Set();
  while (numbers.size < 3) {
    const num = MissionUtils.Random.pickNumberInRange(1, 9);
    numbers.add(num);
  }
  return [...numbers];
};

const clearResult = () => {
  resultElement.innerHTML = "";
  hideRestartButton();
};

const clearInput = () => {
  userInputElement.value = "";
};

const showRestartButton = () => {
  restartButton.hidden = false;
};

const hideRestartButton = () => {
  restartButton.hidden = true;
};

const updateGameResult = (result) => {
  if (result === "정답") {
    resultElement.innerHTML = 
      "🎉<strong>정답을 맞추셨습니다!</strong>🎉<br><br>게임을 다시 시작하시겠습니까?<br>";
    showRestartButton();
  } else {
    resultElement.textContent = result;
  }
};

const handleUserInput = () => {
  const userInput = userInputElement.value;
  if (!isValidUserInput(userInput)) return;

  const userNumbers = userInput.split("").map(Number);
  const result = baseballGame.play(computerNumbers, userNumbers);

  updateGameResult(result);
};

const restartGame = () => {
  computerNumbers = generateRandomNumbers();
  clearInput();
  clearResult();
};

const initEventListeners = () => {
  document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault();
    handleUserInput();
  });

  restartButton.addEventListener("click", restartGame);
};

const gameStart = () => {
  computerNumbers = generateRandomNumbers();
  clearResult();
  initEventListeners();
};

gameStart();
