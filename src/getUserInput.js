export default function getUserInput(inputValue) {
  const arrInput = [...inputValue];
  const set = new Set(arrInput);
  if (arrInput.find((input) => Number.isInteger(input))) {
    window.alert('정수를 입력해주세요');
    return null;
  } else if (inputValue.length !== 3 || isNaN(inputValue)) {
    window.alert('3자리 숫자로 입력하세요.');
    return null;
  } else if (set.size !== 3) {
    window.alert('중복된 값입니다.');
    return null;
  } else if (arrInput.includes('0')) {
    window.alert('1에서 9까지의 숫자 입력하세요.');
    return null;
  }
  return inputValue;
}
