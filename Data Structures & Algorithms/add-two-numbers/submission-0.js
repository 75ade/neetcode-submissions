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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let current = dummy;
        let newNode;
        let sum;
        let tenth = 0;

        while (l1 !== null || l2 !== null){
            if (l1 !== null && l2 !== null){
                sum = l1.val + l2.val + tenth;
            }
            else if (l1 !== null && l2 === null){
                sum = l1.val + tenth;
            }
            else if (l1 === null && l2 !== null){
                sum = l2.val + tenth;
            }

            if (sum >= 10){
                newNode = new ListNode(sum % 10);
                tenth = 1;
            }
            else {
                newNode = new ListNode(sum);
                tenth = 0;
            }

            current.next = newNode;
            current = current.next;

            if (l1 !== null && l2 !== null){
                l1 = l1.next;
                l2 = l2.next;
            }
            else if (l1 !== null && l2 === null){
                l1 = l1.next;
            }
            else if (l1 === null && l2 !== null){
                l2 = l2.next;
            }
        }

        if (tenth === 1){
            newNode = new ListNode(1);
            current.next = newNode;
            current = current.next;
        }
        
        current.next = null;
        return dummy.next;
    }
}
