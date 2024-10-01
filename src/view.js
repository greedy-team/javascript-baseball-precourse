export const submitBtn = document.getElementById("submit");
export const result = document.getElementById("result");
export const restartBtn = document.getElementById("game-restart-button");
export const inputField = document.getElementById("user-input");

// 결과를 보여줌
export function showResult(message) {
  if (message !== undefined) result.innerText = message;  // 잘못된 입력이면 결과를 업데이트 하지 않음
}

// 재시작 버튼 표시
export function showRestartButton(show) {
  restartBtn.hidden = !show;
  submitBtn.disabled = show;
}

// 입력창을 비움
export function clearInputField() {
  inputField.value = "";
}

// 재시작 버튼 누르면 새로고침(게임 새로 시작)
restartBtn.addEventListener("click", () => {
  location.reload();
});
