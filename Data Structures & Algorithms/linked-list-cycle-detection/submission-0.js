/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let bag = new Set();
        let node = head;

        while (node){
            if (bag.has(node)) return true;
            
            bag.add(node);
            node = node.next;
        }

        return false;
    }
}
