  function solution(str1, str2) {
    var answer = 0;

    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()

    let arr1 = []
    let arr2 = []

    for(i = 0; i < str1.length; i++) {
      if (str1.substring(i,i+2).length==2) {
        arr1=arr1.concat(str1.substring(i,i+2).replace(/([A-Z][^A-Z])/g,'')
                                              .replace(/([^A-Z][A-Z])/g,'')
                                              .replace(/([^A-Z][^A-Z])/g,''))
      }
      // arr1.push(str1.substring(i, i+2))
    }
    for(i = 0; i < str2.length; i++) {
      if (str2.substring(i,i+2).length==2) {
        arr2=arr2.concat(str2.substring(i,i+2).replace(/([A-Z][^A-Z])/g,'')
                                              .replace(/([^A-Z][A-Z])/g,'')
                                              .replace(/([^A-Z][^A-Z])/g,''))
      }
      // arr2.push(str2.substring(i, i+2))
    }
    console.log(`arr1 : ${arr1}`)
    console.log(`arr2 : ${arr2}`)
    // arr1.pop()
    // arr2.pop()

    // result_arr1 = arr1.filter((x) => x.length === x.replace(/[^a-z]/g, '').length).sort()
    // result_arr2 = arr2.filter((x) => x.length === x.replace(/[^a-z]/g, '').length).sort()

    arr1 = arr1.filter((x) => x != '')
    arr2 = arr2.filter((x) => x != '')

    console.log(arr1)
    console.log(arr2)
      
    let count = 0;
    let arr1_len = arr1.length
    let arr2_len = arr2.length
  
    if(arr1_len >= arr2_len) {
      for(let i = 0; i <= arr1_len; i++) {
        if(arr2.indexOf(arr1[i]) !== -1) {
          arr2.splice(arr2.indexOf(arr1[i]), 1)
          count++
          console.log(count, arr1[i])
        }
      }
    } else {
      for(let i = 0; i <= arr2_len; i++) {
        if(arr1.indexOf(arr2[i]) !== -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1)
          count++
        }
      }
    }

    if(count == 0 && (arr1_len + arr2_len - count) == 0) {
      answer = 65536
    } else answer = Math.floor(count/(arr1_len + arr2_len - count) * 65536)
    return answer;
  }

  console.log(solution("FRANCE", "french"))