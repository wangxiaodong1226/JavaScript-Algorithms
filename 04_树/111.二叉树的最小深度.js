/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

var minDepth = function(root) {
    if(!root) {return 0;}
    const q = [[root,1]];//层级
    while(q.length){
        const [n,l] = q.shift();
        // console.log(n.val,l);
        if(!n.left && !n.right){
            return l;
        }
        if(n.left) q.push([n.left,l+1]);
        if(n.right) q.push([n.right,l+1]);
    }
};

/**思路
 * 求最小深度，考虑使用广度优先遍历
 * 在广度优先遍历过程中，遇到叶子结点，停止遍历，返回节点层级
 * 步骤
 * 广度优先遍历整棵树，并记录每个节点的层级
 * 遇到叶子节点，返回节点层级，停止遍历
 * 
 * 时间复杂度O(n) 树节点数量
 * 空间 O(n)
 */
// @lc code=end

