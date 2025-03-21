export function createUniqueNumberString() {
    console.log("1");
    let validString = "";
    while (validString.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        validString = addUniqueNumberToString(validString, randomNumber);
    }
    console.log(validString);
    return validString;
}

function addUniqueNumberToString(validString, randomNumber) {

    if (validString.includes(randomNumber)) {
        return validString;
    }
    return validString + randomNumber;
}
