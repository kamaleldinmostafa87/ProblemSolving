// import './style.css';
// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `

// `;

var isAnagram = function (s, t) {
  let lengthOfT = t.length;
  const lengthOfS = s.length;
  let newArrangedStr = "";
  if (lenghtOfT !== lengthOfS) return false;
  // get each char from t and push it in an array
  // for(let i = 0;i<lengthOfS;i++){
  //   for(let j = 0; j<lenghtOfT; j++){
  //     if(t[i]==s[j]){
  //       newArrangedStr +=t[j]
  //     }
  //   }

  // }
  // console.log("newa arranged str ",newArrangedStr)
  let counter = new Map();
  for (const char of s) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  for (const charT of t) {
    if (counter.has(charT)) {
      if (counter.get(charT) === 0) {
        return false;
      }
      counter.set(charT, Math.max(counter.get(charT) - 1, 0));
    } else return false;
  }
  return true;
};

// console.log(isAnagram('aacc', 'ccac'));
//s t

var twoSum = function (nums, target) {
  // add two numbers
};

var groupAnagrams = function (strs) {
  let newMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const ordered = strs[i].split("").sort().join(""); //aet
    // push the origin instead of the ordered
    if (newMap.has(ordered)) {
      //search about keys
      newMap.set(ordered, [...newMap.get(ordered), strs[i]]); // get the old values an
    } else {
      newMap.set(ordered, [strs[i]]);
    }
  }
  return Array.from(newMap.values());
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

const topKFrequent = function (nums, k) {
  let newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (newMap.has(nums[i])) {
      newMap.set(nums[i], [...newMap.get(nums[i]), nums[i]]);
    } else {
      newMap.set(nums[i], [nums[i]]);
    }
  }

  let sortedEntries = [...newMap.entries()].sort(
    (a, b) => b[1].length - a[1].length
  );

  const ll = sortedEntries.slice(0, k);
  let arr = [];
  for (const [key, value] of ll) {
    arr.push(value);
  }
  const finallyArr = new Map(arr);
  return Array.from(finallyArr.values());
};

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
    if (
      tokens[i] !== "/" &&
      tokens[i] !== "*" &&
      tokens[i] !== "+" &&
      tokens[i] !== "-"
    ) {
      stack.push(Number(tokens[i]));
    } else {
      let poppedArr = [];
      //we will check first if stack is empty
      if (stack.length > 1) {
        poppedArr.push(stack.pop());
        poppedArr.push(stack.pop());
        // 4 13 5 .. pop: 4 13 .. pop: 4
      } else if (stack.length === 1) {
        return stack[0];
      }

      console.log("popped numbers from array", poppedArr);
      let calculated; //4 5 6 length = 3  last two eles => 3 - 2    3 - 1
      calculated = eval(
        `${poppedArr[poppedArr - 2]} ${tokens[i]} ${poppedArr[poppedArr - 1]}`
      );
      // console.log(poppeArr);
      stack.push(calculated); //6 and repeat
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

  firstPart = s.split("").filter((item) => item !== " " && "," && ":");
  secondPart = s.split("").filter((item) => item !== " " && "," && ":");
  if (firstPart.length % 2 !== 0 && secondPart.length % 2 !== 0) return flase;

  let SplitedFirstPart = [];
  for (let i = 0; i <= firstPart.length / 2; i++) {
    // push the half of length of array
    SplitedFirstPart.push(firstPart[i]);
  }

  // console.log('first part', SplitedFirstPart);

  // reverse this splited array
  let reversedFirstPart;
  reversedFirstPart = SplitedFirstPart.reverse();
  //compare the reversed string of first half of array to the second part of the array
  // take the second part of the array

  // 1  2  3  4    length=4
  // start from  i= length - 1.. i >=0
  let splitedSecondPart = [];
  for (let i = secondPart.length / 2; i >= 0; i--) {
    // push the half of length of array
    splitedSecondPart.push(secondPart[i]);
  }

  //   console.log('second part', splitedSecondPart);
  //   console.log('reversed first part', reversedFirstPart.reverse());

  //   console.log('reversed second part', splitedSecondPart.reverse());

  if (
    JSON.stringify(splitedSecondPart.reverse()) ===
    JSON.stringify(reversedFirstPart.reverse())
  )
    return true;
};

var isValid = function (s) {
  let stack = [];
  for (let item of s) {
    if (
      (item === ")" && stack[stack.length - 1] === "(") ||
      (item === "}" && stack[stack.length - 1] === "{") ||
      (item === "]" && stack[stack.length - 1] === "[" && stack.length > 0)
    ) {
      stack.pop(item);
    } else {
      stack.push(item);
    }
  }

  return stack.length === 0;
};

// palindrom
// var isPalindrome = function (s) {
//   // split the array
//   // console.log(s.split(''));
//   console.log('origin arr', s);
//   let firstPart;
//   let secondPart;
//   console.log('original length', s.length);

//   firstPart = s.split('').filter(item => item !== ' ' && ',' && ':')
//   secondPart = s.split('').filter(item => item !== ' ' && ',' && ':')
//   // another logic
//   const allString = s.split('').filter(item => item !== ' ' && ',' && ':')
//   console.log('String from left', allString);
//   const allStringFromLeft = [];
//   const allStringFromRight = [];

//   for (let i = allString.length - 1; i >= 0; i--) {
//     //   // push the half of length of array
//     allStringFromRight.push(allString[i])
//   }
//   console.log('String from right ', allStringFromRight);
//   return JSON.stringify(allStringFromRight.reverse()) === JSON.stringify(allString)
// if (firstPart.length % 2 !== 0 && secondPart.length % 2 !== 0) return false;

// let SplitedFirstPart = []
// for (let i = 0; i <= firstPart.length / 2; i++) {
//   // push the half of length of array
//   SplitedFirstPart.push(firstPart[i])
// }

// console.log('first part', SplitedFirstPart);

// // reverse this splited array
// let reversedFirstPart
// reversedFirstPart = SplitedFirstPart.reverse()
// //compare the reversed string of first half of array to the second part of the array
// // take the second part of the array

// // 1  2  3  4    length=4
// // start from  i= length - 1.. i >=0
// let splitedSecondPart = []
// for (let i = secondPart.length / 2; i >= 0; i--) {
//   // push the half of length of array
//   splitedSecondPart.push(secondPart[i])
// }

// console.info('second part', splitedSecondPart);
// console.log('reversed first part', reversedFirstPart.reverse());

// console.log('reversed second part', splitedSecondPart.reverse());

// if (JSON.stringify(splitedSecondPart.reverse()) === JSON.stringify(reversedFirstPart.reverse())) return true

// };

var isPalindrome = function (s) {
  // split the array
  console.log("origin arr", s);

  console.log("a.".replace(/[^a-zA-Z0-9]/g, ""));
  // another logic
  const allString = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  if (allString.length >= 1) return;

  console.log("String from left", allString);
  const allStringFromRight = [];

  for (let i = allString.length - 1; i >= 0; i--) {
    //   // push the half of length of array
    allStringFromRight.push(allString[i]);
  }

  console.log("string from right", allStringFromRight);
  return JSON.stringify(allStringFromRight) === JSON.stringify(allString);
};

// console.log(isPalindrome("race a car"));

//raca    ecar
//race    acar  origin

const filter = (s) => {
  let newS = s.replace(/[^0-9]/g, "");
  let newSs = newS.split("").join("-");

  return newSs;
};

// console.log(filter('1-a-b-2'))

const isPowerOfTwo = function (base) {
  //base = 1 > true
  //base = 0 > false
  //base = 2 > true

  // if (base % 2 !== 0) return false
  for (let index = 0; index < 31; index++) {
    let result = Math.pow(2, index);
    console.log(result);

    if (result === base) return true;
  }
  return false;
};

// console.log(isPowerOfTwo(1));

var reverseWords = function (s) {
  // let reversedStrArr = s.split(' ').reverse();

  // // console.log('reversed', reversedStrArr.join(' '));

  // return reversedStrArr.join(' ')

  const mm = new Set(s.trim().split(" ").reverse());
  console.log("from set", mm);
  return Array.from(mm).join(" ");
};

// console.log(reverseWords("Let's take LeetCode contest"));
// console.log(reverseWords("a good example"));

// var increasingTriplet = function (nums) {
//   for (let index = 0; index < nums.length; index++) {

//   }
// };

// console.log(increasingTriplet([5, 4, 3, 2, 1]));

// var increasingTriplet = function (nums) {
//   let first = Infinity;
//   let second = Infinity;

//   for (let i = 0; i < nums.length; i++) {

//     if (nums[i] <= first) {
//       first = nums[i]
//     } else if (nums[i] <= second) {
//       second = nums[i]
//     } else return true

//     return false

//   }
// }

//
// var productExceptSelf = function (nums) {
//   // i want to product all elements in the array execpt the current element
//   let productarr = []
//   let result = 1;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         result = result * nums[j];
//         if (j === nums.length - 1) {
//           productarr.push(result);
//           result = 1;
//         }
//       }
//     }
//   }

//   return productarr
// };

var productExceptSelf = function (nums) {
  let productarr = [];
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        result = result * nums[j];
      }
    }
    productarr.push(result); // Move outside the inner loop
    result = 1; // Reset result for next iteration
  }
  return productarr;
};
// console.log(productExceptSelf([1, 2, 3, 4]));

var compress = function (chars) {
  const newMap = new Map();

  if (chars.length === 1) return chars;
  for (let i = 0; i < chars.length; i++) {
    if (newMap.has(chars[i])) {
      newMap.set(chars[i], newMap.get(chars[i]) + 1);
    } else {
      newMap.set(chars[i], 1);
    }
  }

  return Array.from(newMap)
    .flatMap((item) => item)
    .join("")
    .split("");
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
// console.log(compress(["a"]));

var isSubsequence = function (s, t) {
  // letters in different places
  let i = 0,
    j = 0;
  while (i < t.length && j < s.length) {
    console.log(j);
    if (t[i] === s[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j === s.length;
};
