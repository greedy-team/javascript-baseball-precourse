export default class BaseballGame {
    play(answer, user) {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < 3; i++) {
            if (answer[i] === user[i]) strike++;
            else if (user.includes(answer[i])) ball++;
        }
        return this.getResultMessage(strike, ball);
    }

    getResultMessage(strike, ball) {
        if (strike === 3) return "🎉정답을 맞추셨습니다🎉";
        if (strike === 0 && ball === 0) return "낫싱";
        if (ball === 0) return `${strike}스트라이크`;
        if (strike === 0) return `${ball}볼`;
        return `${ball}볼 ${strike}스트라이크`;
    }
}