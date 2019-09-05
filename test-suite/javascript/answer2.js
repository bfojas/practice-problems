//////Roman to Integer//////
function romanToInt(s) {
  let dictionary = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (dictionary[s[i]] < dictionary[s[i + 1]]) {
      ans += dictionary[s[i + 1]] - dictionary[s[i]];
      i++;
    } else {
      ans += dictionary[s[i]];
    }
  }
  return ans;
}

//////Integer to Roman//////
function intToRoman(num) {
  let ans = "";
  // let dictionary = { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M" };
  // let numStr = String(num)
  // let len = numStr.length
  // for (let i = 0; i < len; i++) {
  //   if (numStr[i] > 8) {
  //     ans += dictionary[Math.pow(10, len - i-1)] + dictionary[Math.pow(10, len - i)]
  //   } else if (numStr[i] > 5) {
  //     ans += dictionary[Math.pow(10, (len - i))/2] + dictionary[Math.pow(10, len - i-1)].repeat(numStr[i] - 5)
  //   } else if (numStr[i] > 4) {
  //     ans += dictionary[Math.pow(10, (len - i))/2]
  //   } else if (numStr[i] > 3) {
  //     ans += dictionary[Math.pow(10, len - i-1)] + dictionary[Math.pow(10, (len - i))/2]
  //   } else {
  //     ans += dictionary[Math.pow(10, len - i-1)].repeat(numStr[i])
  //   }
  // }

  var roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var i = 0;
  while (num > 0) {
    if (num - nums[i] >= 0) {
      num -= nums[i];
      ans += roman[i];
    } else {
      i++;
    }
  }
  return ans;
}

//////String to Integer (atoi)//////
var myAtoi = function(str) {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  firstNon = str.search(/[^\s]/);
  if (firstNon === -1) return 0;
  let ans = str.substring(firstNon);
  let subEnd = () => {
    let end = ans.search(/\D/);
    return end + 1 ? ans.substring(0, end) : ans;
  };
  let posNeg = 1;
  if (ans[0] === "-") {
    posNeg = -1;
    ans = ans.substring(1);
  } else if (ans[0] === "+") {
    ans = ans.substring(1);
  }
  if (!parseInt(ans[0]) && ans[0] !== "0") {
    return 0;
  }
  ans = posNeg * parseInt(subEnd());
  ans = ans > max ? max : ans;
  ans = ans < min ? min : ans;
  return ans;
};

//////Valid Parenthesis//////
function isValid(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      arr.push(s[i]);
    } else if (s[i] === "}") {
      if (arr[arr.length - 1] === "{") {
        arr.pop();
      } else {
        return false;
      }
    } else if (s[i] === ")") {
      if (arr[arr.length - 1] === "(") {
        arr.pop();
      } else {
        return false;
      }
    } else if (s[i] === "]") {
      if (arr[arr.length - 1] === "[") {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  if (arr.length > 0) {
    return false;
  } else {
    return true;
  }
}

//////Longest Valid Parentheses//////
function longestValidParentheses(s) {
    let ans = 0;
    let length = 0;
    let stack = [-1];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push(i)
      } else {
        stack.pop()
        length = i - stack[stack.length -1]
        if (length > ans) {
          ans = length
        }
        if (stack.length === 0) {
          length = 0;
          stack.push(i)
        }
      }
    }
    return ans 
  };