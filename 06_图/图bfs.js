/**思路
 * 广度优先遍历: 先访问离根节点最近的节点
1.新建一个队列，把根节点入队
2.把对头出队并访问
3.把对头的没访问过的相邻接点入队；
 */

const graph = require('./graph');

const visited = new Set();
visited.add(2);
const q = [2];
while(q.length){
    const n = q.shift();
    console.log(n);
   
    graph[n].forEach(c=>{
       if(!visited.has(c)){
          q.push(c);
          visited.add(n);
       }
    })
}