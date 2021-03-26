const tree = {
    val:'a',
    children:[
        {
            val:'b',
            children:[
                {
                    val:'d',
                    children:[]
                },
                {
                    val:'e',
                    children:[]
                }
            ]
        },
        {
            val:'c',
            children:[
                {
                    val:'f',
                    children:[]
                },
                {
                    val:'g',
                    children:[]
                }
            ]
        }
    ]
};

//bfs 先访问离根节点最近的节点 新建一个队列，把根节点入队
//把队头出队并访问
//把对头的children挨个入队；
const bfs = (root) =>{
    const q = [root];
    while(q.length){
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child=>{
            q.push(child);
        })
    }
}


//dfs 访问根节点  对根节点的chldren挨个深度优先遍历
const dfs = (root)=>{
    console.log(root.val);
    root.children.forEach((child)=>{dfs(child);});
}

// dfs(tree);

//二叉树先中后序遍历
const bt = {
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:{
            val:5,
            left:null,
            right:null
        }
    },
    right:{
        val:3,
        left:{
            val:6,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}
//先序遍历
// const preorder = (root)=>{
//     if(!root) return;
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
// }

//中序遍历
// const inorder = (root)=>{
//     if(!root) return;
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
// }

// const postorder = (root)=>{
//     if(!root) return;
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.val);
// }

// preorder(bt);//1345367
// inorder(bt);//4251637
// postorder(bt);//4526731


