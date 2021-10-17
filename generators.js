function *OneTwoThree() {
  yield 1;
  yield 2;
  yield 3;
}

function *TrampolineInternal() {
  yield* OneTwoThree;
}

export function *TrampolineExternal() {
  yield* TrampolineInternal;
}
