// import './style.css';
// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `

// `;

var isAnagram = function (s, t) {
  let lengthOfT = t.length;
  const lengthOfS = s.length;
  let count = 0;
  if (s.length !== t.length) return false;
  let counterS = new Map();
  //console.log(counterS);
  for (const char of s) {
    counterS.set(char, counterS.get(char) + 1)
  }
  for (let i = 0; i < lengthOfT; i++) {
    if (t.includes(s[i])) {
      count++;
    }
  };
  return count === lengthOfT;
}

// console.log(isAnagram("aacc", "ccac"))
isAnagram("aaccs", "ccacs")


var groupAnagrams = function (strs) {
  for (const iterator of strs) {
    console.log(iterator);
  }
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 

//Stack Problem

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


console.log(isValid("({})"))