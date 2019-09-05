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
  describe("Problem 1 - Roman to Integer", function() {
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

  describe("Problem 2 - Roman to Integer", function() {
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

  describe("Problem 3 - String to Integer (atoi)", function() {
    it("Test Case #1", function() {
      expect(myAtoi("42")).toEqual(42);
    });

    it("Test Case #2", function() {
      expect(myAtoi("   -42")).toEqual(-42);
    });

    it("Test Case #3", function() {
      expect(myAtoi("4193 with words")).toEqual(4193);
    });

    it("Test Case #4", function() {
      expect(myAtoi("words and 987")).toEqual(0);
    });

    it("Test Case #5", function() {
      expect(myAtoi("-91283472332")).toEqual(-2147483648);
    });

    it("Test Case #6", function() {
      expect(myAtoi("+-2")).toEqual(0);
    });

    it("Test Case #7", function() {
      expect(myAtoi("  ")).toEqual(0);
    });

    it("Test Case #8", function() {
      expect(myAtoi("   +42")).toEqual(42);
    });
  });

  describe("Problem 4 - Valid Parentheses", function() {
    it("Test Case #1", function() {
      expect(isValid("()")).toBe(true);
    });

    it("Test Case #2", function() {
        expect(isValid("()[]{}")).toBe(true);
    });

    it("Test Case #3", function() {
        expect(isValid("(]")).toBe(false);
    });

    it("Test Case #4", function() {
        expect(isValid("([)]")).toBe(false);
    });

    it("Test Case #5", function() {
        expect(isValid("{[]}")).toBe(true);
    });
  });

  describe("Problem 4 - Valid Parentheses", function() {
    it("Test Case #1", function() {
      expect(longestValidParentheses("()")).toEqual(2);
    });

    it("Test Case #2", function() {
        expect(longestValidParentheses("()(())")).toEqual(6);
    });

    it("Test Case #3", function() {
        expect(longestValidParentheses("())()()")).toEqual(4);
    });

    it("Test Case #4", function() {
        expect(longestValidParentheses("()(()")).toEqual(2);
    });

    it("Test Case #5", function() {
        expect(longestValidParentheses("))")).toEqual(0);
    });
  });

});
