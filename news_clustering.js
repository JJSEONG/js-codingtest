function solution(str1, str2) {
  var answer = 0;

  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  let arr1 = []
  let arr2 = []
  let result_arr1 = []
  let result_arr2 = []

  for(i = 0; i < str1.length; i++) {
    arr1.push(str1.substring(i, i+2))
  }
  for(i = 0; i < str2.length; i++) {
    arr2.push(str2.substring(i, i+2))
  }
  console.log(arr1)
  console.log(arr2)
  arr1.pop()
  arr2.pop()

  result_arr1 = arr1.filter((x) => x.length === x.replace(/[^a-z]/g, '').length).sort()
  result_arr2 = arr2.filter((x) => x.length === x.replace(/[^a-z]/g, '').length).sort()

  console.log(result_arr2)
    
  let count = 0;
  let total_count = 0;
  let arr1_len = result_arr1.length
  let arr2_len = result_arr2.length

  console.log(result_arr1)
  console.log(result_arr2)

  if(result_arr1.length === 0 && result_arr2.length === 0) {
    return answer = 65536
  }
 
  if(result_arr1.length >= result_arr2.length) {
    for(let i = 0; i < arr2_len; i++) {
      if(result_arr2.indexOf(result_arr1[i]) !== -1) {
        result_arr2.splice(result_arr2.indexOf(result_arr1[i]), 1)
        count++
        console.log(count, result_arr1[i])
      }
    }
    
    total_count = arr1_len + arr2_len - count
    console.log(total_count)
    answer = Math.floor((count / total_count) * 65536)
    return answer;

  } else if(result_arr1.length < result_arr2.length) {
    for(let i = 0; i < arr1_len; i++) {
      if(result_arr1.indexOf(result_arr2[i]) !== -1) {
        result_arr1.splice(result_arr1.indexOf(result_arr2[i]), 1)
        count++
      }
    }
    console.log(count)
    total_count = arr1_len + arr2_len - count
    answer = Math.floor((count / total_count) * 65536)
    return answer;
  }
}

console.log(solution("handshake", "shake hands"))