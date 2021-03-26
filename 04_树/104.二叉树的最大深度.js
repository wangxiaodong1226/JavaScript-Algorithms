/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    let res = 0;
    const dfs = (n,l)=>{ //l-level层级
        if(!n){return;}
        // console.log(n.val,l);
        if(!n.left && !n.right){//叶子节点
            res = Math.max(res,l);
        }
        dfs(n.left,l+1);
        dfs(n.right,l+1);
    }
    dfs(root,1);
    return res;
};

/**思路
 * 求最大深度，考虑使用深度优先遍历
 * 在深度优先遍历过程中，记录每个节点所在的层级，找出最大的层级即可；
 * 
 * 步骤：
 * 1.新建一个变量，记录最大深度；
 * 2.深度优先遍历整棵树，并记录每个节点的层级，同时不断刷新最大深度这个变量。
 * 3.遍历结束返回最大深度变量；
 * 
 * 时间复杂度(循环多少次) 每个节点都遍历到了，代码循环n次 O(n)
 * 空间复杂度 最好O(logn) 最坏O(n)
 */
// @lc code=end

