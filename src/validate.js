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

  // Set으로 중복 제거 후 원본 길이와 비교
  return new Set(input).size === input.length;
}
