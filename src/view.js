export default function View({ onSubmit, onRestart }) {
  const userForm = document.getElementById('form');
  const restartButton = document.getElementById('game-restart-button');
  const restartSuggestionText = document.getElementById('restart-suggestion-text');
  const resultText = document.getElementById('result');
  const userInput = document.getElementById('user-input');

  userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(userInput.value);
    }
  });

  restartButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (onRestart) {
      onRestart();
    }
  });

  const displayGameStartView = () => {
    restartButton.style.display = 'none';
    restartSuggestionText.style.display = 'none';
    resultText.innerText = '';
  };

  const updateView = (result) => {
    resultText.innerText = result;
  };

  const displayGameWinView = () => {
    resultText.innerText = '🎉 정답을 맞추셨습니다! 🎉';
    restartButton.style.display = 'block';
    restartSuggestionText.style.display = 'block';
  };

  const displayErrorView = () => {
    alert('잘못된 입력입니다. 세 자리 숫자를 입력해주세요.');
  };

  return {
    displayGameStartView, updateView, displayGameWinView, displayErrorView,
  };
}
