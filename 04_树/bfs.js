/**
 * 思路
 * 广度优先遍历:先访问离根节点最近的节点；
    新建一个队列，把根节点入队；
    把对头出队并访问；
    把对头的children挨个入队；
    重复第二、三步，直到队列为空；

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

    const bfs = (root)=>{
        const q = [root];//根节点入队
        while(q.length>0){//不为空的情况下
          const n = q.shift() ;//对头出队 
          console.log(n.val);//出队并访问
          n.children.forEach(child=>{//对头children挨个入队
            q.push(child);
          })
    }
    }
    bfs(tree);//abcdefg