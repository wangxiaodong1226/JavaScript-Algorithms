/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

/**
 * 思路
 * 无法获取被删除节点的上一节点
 * 将被删除节点准移到下个节点
 * 
 * 将被删除节点的值转为下个节点的值
 * 删除下个节点
 * 
 * 时间复杂度  1
 */
// @lc code=end

