// const reverseArr= function(arr){

//     let head = 0;
//     let tail = arr.length-1;
//     while(head<tail){
//         //交换头尾两个指针指向的值
//         //1.传统-中间变量
//         let temp =arr[head];
//         arr[head] =arr[tail];
//         arr[tail] = temp;
//         head++;
//         tail--; 
//     }
//     return arr;
// }

// const arr = [1,2,3,4,5];

// console.log(reverseArr(arr));//[ 5, 4, 3, 2, 1 ]
// //这种方式会修改原数组
// console.log(arr);

//反转数组
const reverseArr= function(arr){
    
    let head = 0;
    let tail = arr.length-1;
    while(head<tail){
        //交换头尾两个指针指向的值
        //1.传统-中间变量
        // let temp =arr[head];
        // arr[head] =arr[tail];
        // arr[tail] = temp;

        //2.解构赋值
        [arr[head],arr[tail]] = [arr[tail],arr[head]];
        head++;
        tail--; 
    }
    return arr;
}

const arr = [1,2,3,4,5];

console.log(reverseArr(arr));//[ 5, 4, 3, 2, 1 ]
//这种方式会修改原数组
console.log(arr);