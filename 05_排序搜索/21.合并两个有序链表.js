/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const res = new ListNode(0);//只是建一个节点，没啥意义
    let p = res;//第一个指针指向新链表
    let p1 = l1;//第二个指针指向第一个链表
    let p2 =l2;//第三个指针指向第二个链表
    while(p1 && p2){
        if(p1.val < p2.val){
            p.next = p1;
            p1 = p1.next;
        }else{
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if(p1){
        p.next = p1
    }
    if(p2){
        p.next = p2
    }
    return res.next;
};
/**思路
 * 与归并排序中的合并两个有序数组很相似；
 * 将数组替换成链表就能解此题；
 * 步骤
 * 新建一个新链表，作为返回结果；
 * 用指针遍历两个有序链表，并比较两个链表的当前节点，
 * 较小者先进入新链表，并将指针后移一步；
 * 链表遍历结束，返回新链表；
 * 
 * 时间复杂度 
 * 有个while循环体 时间复杂度O(N)
 * N-链表1+2长度之和
 * 
 * 空间复杂度O(1) 常量 并没有递增
 * 新建临时变量指针，并不是数组，矩阵，链表
 */
// @lc code=end

