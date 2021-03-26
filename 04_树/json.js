/**描述
 * 遍历JSON的所有节点值
 */

const json = {
    a:{b:{c:1}},
    d:[1,2],
}

//深度优先遍历访问节点值
const dfs = (n)=>{
    console.log(n);
    Object.keys(n).forEach(k=>{//拿到孩子节点遍历
        dfs(n[k]);
    })
}
dfs(json);