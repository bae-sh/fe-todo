const { todos } = require('./todo.js');

function app() {
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

function commandShow(type) {
  if (type === 'all') {
    commandShowAll();
  } else {
    commandShowTypeList(type);
  }
}

function commandShowAll() {
  const todoAmount = todos.filter(todo => todo.status === 'todo').length;
  const doingAmount = todos.filter(todo => todo.status === 'doing').length;
  const doneAmount = todos.filter(todo => todo.status === 'done').length;

  console.log(`현재상태 : todo${todoAmount}개, doing${doingAmount}개, done${doneAmount}개`);
}

function commandShowTypeList(type) {
  const todoStatusList = todos.filter(todo => todo.status === type);
  const outputString =
    `${type}리스트 :  총${todoStatusList.length}건 : ` +
    todoStatusList.map(todo => {
      return `'${todo.name}, ${todo.id}' `;
    });
  console.log(outputString);
}

function commandAdd(name, tags) {
  const id = makeRandomId();
  todos.push({ name, tags, id, status: 'todo' });
  console.log(`${name} 1개가 추가됐습니다. (id: ${id})`);
  commandShowAll();
}

function commandDelete(id) {
  const deleteIndex = todos.findIndex(todo => todo.id === id);
  const deleteTodo = todos.splice(deleteIndex, 1)[0];

  console.log(`${deleteTodo.name} ${deleteTodo.status}가 목록에서 삭제 됐습니다.`.trim());
}

function commandUpdate(id, status) {
  const targetIndex = todos.findIndex(todo => todo.id === +id);
  todos[targetIndex].status = status;
  console.log(`${todos[targetIndex].name} ${todos[targetIndex].status}으로 상태 변경 됐습니다. `);
  commandShowAll();
}

function makeRandomId() {
  while (true) {
    const randomNumber = Math.random() * 10_000;
    const fourDigitRandomNumber = Math.floor(randomNumber);

    const hasId = todos.some(todo => todo.id === fourDigitRandomNumber);

    if (!hasId) {
      return fourDigitRandomNumber;
    }
  }
}

app();
