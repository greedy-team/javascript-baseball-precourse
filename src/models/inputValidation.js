export function isValidInput(inputNumber) {
    return isNumber1To9(inputNumber) && isDuplicate(inputNumber) && inputNumber.length === 3;
}

function isNumber1To9(inputNumber) {
    return /^[1-9]+$/.test(inputNumber);
}

function isDuplicate(inputNumber) {
    const uniqueChars = new Set(inputNumber);
    return uniqueChars.size === inputNumber.length;
}
