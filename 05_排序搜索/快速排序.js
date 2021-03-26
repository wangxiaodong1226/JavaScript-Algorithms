/**思路
 * 分区:
 * 从数组中任意选择一个基准，所有比基准小的元素放在基准前面，
 * 比基准大的元素放在基准的后面；
 * 
 * 递归；
 * 递归地对基准前后的子数组进行分区
 * 
 * 递归时间复杂度 O(logn) 
 * 分区操作的时间复杂度 O(n)
 * 时间复杂度 O(nlogn)
 */

Array.prototype.quickSort = function(){
  const rec = (arr)=>{
    if(arr.length <= 1){return arr;}
    const left = [];
    const right = [];
    const mid = arr[0];
    //分区
    for(let i =1;i<arr.length;i++){
        if(arr[i]<mid){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...rec(left),mid,...rec(right)];//...用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
  }
   const res = rec(this);
   res.forEach((n,i)=>{this[i] = n});//拷贝一下 有序数组逐步拷贝到this上；
}


const arr = [5,4,3,3,2,1];
arr.quickSort();
console.log(arr);