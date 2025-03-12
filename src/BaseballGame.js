export default class BaseballGame {
  play(computerNumbers, userNumbers) {
    return this.getResult(
      this.countStrikes(computerNumbers, userNumbers),
      this.countBalls(computerNumbers, userNumbers)
    );
  }

  countStrikes(computerNumbers, userNumbers) {
    return userNumbers.filter((num, i) => num === computerNumbers[i]).length;
  }

  countBalls(computerNumbers, userNumbers) {
    return userNumbers.filter(
      (num, i) => num !== computerNumbers[i] && computerNumbers.includes(num)
    ).length;
  }

  getResult(strikes, balls) {
    if (strikes === 3) return "정답";
    if (strikes === 0 && balls === 0) return "낫싱";
    if (balls === 0) return `${strikes}스트라이크`;
    if (strikes === 0) return `${balls}볼`;
    return `${balls}볼 ${strikes}스트라이크`;
  }
}