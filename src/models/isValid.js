// 유효성 검사
export function isValid(userValue){

    const regex = /[1-9]{3}$/;

    if()

        // 숫자인지 확인
        if(isNaN(userValue)){
            alert('숫자만 입력해주세요!');
            return;
        }
        
        // 3자리인지 확인
        if(userValue.length !== 3){
            alert('반드시 3자리 숫자를 입력해주세요!');
            return;
        }

        // 중복을 허용하지 않는 Set 자료형의 특성을 활용
        if(new Set(userValue).size !== 3){
            alert('중복된 숫자가 있습니다!');
            return;
        }

        // 입력값에 '0'이 있는지 확인 -> 있으면 alert
        if(userValue.includes('0')){
            alert('0은 포함될 수 없습니다. 1~9 사이의 숫자를 입력해주세요.');
            return;
        }

        if(!Number.isInteger(Number(userValue))){
            alert('소수점은 입력할 수 없습니다!');
            return;
        }

        return true;
}