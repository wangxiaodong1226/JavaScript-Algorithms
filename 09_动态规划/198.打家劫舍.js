/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0) return 0;
    // const dp = [0,nums[0]]//记录能打劫到最大金额
    let dp0 = 0;
    let dp1 = nums[0];
    for(let i=2;i<=nums.length;i++){
        // dp[i] = Math.max(dp[i-2]+nums[i-1],dp[i-1]);

        const dp2 = Math.max(dp0+nums[i-1],dp1);
        dp0 = dp1;
        dp1 = dp2;
    }
    return dp1;
    // return dp[nums.length];
};
/**思路
 * f(k) = 从前k个房屋中能偷窃到的最大数额
 * AK = 第K个房屋的钱数
 * f(k) = max(f(k-2)+AK,f(k-1))
 * 考虑使用动态规划
 * 步骤
 * 定义子问题:f(k) = max(f(k-2)+AK,f(k-1))
 * 
 * 时间复杂度O(n)
 * 新建一个dp数组 线性增长O(n)
 */
// @lc code=end

