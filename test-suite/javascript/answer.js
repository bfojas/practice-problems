//////Smallest Difference//////

function smallestDifference(arr1, arr2) {
  let diff = Infinity;
  ans = [];
  //  brute force method

  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //       if (Math.abs(arr1[i] - arr2[j]) < diff) {
  //         diff = Math.abs(arr1[i] - arr2[j]);
  //         ans = [arr1[i], arr2[j]]
  //       }
  //     }
  //   }
  //   return ans
  // }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let recursion = (i, j) => {
    if (i >= arr1.length || j >= arr2.length) {
      return;
    }
    if (Math.abs(arr1[i] - arr2[j]) < diff) {
      diff = Math.abs(arr1[i] - arr2[j]);
      ans = [arr1[i], arr2[j]];
    }
    if (arr1[i] === arr2[j]) {
      ans = [arr1[i], arr2[j]];
      return;
    } else if (arr1[i] < arr2[j]) {
      return recursion(i + 1, j);
    } else {
      return recursion(i, j + 1);
    }
  };
  recursion(0, 0);
  console.log(typeof ans[0]);
  return ans;
}

//////Time Conversion//////
function timeConversion(s) {
  let timeArray = s.split(":");
  let pmSplit = timeArray[2].split("");
  if (pmSplit[2] === "P" && parseInt(timeArray[0]) !== 12) {
    timeArray[0] = parseInt(timeArray[0]) + 12;
  }
  if (pmSplit[2] === "A" && parseInt(timeArray[0]) === 12) {
    timeArray[0] = "00";
  }
  let timeJoin = timeArray.join(":");
  return timeJoin.substring(0, timeJoin.length - 2);
}

//////Forming a Magic Square////
function formingMagicSquare(s) {
  let compArr = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
  ];
  // There are only 8 possible magic squares, so we compare against them
  function compare(arr) {
    //compares the input square against all the possibles
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // keeps count of the difference cost
        count += Math.abs(s[i][j] - arr[i][j]);
      }
    }
    return count;
  }
  // map an array of the costs and return the minimum cost
  let comparedCounts = compArr.map(compare);
  return Math.min(...comparedCounts);
}

//////Longest Palindrome Substring//////
function longestPalindrome(s) {
  if (s.length === 0) return "";
  if (s.length === 1) return s;
  if (s.length === 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }
  let bestIndex = [0, 0];
  let palIndexCheck = (index1, index2) => {
    if (s[index1] === s[index2]) {
      if (index1 < 0 || index2 > s.length) {
        return;
      }
      if (index2 - index1 > bestIndex[1] - bestIndex[0]) {
        bestIndex = [index1, index2];
      }
      palIndexCheck(index1 - 1, index2 + 1);
    } else {
      return;
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (s.length - i < (bestIndex[1] - bestIndex[0]) / 2) {
      break;
    }
    let sameStart = (start, end) => {
      if (s[start] === s[end]) {
        if (bestIndex[1] - bestIndex[0] < end - start) {
          bestIndex = [start, end];
        }
        sameStart(start, end + 1);
      } else {
        palIndexCheck(start - 1, end);
      }
    };
    if (s[i] === s[i + 1]) {
      sameStart(i, i + 1);
    } else {
      palIndexCheck(i - 1, i + 1);
    }
  }
  return s.substring(bestIndex[0], bestIndex[1] + 1);
}

//////3Sum/////
function threeSum(nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      let sum = nums[low] + nums[high] + nums[i];
      if (low - i > 1 && nums[low] === nums[low - 1]) {
        low++;
      } else if (nums[high] === nums[high + 1]) {
        high--;
      } else if (sum > 0) {
        high--;
      } else if (sum < 0) {
        low++;
      } else {
        ans.push([nums[i], nums[low], nums[high]]);
        high--;
        low++;
      }
    }
  }
  return ans;
}

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
function intToRoman (num) {
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
  
      var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
      var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
      var i = 0;
      while(num > 0){
        if(num - nums[i] >= 0){
          num -= nums[i];
          ans += roman[i];
        } else{ i++; }
      }
    return ans;
  };
  

//////Disappeared Numbers//////
function findDisappearedNumbers(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1;
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}
