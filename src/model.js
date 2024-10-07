export function ValidateNum(input) { //모델 
  let setinput = new Set(input);
  if (isNaN(Number(input)) || input.includes("0")|| setinput.size !=3 || input.length !== 3) {
    return false;
  }
  return true;
}

export function play(UserNum,ComNum) { //모델
  let strike = 0
  let ball = 0;
  for(let i =0;i<3;i++){
    if(UserNum[i]==ComNum[i])
      strike+=1;
    else if(ComNum.includes(UserNum[i]))
      ball+=1;
  }

  if (strike === 3) return 3;
  if (ball===0 && strike === 0) return "낫싱";
  if (strike > 0 && ball > 0) return `${ball}볼 ${strike}스트라이크`;
  if (strike > 0) return `${strike}스트라이크`;
  if (ball > 0) return `${ball}볼`;
}

export function getRandomNum() { // 랜덤한 수 받기  //모델
  let ComNum = new Set();
  while(ComNum.size!==3){
    ComNum.add(MissionUtils.Random.pickNumberInRange(1,9));
  }
  return Array.from(ComNum).map(String).join('');
}