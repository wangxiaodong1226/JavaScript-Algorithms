/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;
    return {
        val:root.val,
        left:invertTree(root.right),
        right:invertTree(root.left)

    }
};
/**思路
 * 先翻转左右子树，再将子树换个位置
 * 符合"分""解”“合”
 * 步骤
 * 分:获取左右子树
 * 解:递归地翻转左右子树
 * 合:将翻转后的左右子树换个位置放到根节点上；
 */
// @lc code=end

