//Helper Function
function arrayIncludes(arr, values) {
  let allGood = true;
  for (let i = 0; i < values.length; i++) {
    if (!arr.includes(values[i])) {
      allGood = false;
      break;
    }
  }
  return allGood;
}

//Test Suite
describe("javascript problems", function() {
  describe("Problem 1 - Smallest Difference", function() {
    it("Test Case #1", function() {
      expect(
        smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])
      ).toEqual([20, 17]);
    });

    it("Test Case #2", function() {
      expect(
        smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
      ).toEqual([28, 26]);
    });

    it("Test Case #3", function() {
      expect(
        smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031])
      ).toEqual([25, 1005]);
    });

    it("Test Case #4", function() {
      expect(
        smallestDifference(
          [10, 0, 20, 25, 2200],
          [1005, 1006, 1014, 1032, 1031]
        )
      ).toEqual([25, 1005]);
    });

    it("Test Case #5", function() {
      expect(
        smallestDifference(
          [10, 0, 20, 25, 2000],
          [1005, 1006, 1014, 1032, 1031]
        )
      ).toEqual([2000, 1032]);
    });

    it("Test Case #6", function() {
      expect(
        smallestDifference(
          [240, 124, 86, 111, 2, 84, 954, 27, 89],
          [1, 3, 954, 19, 8]
        )
      ).toEqual([954, 954]);
    });

    it("Test Case #7", function() {
      expect(smallestDifference([0, 20], [21, -2])).toEqual([20, 21]);
    });

    it("Test Case #8", function() {
      expect(
        smallestDifference(
          [10, 1000],
          [-1441, -124, -25, 1014, 1013, 660, 410, 245, 530]
        )
      ).toEqual([1000, 1013]);
    });

    it("Test Case #9", function() {
      expect(
        smallestDifference(
          [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
          [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
        )
      ).toEqual([-123, -124]);
    });

    it("Test Case #10", function() {
      expect(
        smallestDifference(
          [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
          [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
        )
      ).toEqual([530, 530]);
    });
  });

  describe("Problem 2 - Time Conversion", function() {
    it("Test Case #1", function() {
      expect(timeConversion("07:05:45PM")).toEqual("19:05:45");
    });

    it("Test Case #2", function() {
      expect(timeConversion("12:40:22AM")).toEqual("00:40:22");
    });

    it("Test Case #3", function() {
      expect(timeConversion("12:05:39PM")).toEqual("12:05:39");
    });

    it("Test Case #4", function() {
      expect(timeConversion("11:05:39PM")).toEqual("23:05:39");
    });
  });

  describe("Problem 3 - Magic Square", function() {
    it("Test Case #1", function() {
      expect(formingMagicSquare([[4, 5, 8], [2, 4, 1], [1, 9, 7]])).toEqual(14);
    });

    it("Test Case #2", function() {
      expect(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])).toEqual(1);
    });

    it("Test Case #3", function() {
      expect(formingMagicSquare([[2, 5, 4], [4, 6, 9], [4, 5, 2]])).toEqual(16);
    });
  });

  describe("Problem 4 - Longest Palindrome Substring", function() {
    it("Test Case #1", function() {
      expect(longestPalindrome("ababababa")).toEqual("ababababa");
    });

    it("Test Case #2", function() {
      expect(longestPalindrome("ccc")).toEqual("ccc");
    });

    it("Test Case #3", function() {
      expect(longestPalindrome("cccd")).toEqual("ccc");
    });

    it("Test Case #4", function() {
      expect(longestPalindrome("cbbd")).toEqual("bb");
    });

    it("Test Case #5", function() {
      expect(longestPalindrome("badadac")).toEqual("adada");
    });
  });

  describe("Problem 5 - 3Sum", function() {
    it("Test Case #1", function() {
      expect(threeSum([-1, 0, 1, 2, -1, -4])).toContain(
        [-1, 0, 1] && [-1, -1, 2]
      );
    });

    it("Test Case #2", function() {
      expect(threeSum([0, -4, -1, -4, -2, -3, 2])).toEqual([[-2, 0, 2]]);
    });

    it("Test Case #3", function() {
      expect(threeSum([3, 0, -2, -1, 1, 2])).toContain(
        [-2, -1, 3] && [-2, 0, 2] && [-1, 0, 1]
      );
    });
  });

  describe("Problem 5 - Roman to Integer", function() {
    it("Test Case #1", function() {
      expect(romanToInt("III")).toEqual(3);
    });

    it("Test Case #2", function() {
      expect(romanToInt("IV")).toEqual(4);
    });

    it("Test Case #3", function() {
      expect(romanToInt("IX")).toEqual(9);
    });

    it("Test Case #4", function() {
      expect(romanToInt("LVIII")).toEqual(58);
    });

    it("Test Case #5", function() {
      expect(romanToInt("MCMXCIV")).toEqual(1994);
    });
  });

  describe("Problem 5 - Roman to Integer", function() {
    it("Test Case #1", function() {
      expect(intToRoman(3)).toEqual("III");
    });

    it("Test Case #2", function() {
      expect(intToRoman(4)).toEqual("IV");
    });

    it("Test Case #3", function() {
      expect(intToRoman(90)).toEqual("XC");
    });

    it("Test Case #4", function() {
      expect(intToRoman(58)).toEqual("LVIII");
    });

    it("Test Case #5", function() {
      expect(intToRoman(1994)).toEqual("MCMXCIV");
    });
  });

  describe("Problem 7 - Disappeared Numbers", function() {
    it("Test Case #1", function() {
      expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
    });

    it("Test Case #2", function() {
      expect(findDisappearedNumbers([2, 2])).toEqual([1]);
    });

    it("Test Case #3", function() {
      expect(findDisappearedNumbers([1, 1])).toEqual([2]);
    });

    it("Test Case #4", function() {
      expect(findDisappearedNumbers([2, 2, 2])).toEqual([1,3]);
    });

    it("Test Case #5", function() {
      expect(findDisappearedNumbers([4, 3, 2, 6, 8, 2, 3, 1, 1])).toEqual([5, 7, 9]);
    });
  });
});
