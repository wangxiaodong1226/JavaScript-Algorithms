/**
 * 题目
 * 使用链表指针获取JSON的节点值
 * 工作中遍历链表应用
 */

const json = {
    a:{b:{c:1}},
    d:{e:2}
}

const path = ['d','e'];

let p = json;//p指针指向json
path.forEach(k=>{
    p = p[k];
})