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
    const rec =(low,high)=>{
        if(low>high) return;
        const mid = Math.floor((low+high)/2);
        const res = guess(mid);
        if(res === 0){
            return mid;
        }else if(res===1){
            return rec(mid+1,high);
        }else{
            return rec(1,mid-1);
        }

    }
    return rec(1,n);
};
/**思路
 * 分:计算中间元素，分割数组
 * 解:递归地在较大或者较小子数组进行二分搜索；
 */
// @lc code=end

