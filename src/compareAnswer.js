import createResultMessage from './createResultMessage.js';
export default function compareAnswer(computerInput, userInput) {
  let strikeCount = 0;
  let ballCount = 0;
  computerInput.forEach((computerNumber, computerIdx) => {
    userInput.forEach((userNumber, userIdx) => {
      if (computerNumber === userNumber) {
        if (computerIdx !== userIdx) ballCount += 1;
        else strikeCount += 1;
      }
    });
  });
  const message = createResultMessage(strikeCount, ballCount);
  return message;
}
