export const inputField = document.getElementById("user-input");

// userInput의 유효성 검사를 하는 함수
export function validateUserInput(userInput) {
  const isValid = /^[1-9]{3}$/.test(userInput); // 1~9로 이루어진 3자리 숫자인지 확인

  if (!isValid) {
    alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
    inputField.value = ""; // 입력창을 비움
    return "";
  } else return Number(userInput);
}

// 중복된 숫자가 있는지 확인하는 함수
export function validateInput(input) {
  input = String(input);

  // Set으로 중복 제거 후 원본 길이와 비교
  return new Set(input).size === input.length;
}
