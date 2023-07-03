# fe-todo

## 📌RULE

- 네비게이터랑 드라이버로 나누어 진행한다.
- 네비게이터는 코드의 진행상황을 전체적으로 확인하고 명령하며 드라이버는 네비게이터의 명령을 기반으로 코드를 작성한다.
- 교체주기는 30분씩 교체하며 1시간 진행 후 10분 휴식한다.
- ES6 문법을 준수한다.

## 📌설계

1. grade.js 파일 생성
2. todo.js 파일 생성 및 default todos 배열 생성
3. grade.js의 실행 함수 `App` 생성
4. 명령어 입력 받는 함수 `inputCommand` 생성
   4-1. shell로 부터 명령어 받는 함수를 비동기를 통해 받기. ex.readLine()
   4-2. 입력받은 명령어 return
5. 명령어 실행 함수 `runCommand` 생성
   5-1. command를 `$` 기준으로 split 함수를 이용하여 나눔
   5-2. switch문을 이용하여 command를 분기 진행
   5-3. 각각의 command에 대한 로직 생성
6. `makeRandomId` 함수 생성
7. `commandShow` 함수를 생성
   7-1. `commandShowAll`, `commandShowTodo`, `commandShowDoing`, `commandShowDone` 함수 생성
8. `commandShowAll`: `forEach`문을 사용하여 `status` 값에 따라 필터링 진행
