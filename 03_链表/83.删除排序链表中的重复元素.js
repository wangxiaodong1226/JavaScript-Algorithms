/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    let p = head;//指针指向头部
    while(p && p.next){
        if(p.val===p.next.val){
            p.next = p.next.next;
        }else{
            p = p.next;
        }
    }
    return head;
};

/**
 * 思路
 * 因为链表是有序的，所以重复元素一定相邻；
 * 遍历链表，如果发现当前元素和下个元素值相同，就删除下个元素
 * 遍历结束后，返回原链表的头部；
 * 
 * 时间复杂度 O(N) 空间O(1)
 */
// @lc code=end

