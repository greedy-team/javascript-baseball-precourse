export default pickRandomThreeNum

function pickRandomThreeNum() {
    let ComNum = new Array();
    let i = 0;
    while (i < 3) {
        let temp = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!isOverlap(ComNum, temp)) {
            ComNum[i] = temp;
            i++;
        }
    }
    console.log(ComNum);
    return ComNum;
}
function isOverlap(ComNum, temp) {
    let Overlap = false;
    for (let j = 0; j < ComNum.length; j++) {
        if (temp == ComNum[j]) {
            Overlap = true;
        }
    }
    return Overlap;
}