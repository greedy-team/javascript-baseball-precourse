 // 입력한 숫자에 대한 유효성 검사
export function isValidity(inputNumber) {
    // 숫자가 아닌 경우
    for (let i = 0; i < inputNumber.length; i++) {
        if ('1' > inputNumber[i] || inputNumber[i] > '9') {
            throw new Error('숫자를 입력해 주세요.');
        }
    }

    // 3자리가 아닌 경우
    if (inputNumber.length !== 3) {
        throw new Error('3개의 숫자를 입력하세요.');
    }

    // 중복된 수가 있는 경우
    if (isDuplicate(inputNumber)) {
        throw new Error('중복 없이 입력해 주세요.');
    }
}

export function isDuplicate(arr)  {
    const isDup = arr.some(function(x) {
        return arr.indexOf(x) !== arr.lastIndexOf(x);
    });

    return isDup;
}