import BaseballGame from "./BaseballGame.js";

const restartButton = document.querySelector("#game-restart-button");
const resultElement = document.querySelector("#result");
const userInputElement = document.querySelector("#user-input");
let computerNumbers;
const baseballGame = new BaseballGame();

const generateRandomNumbers = () => {
  const numbers = new Set();
  while (numbers.size < 3) {
    const num = MissionUtils.Random.pickNumberInRange(1, 9);
    numbers.add(num);
  }
  return [...numbers];
};

const initResult = () => {
  resultElement.innerHTML = "";
  hideRestartButton();
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
  initResult();
  initEventListeners();
};

const handleUserInput = () => {
  const userInput = userInputElement.value;
  if (!isValidInput(userInput)) {
    alert("잘못된 입력입니다! 1~9까지의 수를 중복없이 3개 입력해주세요.");
    return;
  }

  const userNumbers = userInput.split("").map(Number);
  const result = baseballGame.play(computerNumbers, userNumbers);

  updateGameResult(result);
};

const updateGameResult = (result) => {
  if (result === "정답") {
    resultElement.innerHTML =
      `🎉<strong>정답을 맞추셨습니다!</strong>🎉<br><br>게임을 다시 시작하시겠습니까?<br>`;
    showRestartButton();
  } else {
    resultElement.textContent = result;
  }
};

const isValidInput = (input) => /^[1-9]{3}$/.test(input) && new Set(input).size === 3;

const restartGame = () => {
  computerNumbers = generateRandomNumbers();
  userInputElement.value = "";
  initResult();
};

const showRestartButton = () => {
  restartButton.hidden = false;
};

const hideRestartButton = () => {
  restartButton.hidden = true;
};

gameStart();