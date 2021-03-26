/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0 ||x == 1){
        return x;
    }
    let low = 1;
    let high = x;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(mid*mid == x){
            return mid;
        }else if(mid*mid>x){
            high = mid-1;
        }else{
            low = mid+1
        }
    }
    return high;
};
// @lc code=end

