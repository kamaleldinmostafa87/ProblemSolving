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
  let newMap = new Map();
  for (let i = 0;i<strs.length;i++) {
      const ordered = strs[i].split('').sort().join('');//aet
      // push the origin instead of the ordered
      if(newMap.has(ordered)){ //search about keys
        newMap.set(ordered,[...newMap.get(ordered),strs[i]])// get the old values an
      }else{
        newMap.set(ordered, [strs[i]])
      }
  }
 return (Array.from(newMap.values()));
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 

const topKFrequent = function(nums, k) {
  let newMap = new Map()

  for (let i = 0; i < nums.length; i++) {
if(newMap.has(nums[i])){
  newMap.set(nums[i], [...newMap.get(nums[i]), nums[i]])


}else {
  newMap.set(nums[i], [nums[i]])
}
  }

let sortedEntries = [...newMap.entries()].sort((a, b) => b[1].length - a[1].length);

const ll = sortedEntries.slice(0,k)
let arr = []
for (const [key,value] of ll) {
  arr.push(value)
}
const finallyArr = new Map(arr)
return Array.from(finallyArr.values())
  
}

console.log(topKFrequent([1,2,2,3,3,2,3], 1));



// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]