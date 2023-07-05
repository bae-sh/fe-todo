const ERROR = Object.freeze({
  WRONG_COMMAND: '명령어가 존재하지 않습니다.',
  WRONG_ID: 'id가 존재하지 않습니다.',
  WRONG_STATUS: '존재하지 않는 status 입니다.',
});

const STATUS = Object.freeze({
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
});

const COMMAND = Object.freeze({
  SHOW: 'show',
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
});

module.exports = { ERROR, STATUS, COMMAND };
