const addNumbers = (): void => {
  console.log(2 + 4);
};
addNumbers();

const throwNewError = (): never => {
  throw new Error("Your program was terminated because of errors"); //never เพราะ function มันไม่เคยจะจบ
};
throwNewError();
