const submitBtn = document.getElementById("submit");
const input = document.getElementById("user-input");
submitBtn.addEventListener("click", BaseballGame);

let pickedNumber;
let computerInput;

// 정답(랜덤값)
while (true) {
  pickedNumber = MissionUtils.Random.pickNumberInRange(100, 999);
  computerInput = String(pickedNumber);

  // 중복되지 않는 숫자 3개
  if (
    computerInput[0] !== computerInput[1] &&
    computerInput[0] !== computerInput[2] &&
    computerInput[1] !== computerInput[2]
  )
    break;
}
console.log(pickedNumber);
// console.log(typeof computerInput);

let userInput = "";

function getUserInput(event) {
  event.preventDefault();

  let userInput = input.value;
  userInput = validateInput(userInput);
  if (userInput === "") return userInput; // 잘못된 입력

  return userInput;
}

function validateInput(userInput) {
  const checkedInput = Number(userInput);

  if (isNaN(checkedInput) || userInput[0] === "0" || userInput.length != 3) {
    alert("1~9로 이루어진 세 자리 숫자를 입력해주세요.");
    input.value = ""; // 입력창을 비움
    return "";
  } else return checkedInput;
}

function countStrikeBall(computerString, userString) {
  let strikeCnt = 0;
  let ballCnt = 0;
  let i;

  for (i = 0; i < 3; i++) {
    if (computerString[i] === userString[i]) {
      strikeCnt++;
      continue;
    }
    if (computerString[i] == userString[(i + 1) % 3] || computerString[i] == userString[(i + 2) % 3]) ballCnt++;
  }

  return [strikeCnt, ballCnt];
}

function countBall(computerCharacter, userString, i) {
  let ballCnt = 0;

  // if (computerString[0] == userString[1] || computerString[0] == userString[2]) {
  //   ballCnt++;
  //   console.log("경우1");
  // }
  // if (computerString[1] == userString[0] || computerString[1] == userString[2]) {
  //   ballCnt++;
  //   console.log("경우2");
  // }
  // if (computerString[2] == userString[0] || computerString[2] == userString[1]) {
  //   ballCnt++;
  //   console.log("경우3");
  // }

  return ballCnt;
}

function BaseballGame() {
  this.play = function (computerInput, userInput) {
    let result = "";

    getUserInput(event);
    const userString = String(userInput);
    const computerString = String(computerInput);

    const [strikeCnt, ballCnt] = countStrikeBall(computerString, userString);

    if (strikeCnt === 0 && ballCnt === 0) result = "낫싱";
    else if (strikeCnt !== 0 && ballCnt === 0) result = `${strikeCnt}스트라이크`;
    else if (strikeCnt === 0 && ballCnt !== 0) result = `${ballCnt}볼`;
    else result = `${ballCnt}볼 ${strikeCnt}스트라이크`;

    return result;
  };

  userInput = getUserInput(event);
  if (userInput === "") return; // 잘못된 입력이 들어왔을 때는 경고창만 띄우고 아무것도 하지 않음

  this.result = this.play(computerInput, userInput);
  console.log(this.result);
}
