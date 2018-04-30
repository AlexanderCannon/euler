let resolution;
let n = 1;
evenlyDivisible = n => {
  for (let i = 2; i <= 20; i++) {
    if (n % i !== 0) return true;
  }
};
while (!resolution) {
  if (evenlyDivisible(n)) {
    n++;
  } else {
    resolution = n;
  }
}
console.log(resolution);
