// Task 1 & 2:
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    addLast(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode
    }
    removeLast(){
        if(!this.head){
            return
        }
        let curr = this.head
        while(curr.next.next){
            curr = curr.next
        }
        curr.next = null
    }
    printList(){
        let curr = this.head
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}
const linkedlist = new LinkedList()
linkedlist.addLast(3)
linkedlist.addLast(5)
linkedlist.addLast(9)
linkedlist.removeLast()
linkedlist.printList()

// Task 3 & 4:
class Stack {
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()) return `Stack is Empty`
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()) return `Stack is Empty`
        return this.stack[this.stack.length - 1]
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.stack.length === 0
    }
}
const stack = new Stack()
stack.push('h')
stack.push('e')
stack.push('l')
stack.push('l')
stack.push('o')
let revVal = ""
for(let i = stack.size()-1; i >= 0; i--){
    revVal += stack.pop()
}
console.log(revVal);

// Task 5 & 6:
class Queue {
    constructor(){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if(this.isEmpty()) return `Queue is Empty`
        return this.queue.shift()
    }
    front(){
        if(this.isEmpty()) return `Queue is Empty`
        return this.queue[0]
    }
    size(){
        return this.queue.length
    }
    isEmpty(){
        return this.queue.length === 0
    }
}
const printerQueue = new Queue();
printerQueue.enqueue('Job 1');
printerQueue.enqueue('Job 2');
printerQueue.enqueue('Job 3');
while (!printerQueue.isEmpty()) {
    const job = printerQueue.dequeue();
    console.log(`Processing ${job}`);
}

// Task 7 & 8:
class TreeNode {
    constructor(value){
        this.value = value
        this.children = []
    }
}
class BinaryTree {
    constructor(){
        this.root = null
    }
    addNode(value){
        const newNode = new TreeNode(value)
        if(!this.root){
            this.root = newNode
            return
        }
        const queue = new Queue()
        queue.enqueue(this.root)
        while(!queue.isEmpty()){
            const node = queue.dequeue()
            if(node.children.length < 2){
                node.children.push(newNode)
                return
            }
            for(const child of node.children){
                queue.enqueue(child)
            }
        }
    }
    printTree(){
        if(!this.root) return
        const queue = new Queue()
        queue.enqueue(this.root)
        while(!queue.isEmpty()){
            const node = queue.dequeue()
            console.log(node.value)
            for(const child of node.children){
                queue.enqueue(child)
            }
        }
    }
}
const binaryTree = new BinaryTree()
binaryTree.addNode(1)
binaryTree.addNode(2)
binaryTree.addNode(3)
binaryTree.addNode(4)
binaryTree.addNode(5)
binaryTree.addNode(6)
binaryTree.printTree()