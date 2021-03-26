/**思路
 * 深度优先遍历：尽可能深的搜索图的分支
1.访问根节点
2.对根节点的没访问过的相邻节点挨个进行深度优先遍历；(避免死循环)
 */


const graph = require('./graph');

const visited = new Set();//记录哪些节点访问过了
const dfs = (n)=>{
    console.log(n);
    visited.add(n);
    graph[n].forEach(c=>{ //访问相邻接点
        if(!visited.has(c)){ //筛选没有访问过的
            dfs(c)
        }
    })
}

dfs(2); //2 0 1 3