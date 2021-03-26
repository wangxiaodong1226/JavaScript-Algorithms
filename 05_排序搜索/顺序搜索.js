/**思路
 * 遍历数组
 * 找到跟目标值相等的元素，就返回它的下标；
 * 遍历结束后，如果没有搜索到目标值，就返回-1;
 * 
 * 遍历数组是一个循环操作
 * 时间复杂度O(n)
 * 如果数组非常大 效率低下
 */

Array.prototype.sequentialSearch = function(item){
    for(let i = 0;i<this.length;i++){
        if(this[i] === item){
            return i;
        }
    }
    return -1;
}

const res = [1,2,3,4,5].sequentialSearch(3);
console.log(res);