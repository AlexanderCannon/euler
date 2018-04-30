const threeDigits = Array.from(new Array(999), (v, i) => i);
let win = 0;
for (i of threeDigits) {
  for (v of threeDigits) {
    const result = i * v;
    const isPalindrome =
      (result + "")
        .split("")
        .reverse()
        .join("") ===
      result + ""
        ? result
        : 0;
    if (isPalindrome && result > win) win = result;
  }
}
console.log(win);
