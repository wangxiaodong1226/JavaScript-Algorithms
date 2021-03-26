/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(p && q && p.val === q.val&&
        isSameTree(p.left,q.left)&& 
        isSameTree(p.right,q.right)
    ){
        return true;
    }
    return false;
};
/**思路
 * 两个树:根节点的值相同，左子树相同，右子树相同；
 * 符合:分解合特性
 * 步骤
 * 分:获取两个树左子树右子树
 * 解：递归地判断两个树的左子树是否相同，右子树是否相同；
 * 合:将上述结果合并，如果根节点的值也相同，树就相同；
 * 
 * 时间复杂度 O(n)
 */
// @lc code=end

