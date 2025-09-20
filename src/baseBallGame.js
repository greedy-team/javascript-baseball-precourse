export default function BaseballGame(){
    let pitchNumber = "";
    
    const generateRandomNum= () => {
        const digits = new Set();

        while (digits.size< 3) {
            const randomDigit = MissionUtils.Random.pickNumberInRange(0, 9);
            digits.add(randomDigit);
        } 

        return [...digits].join(''); 
    }

    const startGame = () => {
        pitchNumber = generateRandomNum();
    }

    const handleUserInput = (userInput) => {
        if (checkValidInput(userInput)){
            return play(pitchNumber, userInput);
        }
        throw new Error("Invalid input");
    }

    const checkValidInput = (userInput) => {
        const regex = /^\d{3}$/;
        if (!regex.test(userInput)) return false;

        const digits = userInput.split('');
        const uniqueDigits= new Set(digits);
        return uniqueDigits.size === 3;
    }
    
    const countStrikesAndBalls = (computerInputNumbers, userInputNumbers) => {
        const computerInputList = computerInputNumbers.split('');
        const userInputList = userInputNumbers.split('');

        let strikes = 0;
        let balls = 0;

        userInputList.forEach((num, index) => {
            if (num === computerInputList[index]) {
                strikes++;
            }
            else if (computerInputList.includes(num)) {
                balls++;
            }
        });

        return { strikes, balls };
    }

    const formatResult = (strikes, balls) => {
        if (strikes === 3) {
            return "win";
        } else if (strikes === 0 && balls === 0) {
            return "낫싱";
        }
        return `${balls}볼 ${strikes}스트라이크`;
    }

    const play = (computerInputNumbers, userInputNumbers) =>{
        const { strikes, balls } = countStrikesAndBalls(computerInputNumbers, userInputNumbers);
        return formatResult(strikes, balls);
    }

    return {handleUserInput, startGame};
}
