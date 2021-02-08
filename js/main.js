// function longest(s1, s2) {
//     let newArr = s1.concat(s2)
//     return newArr
//     .split('')
//     .filter((item, pos, current) => {
//         return current.indexOf(item) == pos
//     })
//     .slice()
//     .sort()
//     .join('')
// }
// console.log(longest("aretheyhere", "yestheyarehere"))

// function findUniq(arr) {
//   let sortArr = arr
//   for (let i = 0; i < sortArr.length; i++) {
//     if ((sortArr[i] !== sortArr[i - 1]) && sortArr[i] !== sortArr[i + 1]) {
//       return sortArr[i];
//     } 
//   }
// }
// findUniq([3, 10, 3, 3, 3]);

function comp(array1, array2){
  // array1.sort((a, b) => a - b)
  // array2.sort((a, b) => a - b)
  
  for(let i = 0; i < array2.length; i++){
    //go through all array 1 to see if any numbers from array 2 match
    for (let x = 0; x < array1.length; x++) {
      if (array2[i] === array1[x]){
        return true
      } else {
        return false
      }
    }
    
    
  }
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

comp(a1, a2);