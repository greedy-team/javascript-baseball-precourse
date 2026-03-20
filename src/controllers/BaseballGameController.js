// Controller는 Model과 View를 연결하는 역할
// Controller는 Model과 View에 의존해도 된다.
// 사용자 요청 처리 및 모델과 뷰 연결

class BaseballGameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.handleRestart();
    this.handleSubmit();
  }

  handleRestart() {
    this.view.onRestartButtonListener(() => {
      this.model.generateRandomNumbers(); // 모델의 랜덤 숫자 재생성
      this.view.resetView(); // 뷰 초기화
    });
  }

  handleSubmit() {
    this.view.onSubmitButtonListener((e) => {
      e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
      const userInputValue = this.view.getUserInput();
      try {
        //userInput.value는 문자열(text)이므로 validateInput에서 숫자 배열로 변환해서 검증
        this.model.validateInput(userInputValue);
        const result = this.model.play(userInputValue);
        this.view.displayResult(result);

        // 3스트라이크시 재시작 버튼 노출
        if (result === "3스트라이크") {
          this.view.showRestartButton();
        }
      } catch (error) {
        //validateInput에서 발생한 에러 메시지 alert로 출력
        alert(error.message);
      }
    });
  }
}

export default BaseballGameController;
