class BaseballGame {
  constructor() {
    this.gamestart();
  }

  getRandomNum() { // 랜덤한 수 받기
    let n1, n2, n3;
    n1 = MissionUtils.Random.pickNumberInRange(1, 9);
    while (true) {
      let i = MissionUtils.Random.pickNumberInRange(1, 9);
      if (n1 != i) {
        n2 = i;
        break;
      }
    }
    while (true) {
      let i = MissionUtils.Random.pickNumberInRange(1, 9);
      if (n1 != i && n2 != i) {
        n3 = i;
        break;
      }
    }
    return n1 * 100 + n2 * 10 + n3;
  }

  UserNumvar_len3(UserNum) { // user num 길이 판별
    return String(UserNum).length === 3;
  }

  UserNumvar_num19(UserNum) { // user num 1~9 숫자인지 판별
    let numArray = String(UserNum).split('');
    for (let i = 0; i < numArray.length; i++) {
      let num = parseInt(numArray[i], 10);
      if (num > 9 || num < 1) {
        return false;
      }
    }
    return true;
  }

  UserNumvar_diff(UserNum) { // user num 다 다른 수인지 판별
    let numArray = String(UserNum).split('');
    let numSet = new Set(numArray);
    return numArray.length === numSet.size;
  }

  UserNumvar(UserNum) {
    if (this.UserNumvar_len3(UserNum)) {
      if (this.UserNumvar_num19(UserNum)) {
        if (this.UserNumvar_diff(UserNum)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  play(UserNum, ComNum) {
    let strike = 0, ball = 0;

    // UserNum 자리수 분리
    let un1 = ~~(UserNum / 100);
    let un2 = ~~(UserNum / 10 % 10);
    let un3 = UserNum % 10;

    // ComNum 자리수 분리
    let n1 = ~~(ComNum / 100);
    let n2 = ~~(ComNum / 10 % 10);
    let n3 = ComNum % 10;

    // 스트라이크 및 볼 체크
    if (n1 == un1) strike++;
    else if (n1 == un2 || n1 == un3) ball++;

    if (n2 == un2) strike++;
    else if (n2 == un1 || n2 == un3) ball++;

    if (n3 == un3) strike++;
    else if (n3 == un1 || n3 == un2) ball++;

    // 결과 출력
    if (strike === 3) {
      return 3;
    } else if (strike > 0 && ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      return `${strike}스트라이크`;
    } else if (ball > 0) {
      return `${ball}볼`;
    } else {
      return "낫싱";
    }
  }
  gameovervar(result){
    if(result===3){
      document.querySelector("#result").innerHTML = "정답을 맞추셨습니다";
      document.getElementById('game-restart-button').style.display ='block';	
    }
    else {
      return this.printresult(result);
    }
  }
  printresult(result){
    document.querySelector("#result").innerHTML = result;
  }

  gamestart() {
    let ComNum = this.getRandomNum();
    document.getElementById('game-restart-button').style.display ='none';	

    document.querySelector('#submit').addEventListener('click', (event) => {
      event.preventDefault();
      let UserNum = document.querySelector("#user-input").value;

      UserNum = parseInt(UserNum, 10);
      if (this.UserNumvar(UserNum)) {
        console.log("컴퓨터 번호: ", ComNum);
        this.gameovervar(this.play(UserNum, ComNum));
      } else {
        alert("다시 입력해주세요");
      }
    });

    document.getElementById('game-restart-button').addEventListener('click', () => {
      location.reload(); 
    });
  }
}

let baseballGame = new BaseballGame();
