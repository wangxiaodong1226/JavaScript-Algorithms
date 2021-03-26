//冒泡 第一个比第二个大 交换他们一轮下来最后一个最大
//时间复杂度 O(N^2)
Array.prototype.bubbleSort = function(){
    for(let i=0;i<this.length;i++){
        for(let j=0;j<this.length-i-1;j++){
            if(this[j]>this[j+1]){
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp
            }
        }
    }
}

//选择排序 最小的放第一位 第二小放第二位 执行两轮
//时间复杂度 O(N^2)
Array.prototype.selectionSort = function(){
   for(let i = 0;i<this.length-1;i++){
    let minIndex = i;
    for(let j = i;j<this.length;j++){
        if(this[j]<this[minIndex]){
            minIndex = j
        }
    }
    if(minIndex!==i){
        let temp =this[i];
        this[i] = this[minIndex];
        this[minIndex] = temp;
    }
   }
}

//插入排序 从第二个数开始往前比 比它大就往后排
//时间复杂度 两个嵌套循环 O(N^2)
Array.prototype.insertionSort = function(){
    for(let i=1;i<this.length;i++){
        let temp = this[i];
        let j = i;
       while(j>0){
        if(this[j-1]>temp){
            this[j] = this[j-1];
        }else{
            break;
        }
        j-=1;
       }
       this[j] = temp;
    }
}


//归并排序 数组分成两半 再递归地分成两半
//新建一个新数组 存储排序后的数组 比较两个数组的头部 较小者出队插入数组
//时间复杂度 分每次都把数组劈成两半O(logN) 合O(N) 总O(nlogN)
Array.prototype.mergeSort = function(){
    const rec = (arr)=>{
        if(arr.length === 1) return arr;
        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid,arr.length);

        let orderLeft = rec(left);
        let orderRight = rec(right);

        let res = [];
        while(orderLeft.length || orderRight.length){
            if(orderLeft.length && orderRight.length){
                res.push(orderLeft[0]<orderRight[0]?orderLeft.shift():orderRight.shift());
            }else if(orderLeft.length){
                res.push(orderLeft.shift());
            }else{
                res.push(orderRight.shift());
            }
        }
        return res;
    }
    let res = rec(this);
    res.forEach((n,i)=>{this[i] = n;})
}

//快速排序 找一个基准 所有比基准小的排在前面 比基准大的排在后面；
//递归地对前后的子数组进行分区
//时间复杂度 递归时间复杂度O(logN) 分区时间复杂度O(N) 总O(nlogN)
Array.prototype.quickSort = function(){
    const rec= (arr)=>{
        if(arr.length<=1){return arr;}
        let left = [];
        let right = [];
        let mid = arr[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i]<mid){
                left.push(arr[i]);
            }else if(arr[i]>mid){
                right.push(arr[i]);
            }
        }
        return [...rec(left),mid,...rec(right)];//取出参数对象中所有可遍历属性，放到当前拷贝对象里
    }
    const res = rec(this);
    res.forEach((n,i)=>{this[i] = n;})
}

let arr = [2,4,1,5,7];
arr.quickSort();
console.log(arr);