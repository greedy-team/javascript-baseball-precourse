export function ValidateNum(input) {
  input = String(input);
  let setinput = new Set(input);
  if (isNaN(Number(input)) || input.includes("0")|| setinput.size !=3) {
    return false;
  }
  return true;
}
