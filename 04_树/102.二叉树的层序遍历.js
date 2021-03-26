/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){return [];}
    const q = [[root,0]];//把队列里的元素改成数组，记录层级
    const res = [];
    while(q.length){
        const [n,level] = q.shift();
        // console.log(n.val,level);
        if(!res[level]){
            res.push([n.val]);
        }else{
            res[level].push(n.val);
        }
        if(n.left) q.push([n.left,level+1]);
        if(n.right) q.push([n.right,level+1]);
    }
    return res;
};
/**思路
 * 层序遍历就是广度优先遍历
 * 不过在遍历时候需要记录当前节点所处的层级，方便将其添加到不同的数组中；
 * 步骤一
 * 广度优先遍历二叉树
 * 遍历过程中，记录每个节点的层级，并将其添加到不同的数组中；
 */
// @lc code=end

