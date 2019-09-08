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
  describe("Problem 1 - Container with Most Water", function() {
    it("Test Case #1", function() {
      expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    });

    it("Test Case #2", function() {
      expect(maxArea([9,1,10,8,10,2,5,7,7])).toEqual(56);
    });

    it("Test Case #3", function() {
      expect(maxArea([7,1,10,8,10,2,7])).toEqual(42);
    });

    it("Test Case #4", function() {
      expect(maxArea([2,2])).toEqual(2);
    });

    it("Test Case #5", function() {
      expect(maxArea([2,0])).toEqual(0);
    });
  });
});
