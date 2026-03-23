export default getUserNum

function getUserNum() {
    let UserNum = Array.from(document.getElementById("user-input").value);
    if(isNotNum(UserNum)){
        alert("숫자를 입력해주세요!(문자,기호,공백은 안됩니다)");
        return null;
    }
    if (UserNum.length === 0) {
        alert("숫자를 적어주세요");
        return null;
    } else if (UserNum.length !== 3 ) {
        alert("숫자 3개를 붙여 적어주세요!");
        return null;
    }
    
    if (isDup(UserNum)) {
        alert("중복되지않는 숫자를 입력해주세요!");
        return null;
    }
    if(isZero(UserNum)){
        alert("1~9까지의 숫자를 입력해주세요!");
        return null;
    }
    

    return UserNum;
}
function isDup(UserNum) {
    let Isdup = false
    for (let i = 0; i < UserNum.length; i++) {
        for (let j = i + 1; j < UserNum.length; j++) {
            Isdup = isSame(UserNum, i, j, Isdup);
        }
    }
    return Isdup;
}
//?
function isSame(UserNum, i, j, Isdup) {
    if (UserNum[i] === UserNum[j]) {
        return true;
    } else {
        return Isdup
    }
}
function isNotNum(UserNum){
    let isNotNum=false
    for(let i=0;i<UserNum.length;i++){
        if(isNaN(UserNum[i])||UserNum[i]===" "){
            isNotNum=true;
        }
    }
    return isNotNum;
}
function isZero(UserNum){
    let isZero=false;
    for(let i=0;i<3;i++){
        if(UserNum[i]===0){
            isZero=true;
        }
    }
    return isZero;
}