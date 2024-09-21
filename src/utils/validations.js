export function checkUsersValidation(userInput) {
    return checkUserInputLength(userInput) &&
           checkUserInputIsNumber(userInput) &&
           checkUserInputNumberRange(userInput) &&
           checkUserInputIsDiff(userInput);
}

function checkUserInputLength(input) {
    return input.length === 3;
}

function checkUserInputIsNumber(input) {
    for (let i = 0; i < input.length; i++) {
        if (!Number(input[i])) {
            return false;
        }
    }
    return true;
}

function checkUserInputNumberRange(input) {
    for (let i = 0; i < input.length; i++) {
        if (1 > Number(input[i]) || 9 < Number(input[i])) {
            return false
        }
    }
    return true;
}

function checkUserInputIsDiff(input) {
    let uniqueNumberSet = new Set(input);
    return uniqueNumberSet.size === input.length;
}