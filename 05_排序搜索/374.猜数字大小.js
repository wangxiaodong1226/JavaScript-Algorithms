/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1;
    let high = n;
    while(low<=high){
        const mid = Math.floor((low+high)/2);
        const res = guess(mid);
        if(res === 0){
            return mid;
        }else if(res === 1){
            low = mid+1;
        }else{
            high = mid -1;
        }
    }
};
/**思路
 * 二分搜索
 * 调用guess函数，来判断中间元素是否是目标值；
 * 步骤
 * 从数组中间元素开始，如果中间元素正好是目标值，
 * 则搜索过程结束；
 * 如果目标值大于或小于中间元素，则在数组大于或小于
 * 中间元素的那一半中查找；
 */
// @lc code=end

