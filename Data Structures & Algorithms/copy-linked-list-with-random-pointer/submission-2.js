// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let p = head;
        let newHead = new Node(0);
        let current = newHead;
        let bag = new Map();
        let newNode;

        while (p !== null){
            if (bag.has(p)){
                current.next = bag.get(p);
            }
            else {
                newNode = new Node(p.val)
                bag.set(p, newNode);
                current.next = newNode;
            }

            current = current.next;

            if (p.random !== null){
                if (bag.has(p.random)){
                    current.random = bag.get(p.random);
                }
                else {
                    newNode = new Node(p.random.val);
                    bag.set(p.random, newNode);
                    current.random = newNode;
                }
            }
            else {
                current.random = null;
            }

            p = p.next;
        }

        current.next = null;
        return newHead.next;
    }
}
