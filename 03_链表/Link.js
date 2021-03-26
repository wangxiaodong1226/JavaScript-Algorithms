//js 模拟创建单向链表
//创建链表节点
//1.值 2.下一个节点的地址

function LinkedNode(value=0,next=null){
    this.value = value;
    this.next = next;
}

// console.log(new LinkedNode(1));//LinkedNode { value: 1, next: null }

// const linkedList = new LinkedNode(1);

// linkedList.next = new LinkedNode(2);
// console.log(linkedList);//LinkedNode { value: 1, next: LinkedNode { value: 2, next: null } }

//单向链表
//head-->头 tail-->尾
class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //往链表中添加节点
    //push unshift
    //从头添
    insert(node){
        //把新创建的节点的next指向原来的head
        node.next = this.head;
        //更新head
        this.head = node;
        this.length++
    }

    //根据值查找 节点
    find(val){
        //有头head 有尾 next=null 遍历链表
        let node = this.head;
        while(node !=null && node.value !=val){
            //更新头
            node = node.next;
        }
        return node;
    }

    //根据值查找前一个节点
    //findPrev(val){}
    //删除 根据值删除
    //不能删除尾节点
    //思考 如何删除尾节点
    delete(val){
        let node = this.find(val);
        if(node.next){
            node.value = node.next.value;
            node.next = node.next.next;
        }
        this.length--;
    }
}

let linkedList = new LinkedList();
for(let i = 5;i>=1;i--){
    linkedList.insert(new LinkedNode(i));
}

console.log(linkedList.delete(2));
console.log(linkedList.delete(5));
console.log(linkedList);
console.log(linkedList.find(3));



