import createResultMessage from './createResultMessage.js';
export default function compareAnswer(computerInput, userInput) {
  let strikeCount = 0;
  let ballCount = 0;

  userInput.forEach((userNumber, userIdx) => {
    const computerIdx = computerInput.indexOf(userNumber);
    if (computerIdx !== -1) {
      if (computerIdx === userIdx) {
        strikeCount += 1;
      } else {
        ballCount += 1;
      }
    }
  });

  return createResultMessage(strikeCount, ballCount);
}
