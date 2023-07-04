const { commandShow, commandAdd, commandDelete, commandUpdate } = require('./commands');

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
  const input = line.split('$');
  switch (input[0]) {
    case 'show':
      commandShow(input[1]);
      break;
    case 'add':
      commandAdd(input[1], input[2]);
      break;
    case 'delete':
      commandDelete(input[1]);
      break;
    case 'update':
      commandUpdate(input[1], input[2]);
      break;
  }
}

init();
