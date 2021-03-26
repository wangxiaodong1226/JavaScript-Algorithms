/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // return [...new Set(nums1)].filter(n=>new Set(nums2).has(n));
    return [...new Set(nums1)].filter(n=>nums2.includes(n));


};
/**思路
 * 求交集且无序唯一
 * 使用集合
 * 步骤
 * 用集合对nums1去重
 * 遍历nums1,筛选出nums2也包含的值；
 * 
 */
// @lc code=end

