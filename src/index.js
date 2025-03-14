let answer = createRandomNumber();
function createRandomNumber() {
    const numbers = [];
    while (numbers.length < 3) {
        const num = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!numbers.includes(num)) numbers.push(num);
    }
    return numbers.join("");
}
