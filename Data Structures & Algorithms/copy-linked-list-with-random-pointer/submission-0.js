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

        while (p !== null){
            let newNode = new Node(p.val)
            
            bag.set(p, newNode);

            current.next = newNode;
            current = current.next;
            p = p.next;
        }

        current.next = null;
        newHead = newHead.next;
        current = newHead;
        p = head;

        while (p !== null){
            if (p.random === null){
                current.random = null;
            }
            else {
                current.random = bag.get(p.random);
            }

            p = p.next;
            current = current.next;
        }

        return newHead;
    }
}
