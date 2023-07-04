function makeRandomId(todos) {
  while (true) {
    const randomNumber = Math.random() * 10_000;
    const fourDigitRandomNumber = Math.floor(randomNumber);

    const hasId = todos.some(todo => todo.id === fourDigitRandomNumber);

    if (!hasId) {
      return fourDigitRandomNumber;
    }
  }
}

module.exports = { makeRandomId };
