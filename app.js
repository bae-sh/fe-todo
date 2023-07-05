const { commandShow, commandAdd, commandDelete, commandUpdate } = require('./commands');
const { ERROR, COMMAND } = require('./constant');

function init() {
  inputCommand();
}

function inputCommand() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  promptUser();

  function promptUser() {
    rl.question('명령하세요: ', line => {
      runCommand(line);
      promptUser();
    });
  }
}

function runCommand(line) {
  try {
    const input = line.split('$');
    switch (input[0]) {
      case COMMAND.SHOW:
        commandShow(input[1]);
        break;
      case COMMAND.ADD:
        commandAdd(input[1], input[2]);
        break;
      case COMMAND.DELETE:
        commandDelete(input[1]);
        break;
      case COMMAND.UPDATE:
        commandUpdate(input[1], input[2]);
        break;
      default:
        throw new Error(ERROR.WRONG_COMMAND);
    }
  } catch (e) {
    console.error(e);
  }
}

init();
