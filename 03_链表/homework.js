/**描述
 * 编写一个 instanceOf 方法，
 * 可以判断一个变量是否是另一个变量的实例
 */

function instanceOf(a,b){
    let p = a;
    while(p){
        if(p.__proto__ && p.__proto__.constructor === b){
            return true;
        }
        p = p.__proto__;
    }
    return false;
}

/**描述
 * 请判断一个链表是否为回文链表 234
 */
