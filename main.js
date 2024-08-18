// import './style.css';
// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `

// `;

var isAnagram = function (s, t) {
  let lengthOfT = t.length;
  const lengthOfS = s.length;
  let newArrangedStr = ''
  if (lenghtOfT !== lengthOfS) return false
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
    if (counter.has(charT)) {
      if (counter.get(charT) === 0) {
        return false
      }
      counter.set(charT, Math.max(counter.get(charT) - 1, 0))
    }
    else return false
  };
  return true
}

// console.log(isAnagram('aacc', 'ccac'));
//s t


var twoSum = function (nums, target) {
  // add two numbers 

};


var groupAnagrams = function (strs) {
  let newMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const ordered = strs[i].split('').sort().join('');//aet
    // push the origin instead of the ordered
    if (newMap.has(ordered)) { //search about keys
      newMap.set(ordered, [...newMap.get(ordered), strs[i]])// get the old values an
    } else {
      newMap.set(ordered, [strs[i]])
    }
  }
  return (Array.from(newMap.values()));
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 

const topKFrequent = function (nums, k) {
  let newMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (newMap.has(nums[i])) {
      newMap.set(nums[i], [...newMap.get(nums[i]), nums[i]])


    } else {
      newMap.set(nums[i], [nums[i]])
    }
  }

  let sortedEntries = [...newMap.entries()].sort((a, b) => b[1].length - a[1].length);

  const ll = sortedEntries.slice(0, k)
  let arr = []
  for (const [key, value] of ll) {
    arr.push(value)
  }
  const finallyArr = new Map(arr)
  return Array.from(finallyArr.values())

}

// console.log(topKFrequent([1, 2, 2, 3, 3, 2, 3], 1));



// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// ["4","13","5","/","+"] 4 13 5 
var evalRPN = function (tokens) {

  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] !== "/" && tokens[i] !== "*" && tokens[i] !== "+" && tokens[i] !== "-") {
      stack.push(Number(tokens[i]));
    }
    else {
      let poppedArr = [];
      //we will check first if stack is empty
      if (stack.length > 1) {
        poppedArr.push(stack.pop());
        poppedArr.push(stack.pop())
        // 4 13 5 .. pop: 4 13 .. pop: 4 
      } else if (stack.length === 1) {
        return stack[0]
      }

      console.log('popped numbers from array', poppedArr);
      let calculated;//4 5 6 length = 3  last two eles => 3 - 2    3 - 1
      calculated = eval(`${poppedArr[poppedArr - 2]} ${tokens[i]} ${poppedArr[poppedArr - 1]}`);
      // console.log(poppeArr);
      stack.push(calculated) //6 and repeat

    }
  }
  // return  
};

// console.log(evalRPN(["4","13","5","/","+"]));
// console.log(evalRPN(["2","1","+","3","*"]));


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // split the array
  // console.log(s.split(''));
  //   console.log('origin arr', s);
  let firstPart;
  let secondPart;
  //   console.log('original length', s.length);

  firstPart = s.split('').filter(item => item !== ' ' && ',' && ':')
  secondPart = s.split('').filter(item => item !== ' ' && ',' && ':')
  if (firstPart.length % 2 !== 0 && secondPart.length % 2 !== 0) return flase;

  let SplitedFirstPart = []
  for (let i = 0; i <= firstPart.length / 2; i++) {
    // push the half of length of array
    SplitedFirstPart.push(firstPart[i])
  }

  // console.log('first part', SplitedFirstPart);


  // reverse this splited array 
  let reversedFirstPart
  reversedFirstPart = SplitedFirstPart.reverse()
  //compare the reversed string of first half of array to the second part of the array
  // take the second part of the array 


  // 1  2  3  4    length=4
  // start from  i= length - 1.. i >=0
  let splitedSecondPart = []
  for (let i = secondPart.length / 2; i >= 0; i--) {
    // push the half of length of array
    splitedSecondPart.push(secondPart[i])
  }

  //   console.log('second part', splitedSecondPart);
  //   console.log('reversed first part', reversedFirstPart.reverse());

  //   console.log('reversed second part', splitedSecondPart.reverse());

  if (JSON.stringify(splitedSecondPart.reverse()) === JSON.stringify(reversedFirstPart.reverse())) return true
};

var isValid = function (s) {
  let stack = [];
  for (let item of s) {
    if (item === ")" && stack[stack.length - 1] === "("
      || item === "}" && stack[stack.length - 1] === "{"
      || item === "]" && stack[stack.length - 1] === "["
      && stack.length > 0) {
      stack.pop(item);
    } else {
      stack.push(item);
    }
  }

  return stack.length === 0;
};



// palindrom
var isPalindrome = function (s) {
  // split the array
  // console.log(s.split(''));
  console.log('origin arr', s);
  let firstPart;
  let secondPart;
  console.log('original length', s.length);

  firstPart = s.split('').filter(item => item !== ' ' && ',' && ':')
  secondPart = s.split('').filter(item => item !== ' ' && ',' && ':')
  if (firstPart.length % 2 !== 0 && secondPart.length % 2 !== 0) return false;

  let SplitedFirstPart = []
  for (let i = 0; i <= firstPart.length / 2; i++) {
    // push the half of length of array
    SplitedFirstPart.push(firstPart[i])
  }

  console.log('first part', SplitedFirstPart);

  // reverse this splited array 
  let reversedFirstPart
  reversedFirstPart = SplitedFirstPart.reverse()
  //compare the reversed string of first half of array to the second part of the array
  // take the second part of the array 

  // 1  2  3  4    length=4
  // start from  i= length - 1.. i >=0
  let splitedSecondPart = []
  for (let i = secondPart.length / 2; i >= 0; i--) {
    // push the half of length of array
    splitedSecondPart.push(secondPart[i])
  }

  console.log('second part', splitedSecondPart);
  console.log('reversed first part', reversedFirstPart.reverse());

  console.log('reversed second part', splitedSecondPart.reverse());

  if (JSON.stringify(splitedSecondPart.reverse()) === JSON.stringify(reversedFirstPart.reverse())) return true


};


console.log(isPalindrome("race a car"));