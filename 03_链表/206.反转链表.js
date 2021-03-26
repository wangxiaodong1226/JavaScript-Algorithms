/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // console.log(head);
    let start = head;
    let end = null;
    while(start!=null){
        let nextTemp = start.next;
        start.next = end;
        end = start;
        start = nextTemp;
    }
    return end;
};
/** 
 * 1.定义头结点，尾节点，尾节点指向空 1->2->3->4->5->null
 * 2.当头结点存在时，找一个临时变量存储**头的下一个**
 * 3.让头的下一个指向空null  ......1->null
 * 4.定义end指向头 ......1(end)->null
 * 5.遍历start=头的下一下2  2的下一个指向end ......2->1(end)->null
 * ...
 * ...
 * 当start=5时，5.next->4  end=5截止
 */
// @lc code=end

