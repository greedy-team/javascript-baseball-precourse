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

export function toggleRestartButton() {
    const $restartButton = document.getElementById('game-restart-button');
    if (!$restartButton.hidden) {
        $restartButton.hidden = true;
        return;
    }
    $restartButton.hidden = false;
}
