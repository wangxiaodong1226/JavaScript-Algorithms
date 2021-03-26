//顺序搜索

// Array.prototype.sequentialSearch = function(item){
//     for(let i=0;i<this.length;i++){
//         if(this[i] === item){
//             return i;
//         }
//     }
//     return -1;
// }

//二分搜索
//从中间元素开始 ，如果找到即就是中间元素，比中间小，在小的那一半数组汇总搜索；
Array.prototype.binarySearch = function(item){
    this.sort((a,b)=>{return a-b;});
    let low =0;
    let high = this.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let element = this[mid];
        if(item<element){
            high=mid-1;
        }else if(item>element){
            low = mid+1
        }else{
            return mid;
        }
    }
    return -1;
}

const res = [1,3,4,5,7].binarySearch(5);
console.log(res);