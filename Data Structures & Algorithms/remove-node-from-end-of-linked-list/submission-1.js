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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (head.next === null) return null;
        
        let count = 1;
        let prev = null;
        let current = head;

        while (current.next){
            current = current.next;
            count++;
        }

        current = head;

        while (count > n){
            prev = current;
            current = current.next;
            count--;
        }

        if (prev === null){
            head = current.next;
        }
        else {
            prev.next = current.next;
        }

        return head;
    }
}
