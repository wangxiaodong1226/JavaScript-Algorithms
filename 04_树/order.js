const bt = require('./二叉树');

//递归版 太简单

/**思路
 * 先序遍历算法口诀
    1.访问根节点
    2.对根节点的左子树进行先序遍历
    3.对根节点的右子树进行先序遍历
 */
// const preorder = (root) => {
//     if(!root) {return;} //避免节点为空
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
// }

// preorder(bt);//1245367

/**思路
 * 1.对根节点的左子树进行中序遍历
 * 2.访问根节点
 * 3.对根节点右子树进行中序遍历
 */

// const inorder = (root)=>{
//    if(!root) {return ;}
//    inorder(root.left);
//    console.log(root.val);
//    inorder(root.right);
// }
// inorder(bt);

/**思路
 * 1.对根节点的左子树进行后序遍历
 * 2.对根节点右子树进行后序遍历
 * 3.访问根节点
 */

const postorder = (root) =>{
   if(!root){return;}
   postorder(root.left);
   postorder(root.right);
   console.log(root.val);
}
postorder(bt);//4526731