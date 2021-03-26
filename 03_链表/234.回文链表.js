/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //创建一个数组储存值
    const arr = [];
    //遍历链表将值放入数组中；
    let p =head;
    while(p){
        arr.push(p.val);
        p = p.next;
    }
    //双指针判断是否为回文数
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        if(arr[start]!==arr[end]) return false;
        start++;
        end--;
    }
    return true;
};
// @lc code=end

