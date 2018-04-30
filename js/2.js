let a = 1,
  b = 1,
  c = 0;
while (a < 4000000) {
  let d = a;
  a = a + b;
  b = d;
  if (a % 2 == 0) c += a;
}
console.log(c);
