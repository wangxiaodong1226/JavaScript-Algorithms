/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<2) return 1;
    // const dp =[1,1];//记录第n阶有多少种方法
    let dp0 =1;
    let dp1 =1;
    for(let i=2;i<=n;i++){
        // dp[i] = dp[i-1]+dp[i-2];
        const temp = dp0;
        dp0 = dp1;
        dp1 = dp1+temp;
    }
    // return dp[n];
    return dp1;
};
/**思路
 * 爬到n阶可以在第n-1阶爬1个台阶，或者在第n-2个台阶爬2个台阶
 * F(n) = F(n-1)+F(n-2) //F有多少中方法数量
 * 使用动态规划
 * 步骤
 * 定义子问题：F(n) = F(n-1)+F(n-2);
 * 反复执行:从2循环到n，执行上述代码
 * 
 * 时间复杂度 O(n)
 *空间复杂度 新建了一个数组 会线性增加 O(n)
 空间复杂度O(1)
 */
// @lc code=end

