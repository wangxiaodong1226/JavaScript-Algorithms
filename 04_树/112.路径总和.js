/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let res = false;
    const dfs = (n,s)=>{
        // console.log(n.val,s);
        if(!n.left && !n.right && s===targetSum){
            res = true;
        }
        if(n.left) dfs(n.left,s+n.left.val);
        if(n.right) dfs(n.right,s+n.right.val); 
    }
    dfs(root,root.val);
    return res;
};
/**思路
 * 在深度优先遍历的过程中，记录当前路径的节点值的和；
 * 在叶子节点处，判断当前路径的节点值的和是否等于目标值；
 * 步骤
 * 深度优先遍历二叉树，在叶子节点处，判断当前路径的节点值的和是否等于目标值，是就返回true;
 * 遍历结束，如果没有匹配，就返回false;
 * 
 * 时间复杂度 O(n) 空间O(n)
 */
// @lc code=end

