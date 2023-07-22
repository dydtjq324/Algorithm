function solution(food) {
  let answer = "";
  // 수용이가 가져온 음식으로 상대방과 겨루는 것이다.
  // 가져온 음식을 2로 나누고 repeat() 메서드를 이용하여 먹을 순서를 정한다.
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  // 서로 양쪽에서 같은 순서로 음식을 먹어야하기 때문에
  // 가운데 0(물)을 넣고 reverse() 메서드를 이용해 대칭을 만들어준다.
  return answer + "0" + [...answer].reverse().join("");
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"