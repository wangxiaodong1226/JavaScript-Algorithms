//去重
const arr = [1,1,2,2];
// const arr2 = new Set(arr);//先集合去重
const arr2 = [...new Set(arr)];//集合添加到数组中
console.log(arr2);//[1,2]

//判断元素是否在集合中
const set= new Set(arr);
const has = set.has(1);
console.log(has);//true

//求交集
const set2 = new Set([2,3]);
//运用数组方法求交集
const set3 = new Set([...set].filter(item=>set2.has(item)));
console.log(set3);