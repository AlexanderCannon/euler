Array.from(
  new Array(1000),
  (v, i) => (i % 5 === 0 || i % 3 === 0 ? i : 0)
).reduce((a, b) => a + b);
