export function isValidInput(inputNumber) {
    if (!isNumeric(inputNumber) || !isDuplicate(inputNumber) || inputNumber.length !== 3) {
        alert("잘못된 형식으로 입력하셨습니다.");
        return false;
    }
    return true;
}

function isNumeric(inputNumber) {
    return /^[1-9]+$/.test(inputNumber);
}

function isDuplicate(inputNumber) {
    const uniqueChars = new Set(inputNumber);
    return uniqueChars.size === inputNumber.length;
}
