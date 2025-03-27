function* numGenerator() {
  yield 1;
  yield 2;
  yield 3;
  // yield act as return
}
// generator function does not execute at once
// at the first callin it will execute the first yield only
let gen = numGenerator();
console.log(gen.next().value);
// we use next to call the generator function
console.log(gen.next().value);
console.log(gen.next().value);
// called the function 3 times
let genTwo = numGenerator();
console.log(genTwo.next().value);
