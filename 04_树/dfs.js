/** 
 * 思路
 * 深度优先遍历:尽可能深的搜索树的分支；
    算法口诀:
    1.访问根节点
    2.对根节点的children挨个进行深度优先遍历；

    时间复杂度 O(n)
 */
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

const dfs = (root)=>{
    console.log(root.val);
    root.children.forEach((child)=>{dfs(child)});
}
dfs(tree);//abdecfg