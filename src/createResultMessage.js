export default function createResultMessage(strikeCount, ballCount) {
  let message = '';
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
