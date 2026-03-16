// Controller는 Model과 View를 연결하는 역할
// Controller는 Model과 View에 의존해도 된다.
// 사용자 요청 처리 및 모델과 뷰 연결

class BaseballGameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

export default BaseballGameController;
