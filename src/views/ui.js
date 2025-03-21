export function updateResult(result) {
    const $result = document.getElementById('result');
    $result.innerHTML = result;
}

export function clearInput() {
    document.getElementById('user-input').value = '';
}

export function clearResult() {
    document.getElementById('result').innerHTML = '';
}

export function showRestartAlert() {
    alert("게임이 재시작되었습니다!");
}

export function showInvalidAlert() {
    alert("잘못된 형식으로 입력하셨습니다.");
}

export function hideRestartButton() {
    const $restartButton = document.getElementById('game-restart-button');
    if (!$restartButton.hidden) {
        return $restartButton.hidden = true;
    }
    $restartButton.hidden = false;
}
