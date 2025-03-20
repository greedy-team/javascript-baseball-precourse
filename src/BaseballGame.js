export default class BaseballGame {
  getResult(strikes, balls) {
    if (strikes === 3) return "정답";
    if (strikes === 0 && balls === 0) return "낫싱";
    if (balls === 0) return `${strikes}스트라이크`;
    if (strikes === 0) return `${balls}볼`;
    return `${balls}볼 ${strikes}스트라이크`;
  }

  countStrikes(computerNumbers, userNumbers) {
    let strikeCount = 0;
  
    for (let i = 0; i < userNumbers.length; i++) {
      if (userNumbers[i] === computerNumbers[i]) {
        strikeCount++; 
      }
    }
  
    return strikeCount;
  }
  
  countBalls(computerNumbers, userNumbers) {
    let ballCount = 0;
  
    for (let i = 0; i < userNumbers.length; i++) {
      if (userNumbers[i] !== computerNumbers[i] && computerNumbers.includes(userNumbers[i])) {
        ballCount++;
      }
    }
  
    return ballCount;
  }
  
  play(computerNumbers, userNumbers) {
    return this.getResult(
      this.countStrikes(computerNumbers, userNumbers),
      this.countBalls(computerNumbers, userNumbers)
    );
  }
}