function checkSpam(str) {
  // ваш код...
  str = str.toLowerCase();
  if (str.includes("1xbet") || str.includes("xxx")) {
    return true;
  }
  return false;
}

console.log(checkSpam("1XbeT now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
