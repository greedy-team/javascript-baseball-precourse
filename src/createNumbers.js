export default function createNumber() {
  const randomNumbers = [];

  for (let i = 0; randomNumbers.length < 3; i++) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
  const computerInput = randomNumbers.join('');

  return computerInput;
}
