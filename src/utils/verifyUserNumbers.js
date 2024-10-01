export default class VerifyUserNumbers {
  static validateNumber(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== 3) {
      window.alert('3자리 숫자로 입력하세요.');
      return null;
    } else if (
      numbers.some((input) => !Number.isInteger(parseInt(input))) ||
      numbers.includes('0') ||
      set.size !== 3
    ) {
      window.alert('1에서 9까지 중복되지 않는 정수를 입력하세요');
      return null;
    }
    return numbers;
  }
}
