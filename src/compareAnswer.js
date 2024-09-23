export default function compareAnswer(computerInput, userInput) {
  let strikeCount = 0;
  let ballCount = 0;
  let message = '';
  computerInput.forEach((computerNumber, computerIdx) => {
    userInput.forEach((userNumber, userIdx) => {
      if (computerNumber === userNumber) {
        if (computerIdx !== userIdx) ballCount += 1;
        else strikeCount += 1;
      }
    });
  });
  const ballMessage = ballCount !== 0 && `${ballCount}볼 `;
  const strikeMessage = strikeCount !== 0 && `${strikeCount}스트라이크`;
  if (ballMessage && strikeMessage) message = ballMessage.concat(strikeMessage);
  else if (message.length === 0 && ballMessage) {
    message = ballMessage;
  } else if (message.length === 0 && strikeMessage) {
    message = strikeMessage;
  } else {
    message = '낫싱';
  }
  return message;
}
