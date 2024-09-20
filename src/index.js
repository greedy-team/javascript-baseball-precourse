const submitBtn = document.getElementById("submit");
const input = document.getElementById("user-input");

function getUserInput(event) {
  event.preventDefault();
  let userInput = input.value;
  userInput = validateInput(userInput);
  console.log("유효한 숫자인지 검사", userInput);

  return userInput;
}

function validateInput(userInput) {
  const checkedInput = Number(userInput);

  if (isNaN(checkedInput) || userInput[0] === "0" || userInput.length != 3) {
    alert("1~9로 이루어진 세 자리 숫자를 입력해주세요.");
    location.reload(); // 새로고침
  } else return checkedInput;
}

submitBtn.addEventListener("click", getUserInput);
