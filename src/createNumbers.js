export default function createNumber() {
  const randomNumbers = [];

  while (randomNumbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
  const computerInput = randomNumbers.join('');

  return computerInput;
}
