export default function getUserInput(inputValue) {
  const arrInput = [...inputValue];
  const set = new Set(arrInput);
  if (
    arrInput.some((input) => !Number.isInteger(parseInt(input))) ||
    arrInput.includes('0')
  ) {
    window.alert('1에서 9까지의 정수를 입력하세요');
    return null;
  } else if (inputValue.length !== 3 || isNaN(inputValue)) {
    window.alert('3자리 숫자로 입력하세요.');
    return null;
  } else if (set.size !== 3) {
    window.alert('중복된 값입니다.');
    return null;
  }
  return inputValue;
}
