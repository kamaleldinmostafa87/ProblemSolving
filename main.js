import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `
  
// `;

var isAnagram = function (s, t) {
  const lenghtOfT = t.length;
  const lengthOfS = s.length;
  let newArrangedStr = ''
  if(lenghtOfT !== lengthOfS) return false
  // get each char from t and push it in an array
  // for(let i = 0;i<lengthOfS;i++){
  //   for(let j = 0; j<lenghtOfT; j++){
  //     if(t[i]==s[j]){
  //       newArrangedStr +=t[j]
  //     }
  //   }

  // }
  // console.log("newa arranged str ",newArrangedStr)
  let counter = new Map()
  for (const char of s) {
    counter.set(char, (counter.get(char) || 0) + 1)
  }


  for (const charT of t) {
    if(counter.has(charT)){
      if(counter.get(charT) === 0){
        return false
      }
      counter.set(charT,Math.max(counter.get(charT) - 1, 0))
  }
  else return false
};
return true
}

// console.log(isAnagram('aacc', 'ccac'));
//s t


var twoSum = function(nums, target) {
  // add two numbers 
  
};


var groupAnagrams = function (strs) {
  for (let i = 0;i<strs.length;i++) {
    console.log(iterator);
    for (let j = 0; j < strs.length; j++) {
      // const element = array[index];
let news = [];
      if(strs[j].includes(strs[i])){
// put the element in the array
news.push(strs[i].split(','))
      }
      
    }
  }

};


let m = 'kamal'.split('')
let shuffle = 'makal'.split('')
let count = 0
for(let i=0;i<m.length;i++){
  console.log(i);
  // console.log(m[i]);
// for (let j = 0; j < shuffle.length; j++) {
//   // console.log('letters of m',m[i]);
//     if(m[i]==shuffle[j]){
//       // console.log(m[i]);
//       // console.log(shuffle[j]);
//       count++
//       shuffle.splice(0,i)
//       m.splice(0,j)
//     }
// }
}

// console.log(count);
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 