const NS_PER_SEC = 1e9;

// faster but blocking!
{
  const start = process.hrtime();
  let [a, b] = [0, 1],
    c = 0;
  while (a < 4000000) {
    [a, b] = [b, a + b];
    c += a % 2 === 0 && a;
  }
  const end = process.hrtime(start);
  console.log(c, `done in ${end[0] * NS_PER_SEC + end[1]} nanoseconds`);
  // 69265 nanoseconds
}
function* fibGenerator(number = Infinity) {
  let [a, b] = [0, 1];
  yield 0;
  yield 1;
  while (number-- > 0) {
    [a, b] = [b, a + b];
    yield b;
  }
}

const calculateFibLessThan = number => {
  let c = 0;
  if (Number.isFinite(number)) {
    for (let fib of fibGenerator()) {
      if (fib > number) break;
      c += fib % 2 === 0 && fib;
    }
  }
  return c;
};
{
  // fancy-lad functional async code!
  const start = process.hrtime();
  const result = calculateFibLessThan(4000000);
  const end = process.hrtime(start);
  console.log(result, `done in ${end[0] * NS_PER_SEC + end[1]} nanoseconds`);
  // 331067 nanoseconds (non-blocking)
}

{
  // language features smanguage features!
  // we should all write go; FP has been disproven!
  const start = process.hrtime();
  let a = 1,
    b = 1,
    c = 0;
  while (a < 4000000) {
    let d = a;
    a = a + b;
    b = d;
    if (a % 2 == 0) c += a;
  }
  const end = process.hrtime(start);
  console.log(c, `done in ${end[0] * NS_PER_SEC + end[1]} nanoseconds`);
  // 3325
}
