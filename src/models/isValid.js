// 유효성 검사
export function isValid(userValue) {
    const regex = /^[1-9]{3}$/;

    // 형식 검사 (1~9로 이루어진 3자리 숫자인지, 소수점/지수/0 등 차단)
    if (!regex.test(userValue)) {
    alert('1~9 사이의 서로 다른 숫자 3자리를 입력해주세요!');
    return;
    }

    // 중복을 허용하지 않는 Set 자료형의 특성을 활용
    if (new Set(userValue).size !== 3) {
    alert('중복된 숫자가 있습니다!');
    return;
    }

    return true;
}