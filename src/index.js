function randomString() {
    let validString = "";
    while (validString.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        validString = findValidNumber(validString, randomNumber);
    }
    return validString;
}

function findValidNumber(validString, randomNumber) {
    if (validString.includes(randomNumber)) {
        return validString;
    }
    else {
        return validString + randomNumber;
    }
}
