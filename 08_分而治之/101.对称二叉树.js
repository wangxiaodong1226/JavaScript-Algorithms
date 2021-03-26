/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    const isMirror = (l,r)=>{
        if(!l && !r) return true;
        if(l && r && l.val === r.val &&
             isMirror(l.left,r.right) &&
             isMirror(l.right,r.left)
        ){
            return true;
        }
        return false;
    }
    return isMirror(root.left,root.right);
};
/**思路
 * 转化为：左右子树是否镜像
 * 分解为:树1的左子树和树2的右子树是否镜像，
 * 树1的右子树和树2的左子树是否镜像；
 * 符合分解合,分而治之
 * 步骤
 * 分:获取两个树左子树右子树
 * 解:递归地判断树1的左子树和树2的右子树是否镜像，
 * 树1的右子树和树2的左子树是否镜像；
 * 合:如果上述都成立，且根节点值也相同，两个树就镜像；
 */
// @lc code=end

