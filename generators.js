function *OneTwoThree() {
  yield 1;
  yield 2;
  yield 3;
}

function *Trampoline() {
  yield* OneTwoThree;
}
