//////Container With Most Water//////
function maxArea(height) {
    let left = 0
    let right = height.length
    let x = right;
    let ans = 0
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] * x > ans) {
                ans = height[left] * x
            }
            left++
        } else {
            if (height[right] * x > ans) {
                ans = height[right] * x
            }
            right--
        }
        x--
    }
    return ans
};