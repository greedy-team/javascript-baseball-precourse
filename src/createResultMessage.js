export default function createResultMessage(strikeCount, ballCount) {
  const ballMessage = ballCount !== 0 ? `${ballCount}볼 ` : null;
  const strikeMessage = strikeCount !== 0 ? `${strikeCount}스트라이크` : null;
  if (ballMessage && strikeMessage) {
    return ballMessage.concat(strikeMessage);
  } else if (!strikeMessage && ballMessage) {
    return ballMessage;
  } else if (!ballMessage && strikeMessage) {
    return strikeMessage;
  }
  return '낫싱';
}
