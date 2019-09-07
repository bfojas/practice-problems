// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  let num1 = l1;
  let num2 = l2;
  let carry = 0;
  let answerList = new ListNode(0);
  answer = answerList;
  while (num1 !== null || num2 !== null) {
    let val1 = num1 && num1.val ? num1.val : 0;
    let val2 = num2 && num2.val ? num2.val : 0;
    let sum = val1 + val2 + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    answer.val += sum;
    if ((num1 && num1.next) || (num2 && num2.next)) {
      answer.next = new ListNode(0);
      answer = answer.next;
    }
    num1 = num1 === null ? null : num1.next;
    num2 = num2 === null ? null : num2.next;
  }
  if (carry) {
    answer.next = new ListNode(carry);
  }
  return answerList;
};

// Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let answer = 0;
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (hash[char] >= start) {
      start = hash[char] + 1;
    }
    hash[char] = i;
    if (i - start + 1 > answer) {
      answer = i - start + 1;
    }
  }
  return answer;
};

// Median of Two Sorted Arrays
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

// Note: Faster than 97.01% of JavaScript submissions
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = []
    let even = false
    let fullLength = nums1.length + nums2.length
    let medianPosition = fullLength /2
    if (fullLength % 2 === 0 || medianPosition === 1) {
        even = true
    }
        
  while ((nums1.length + nums2.length) >= medianPosition && (nums1.length || nums2.length)) {
    if (nums1[0] > nums2[0] || !nums1.length) {
      sorted.push(nums2.shift())
    } else {
      sorted.push(nums1.shift())
    }
  }

  let median = (array) => {
        let len = array.length
        if (len  === 0) {
            return 0
        }
        if (even) {       
            return (array[len-2] + array[len-1])/2
        }
      return (array[len-1])
    }
  return median(sorted)
};


// 3Sum
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Note: The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//  [-1, 0, 1],
//  [-1, -1, 2]
// ]

// Note: Faster than 99.69% of JavaScript submissions
var threeSum = function(nums) {
    let ans = []
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i]>0) {break}
        if (i>0 && nums[i] === nums[i-1]) {continue}
        let low = i + 1;
        let high = nums.length - 1
        while (low < high) {
            let sum = nums[low] + nums[high] + nums[i]
            if (low - i > 1 && nums[low] === nums[low-1]) {
                low++
            } else if (nums[high] === nums[high+1]) {
                high--
            } else if (sum > 0) {
                high--
            } else if (sum < 0) {
                low++
            } else {
                ans.push([nums[i], nums[low], nums[high]])
                high--
                low++
            }
        }
    }
    return ans
};


// 3Sum Closest
// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:
// Given array nums = [-1, 2, 1, -4], and target = 1.
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

var threeSumClosest = function(nums, target) {
    let ans = 0;
    let dist = Infinity;
    nums.sort((a,b)=>a-b);
    for (let i = 0; i < nums.length-2; i++) {
        let low = i + 1;
        let high = nums.length - 1
        while (low < high) {
            let sum = nums[low] + nums[high] + nums[i]
            let compare = Math.abs(target - sum)
            if (compare < dist) {
                ans = sum
                dist = compare
            }
            if (sum > target) {
                high--;
            } else if (sum < target) {
                low++;
            } else {
                ans = sum;
                return ans;
            }
        }
    }
    return ans
};

// ZigZag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I


var convert = function(s, numRows) {
  let arr = s.split("")
  let count = 0
  let ansObj = {}
  let place = 0
  let down = true
  while (count < arr.length) {
      if (ansObj[place]) {
          ansObj[place].push(arr[count])
      } else {
          ansObj[place] = [arr[count]]
      }
      count++;
      if (down) {
          place ++
      } else {
          place--
      }
      if (place === numRows -1 || place === 0) {
          down = !down
      }
  }
  let ans = []
  for (key in ansObj) {
      ans.push(...ansObj[key])
  }
  return ans.join("")
};


// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.


var longestCommonPrefix = function(strs) {
  if ( strs.length < 1 ) return ""
  if (strs.length === 1 ) return strs[0]
  if (strs[0] === "") return ""
  let substring = 1
  let ans = strs[0].substring(0,substring)
  
  let compare = (str) => {
      for (let i = 1; i < strs.length; i++) {
          if (strs[i].substring(0, ans.length) !== ans) {
              if (strs[i].length > str.length) {
                  ans = ans.substring(0, substring-1)
                  break
              }
              if (ans.length === 1) {
                  ans = ""
                  break
              } else {
                  ans = ans.substring(0, substring-1)
                  break 
              }
          }
      }
      if( substring > ans.length ) {
          return
      } else {
          substring++
          ans = strs[0].substring(0, substring)  
          return compare(ans)
      }
  }
  compare(ans)
  return ans
};


// Length of Last Word
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
// If the last word does not exist, return 0.
// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:
// Input: "Hello World"
// Output: 5

var lengthOfLastWord = function(s) {
  let split = s.trim().split(" ")
  return split[split.length -1].length
};

// Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.

// Example 2:
// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?
// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);
// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

var removeDuplicates = function(nums) {
  let length = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[length-1] ) {
        nums[length] = nums[i]
        length++
      } 
    }
    return length
};