export const inputField = document.getElementById("user-input");

// userInput의 유효성 검사를 하는 함수
export function validateUserInput(userInput) {
  const checkedInput = Number(userInput);

  if (isNaN(checkedInput) || userInput[0] === "0" || userInput.length != 3) {
    alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
    inputField.value = ""; // 입력창을 비움
    return "";
  } else return checkedInput;
}

// 중복된 숫자가 있는지 확인하는 함수
export function validateInput(input) {
  input = String(input);

  if (input[0] !== input[1] && input[0] !== input[2] && input[1] !== input[2]) return true; // 중복되지 않는 숫자 3개
}
