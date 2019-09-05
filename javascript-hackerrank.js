// Time Conversion:
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// Input Format
// A single string s containing a time in 12-hour clock format.

// Constraints
// All input times are valid

// Output Format
// Convert and print the given time in 24-hour format.

// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

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

// Kangaroo:
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// For example, kangaroo 1 starts at x1=2 with a jump distance v1=1 and kangaroo 2 starts at x2=1 with a jump distance of v2=2. After one jump, they are both at x=3, (x1+v1=2+1, x2+v2=1+2), so our answer is YES.

// Function Description
// Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):
// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// Input Format
// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

// Output Format
// Print YES if they can land on the same location at the same time; otherwise, print NO.
// Note: The two kangaroos must land at the same location after making the same number of jumps.

// Sample Input 0
// 0 3 4 2

// Sample Output 0
// YES

function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 >= v2) || (x1 < x2 && v1 <= v2)) {
    return "NO";
  }

  let behind = x1 > x2 ? [x2, v2] : [x1, v1];
  let lead = x1 > x2 ? [x1, v1] : [x2, v2];

  do {
    if (lead[0] === behind[0]) {
      return "YES";
    }
    lead[0] += lead[1];
    behind[0] += behind[1];
  } while (lead[0] >= behind[0]);
  return "NO";
}

// Between Two Sets:
// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

// For example, given the arrays a=[2,6] and b=[24, 36], there are two numbers between them: 6 and 12. 6%2=0, 6%6=0, 24%6=0 and 36%6=0 for the first value. Similarly, 12%2=0, 12^6=0 and 24%12=0, 36%12=0.

// Function Description
// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// a: an array of integers
// b: an array of integers

// Input Format
// The first line contains two space-separated integers, n and m, the number of elements in array a and the number of elements in array b.
// The second line contains n distinct space-separated integers describing a[i] where 0<=i<n.
// The third line contains m distinct space-separated integers describing b[j] where 0<=j<m.

// Output Format
// Print the number of integers that are considered to be between a and b.

// Sample Input
// 2 3
// 2 4
// 16 32 96

// Sample Output
// 3
// Explanation

// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

function getTotalX(a, b) {
  let ansA = [];
  for (let i = Math.max(...a); i <= Math.min(...b); i++) {
    let checkA = a.filter(val => {
      if (i % val === 0) {
        return true;
      }
      return false;
    });
    if (checkA.length === a.length) {
      ansA.push(i);
    }
  }
  let ansB = ansA.filter(val => {
    for (let j = 0; j < b.length; j++) {
      if (b[j] % val !== 0) {
        return false;
      }
    }
    return true;
  });
  return ansB.length;
}

// Day of the Programmer:
// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

// From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

// In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:
// Divisible by 400.
// Divisible by 4 and not divisible by 100.

// Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

// For example, the given year=1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.

// Function Description
// Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.
// dayOfProgrammer has the following parameter(s):
// year: an integer

// Input Format
// A single integer denoting year y.

// Output Format

// Print the full date of Day of the Programmer during year y in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.

function dayOfProgrammer(year) {
  if (year === 1918) {
    return "26.09.1918";
  }
  if (year % 4 !== 0) {
    return `13.09.${year}`;
  }
  if (year < 1918) {
    return `12.09.${year}`;
  }
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return `12.09.${year}`;
    }
    return `13.09.${year}`;
  }
  return `12.09.${year}`;
}

// Migratory Birds:
// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

// For example, assume your bird sightings are of types arr=[1, 1, 2, 2, 3]. There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

// Function Description

// Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.

// migratoryBirds has the following parameter(s):

// arr: an array of integers representing types of birds sighted

// Input Format
// The first line contains an integer denoting n, the number of birds sighted and reported in the array arr.
// The second line describes arr as n space-separated integers representing the type numbers of each bird sighted.

// Constraints
// 5 <= n <= 2*10^5
// It is guaranteed that each type is 1, 2, 3, 4, or 5.

// Output Format
// Print the type number of the most common bird; if two or more types of birds are equally common, choose the type with the smallest ID number.

// Sample Input 0
// 6
// 1 4 4 4 5 3

// Sample Output 0
// 4

function migratoryBirds(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    max = arr[len] > max ? arr[len] : max;
  }
  let count = 0,
    bird = 0;
  for (let i = 1; i <= max; i++) {
    let compare = arr.join("").split(i).length - 1;
    if (count < compare) {
      count = compare;
      bird = i;
    }
  }
  return bird;
}

// 2d Array - DS:

// Given a 6x6 2D Array, arr:
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//   d
// e f g

// There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

// For example, given the 2D array:
// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// We calculate the following 16 hourglass values:
// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18

// Our highest hourglass value is 28 from the hourglass:
// 0 4 3
//   1
// 8 6 6

// Function Description
// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

// hourglassSum has the following parameter(s):
// arr: an array of integers

// Input Format
// Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

// Constraints
// -9 <= arr[i][j] <= 9
// 0 <= i,j <= 5

// Output Format
// Print the largest (maximum) hourglass sum found in arr.

// Sample Input
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Sample Output
// 19

// Explanation
// The hourglass with the maximum sum (19) is:
// 2 4 4
//   2
// 1 2 4

function hourglassSum(arr) {
  let answerArray = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let pushThis = [
        arr[i][j],
        arr[i][j + 1],
        arr[i][j + 2],
        arr[i + 1][j + 1],
        arr[i + 2][j],
        arr[i + 2][j + 1],
        arr[i + 2][j + 2]
      ];
      answerArray.push(pushThis.reduce((acc, cur) => acc + cur));
    }
  }
  return Math.max(...answerArray);
}

// Forming a Magic Square:
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
  function compare(arr) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        count += Math.abs(s[i][j] - arr[i][j]);
      }
    }
    return count;
  }
  let comparedCounts = compArr.map(compare);
  return Math.min(...comparedCounts);
}

// Save the Prisoner:
// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

// For example, there are 4 prisoners and 6 pieces of candy. The prisoners arrange themselves in seats numbered 1 to 4. Let's suppose two is drawn from the hat. Prisoners receive candy at positions 2, 3, 4, 1, 2, 3. The prisoner to be warned sits in chair number 3.

// Function Description
// Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

// saveThePrisoner has the following parameter(s):
// n: an integer, the number of prisoners
// m: an integer, the number of sweets
// s: an integer, the chair number to begin passing out sweets from

// Input Format
// The first line contains an integer, t, denoting the number of test cases.
// The next t lines each contain 3 space-separated integers:
// -n : the number of prisoners
// -m : the number of sweets
// -s : the chair number to start passing out treats at

// Constraints
// 1 <= t <= 100
// 1 <= n <= 10^9
// 1 <= m <= 10^9
// 1 <= s <= n

// Output Format
// For each test case, print the chair number of the prisoner who receives the awful treat on a new line.

// Sample Input 0
// 2
// 5 2 1
// 5 2 2

// Sample Output 0
// 2
// 3

// Explanation 0
// In first query, there are n=5 prisoners and m=2 sweets. Distribution starts at seat number s=1. Prisoners in seats numbered 1 and 2 get sweets. Warn prisoner 2.
// In the second query, distribution starts at seat 2 so prisoners in seats 2 and 3 get sweets. Warn prisoner 3.

function saveThePrisoner(n, m, s) {
  let warn = (m % n) + s - 1;
  if (warn > n) {
    return warn % n;
  } else if (warn === 0) {
    return n;
  } else {
    return warn;
  }
}

// Circular Array Rotation
// John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

// For each array, perform a number of right circular rotations and return the value of the element at a given index.

// For example, array a = [3[, 4, 5]], number of rotations, k = 2 and indices to check, m = [1, 2].
// First we perform the two rotations:
//  [3, 4, 5] -> [5, 3, 4] -> [4, 5, 3]
// Now return the values from the zero-based indices 1 and 2 as indicated in the m array.
// a[1] = 5
// a[2] = 3

// Function Description
// Complete the circularArrayRotation function in the editor below. It should return an array of integers representing the values at the specified indices.

// circularArrayRotation has the following parameter(s):
// a: an array of integers to rotate
// k: an integer, the rotation count
// queries: an array of integers, the indices to report
// Input Format

// The first line contains 3 space-separated integers, n, k, and q, the number of elements in the integer array, the rotation count and the number of queries.
// The second line contains n space-separated integers, where each integer i describes array element a[i] (where 0 <= i <= n).
// Each of the q subsequent lines contains a single integer denoting m, the index of the element to return from a.

// Output Format
// For each query, print the value of the element at index m of the rotated array on a new line.

// Sample Input 0
// 3 2 3
// 1 2 3
// 0
// 1
// 2

// Sample Output 0
// 2
// 3
// 1

function circularArrayRotation(a, k, queries) {
  let rotation = k % a.length;
  let newArr = a.slice(a.length - rotation);
  newArr.splice(newArr.length, 0, ...a.slice(0, a.length - rotation));
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    answer.push(newArr[queries[i]]);
  }
  return answer;
}

// Hash Tables: Ransom Note
// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.
// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
// For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is No.

// Function Description
// Complete the checkMagazine function in the editor below. It must print Yes if the note can be formed using the magazine, or No.

// checkMagazine has the following parameters:
// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note

// Input Format
// The first line contains two space-separated integers, m and n, the numbers of words in the magazine and the note..
// The second line contains m space-separated strings, each magazine[i].
// The third line contains n space-separated strings, each note[i].

// Output Format
// Print Yes if he can use the magazine to create an untraceable replica of his ransom note. Otherwise, print No.

// Sample Input 0
// 6 4
// give me one grand today night
// give one grand today

// Sample Output 0
// Yes

// Sample Input 1
// 6 5
// two times three is not four
// two times two is four

// Sample Output 1
// No

// Explanation 1
// 'two' only occurs once in the magazine.

// Sample Input 2
// 7 4
// ive got a lovely bunch of coconuts
// ive got some coconuts

// Sample Output 2
// No

// Explanation 2
// Harold's magazine is missing the word some.

function checkMagazine(magazine, note) {
  for (let i = 0; i < note.length; i++) {
    if (magazine.includes(note[i])) {
      magazine.splice(magazine.indexOf(note[i]), 1);
    } else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
  return;
}

//Closest Numbers
//Given a list of unsorted integers, arr, find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let close = Infinity;
  let answer = [];
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff === close) {
      answer.push([arr[i - 1], arr[i]]);
    }
    if (diff < close) {
      close = diff;
      answer = [arr[i - 1], arr[i]];
    }
  }
  return answer;
}

//Hopping Jack
// Hopping Jack is standing at the bottom of a long flight of stairs. The bottom of the stairs has number 0, first step has number 1, the next step has number 2, and so on upto infinity

// Jack will now perform N consecutive actions. The actions are numbered 1 through N, in that particular order. When performing action X, Jack chooses between two options:

// either he does nothing
// or he hops exactly X steps up the stairs.

// In other words, if Jack starts performing action X standing on step Y, he will end it either on step Y, or on step Y + X.

// For example, if N = 3, Jack will make three consecutive choices: whether or not to hop 1 step upwards, 2 steps upwards, and then 3 steps upwards.

// One of the steps is broken. The number of this step is K. Jack cannot hop onto this step.
// You are given the integers N and K. Compute and print the number of the topmost step that can be reached by Jack provided that Jack starts from the bottom of the stairs at step 0?

function hopping(n, k) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
    if (answer === k) {
      answer -= 1;
    }
  }
  return answer;
}


// Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"

// Example 2:
// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

// Runtime: 52 ms, faster than 98.31% of JavaScript online submissions for Longest Valid Parentheses.
// Memory Usage: 36.3 MB, less than 100.00% of JavaScript online submissions for Longest Valid Parentheses.
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