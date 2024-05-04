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
  // get each char from t and push it in an array
  for(let i = 0;i<lengthOfS;i++){
    for(let j = 0; j<lenghtOfT; j++){
      if(t[i]==s[j]){
        newArrangedStr +=t[j]
      }
    }

  }
  console.log("newa arranged str ",newArrangedStr)

};

// t = rac = >, s = car
console.log(isAnagram('tar', 'car'));
console.log('kamal')