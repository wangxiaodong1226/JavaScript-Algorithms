/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head;//慢指针
    let p2 = head;//快指针
    while(p1 && p2 &&p2.next){
        p1=p1.next;
        p2=p2.next.next;
        if(p1===p2){
            return true;
        }
    }
    return false;
};

/**
 * 思路
 * 两个人在圆形操场上的起点同时起跑，速度快的人一定会超过速度慢的人一圈；
 * 用一块一慢两个指针遍历链表，如果指针能够相逢，那么链表就有圈；
 * 用一快一慢两个指针遍历链表，如果指针能够相逢，就返回true；
 * 遍历结束后，还没有相逢就返回false；
 * 
 * 时间复杂度 O(n) 空间O(1)
 */
// @lc code=end

