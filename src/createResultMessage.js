export default function createResultMessage(strikeCount, ballCount) {
  const ballMessage = ballCount !== 0 ? `${ballCount}볼 ` : false;
  const strikeMessage = strikeCount !== 0 ? `${strikeCount}스트라이크` : false;
  let message = '낫싱';
  if (ballMessage && strikeMessage) {
    message = ballMessage.concat(strikeMessage);
  } else if (!strikeMessage && ballMessage) {
    message = ballMessage;
  } else if (!ballMessage && strikeMessage) {
    message = strikeMessage;
  }
  return message;
}
