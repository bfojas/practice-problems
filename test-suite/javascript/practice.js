//////Smallest Difference//////
//Write a function that takes two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero. The function should return an array contain these two numbers with the number from the first array in the first position. Assume that there will only be one pair of numbers with the smallest difference.

//Code here
function smallestDifference(arr1, arr2){

  /*
   * Write your code here.
   */
  
}

//////Time Conversion//////

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// Input Format
// A single string s containing a time in 12-hour clock format.


// Output Format
// Convert and print the given time in -hour format, where .

// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

//Code Here
function timeConversion(s) {
  /*
   * Write your code here.
   */
}

//////Forming a Magic Square////
// We define a magic square to be an nxn matrix of distinct positive integers from 1 to n^2 where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

// You will be given a 3x3 matrix s of integers in the inclusive range [1,9]. We can convert any digit a to any other digit b in the range [1,9] at cost of |a - b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].

// For example, we start with the following matrix s:
// 5 3 4
// 1 5 8
// 6 4 2

// We can convert it to the following magic square:
// 8 3 4
// 1 5 9
// 6 7 2

// This took three replacements at a cost of |5+8| + |8-9| + |4-7| = 7.

// Function Description
// Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.

// formingMagicSquare has the following parameter(s):
// s: a 3x3 array of integers

// Input Format
// Each of the lines contains three space-separated integers of row s[i].

// Output Format
// Print an integer denoting the minimum cost of turning matrix s into a magic square.

// Sample Input 0
// 4 9 2
// 3 5 7
// 8 1 5

// Sample Output 0
// 1

// Explanation 0
// If we change the bottom right value, s[2][2] , from 5 to 6 at a cost of |6-5| = 1, s becomes a magic square at the minimum possible cost.

function formingMagicSquare(s) {
  /*
   * Write your code here.
   */
}

//////Longest Palindrome Substring//////
// Given a string s, find the longest palindromic substring in s.

// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: "cbbd"
// Output: "bb"

function longestPalindrome(s) {
  /*
   * Write your code here.
   */

};


//////3Sum/////
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function threeSum (nums) {
  /*
   * Write your code here.
   */
};

//////Disappeared Numbers//////
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

function findDisappearedNumbers(nums) {
  /*
   * Write your code here.
   */
};