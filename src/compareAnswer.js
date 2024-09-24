import createResultMessage from './createResultMessage.js';
export default function compareAnswer(computerInput, userInput) {
  let strikeCount = 0;
  let ballCount = 0;
  const countStrikeAndBall = (computerNumber, computerIdx) => {
    userInput.forEach((userNumber, userIdx) => {
      if (computerNumber === userNumber && computerIdx !== userIdx) {
        ballCount += 1;
      } else if (computerNumber === userNumber && computerIdx === userIdx) {
        strikeCount += 1;
      }
    });
  };
  computerInput.forEach((computerNumber, computerIdx) => {
    countStrikeAndBall(computerNumber, computerIdx);
  });
  const message = createResultMessage(strikeCount, ballCount);
  return message;
}
