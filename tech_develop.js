function solution(progresses, speeds) {

  console.log(progresses, speeds)
  var answer = [];
  let sum = [];

  while(progresses.length > 0) {
    while(progresses[0] < 100) {
      for(let i = 0; i < progresses.length; i++) {
        progresses[i] = progresses[i] + speeds[i]
      }
      console.log(progresses)
    }
    let count = 0;
    while(progresses[0] >= 100) {
      progresses.shift()
      speeds.shift()

      count += 1
    }
    answer.push(count)
  }
  return answer;
}

console.log(solution([93, 30, 55], 	[1, 30, 5]))