const bt = require('./二叉树');

//非递归版 面试官容易考
//函数调用堆栈

// const preorder = (root) => {
//     if(!root) {return;} //避免节点为空
//     const stack = [root];//用栈
//     while(stack.length){//stack有值的情况下
//         const n = stack.pop();//弹出根节点的值
//         console.log(n.val);
//         if(n.right) stack.push(n.right);//栈后进先出
//         if(n.left) stack.push(n.left);
//     }
// }

// preorder(bt);//1245367



// const inorder = (root)=>{
//    if(!root) {return ;}
//    const stack = [];
//    let p = root;
//    while(stack.length || p){
//     while(p){
//         stack.push(p);
//         p = p.left;
//     }
//     const n = stack.pop();
//     console.log(n.val);
//     p = n.right;
//    }
// }
// inorder(bt); //4251637


//把先序遍历倒置过来 根右左  左右根
const postorder = (root) =>{
   if(!root){return;}
   const stack = [root]; //先序遍历的栈
   const outputStack = [];//倒置的栈
   while(stack.length){//stack有值的情况下
        const n = stack.pop();//弹出根节点的值
        outputStack.push(n)
        if(n.left) stack.push(n.left);
        if(n.right) stack.push(n.right);//栈后进先出 
    }
    while(outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
 }
postorder(bt);//4526731