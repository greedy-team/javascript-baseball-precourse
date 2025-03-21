export function isValidInput(inputNumber) {
    if (!isNumeric(inputNumber) || !isDuplicate(inputNumber) || inputNumber.length !== 3) {
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
