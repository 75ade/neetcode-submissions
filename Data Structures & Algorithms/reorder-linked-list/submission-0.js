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
     * @return {void}
     */
    reorderList(head) {
        if (head.next === null || head.next.next === null) return;

        // Find the middle node first
        let slow = head;
        let fast = head;
        let middle;

        while (fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        middle = slow;

        // Reverse direction of the remaining nodes after the middle node
        let prev = null;
        let current = slow;
        let temp;
        
        while (current){
            temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        // Set slow pointer to the last node after reversing
        // Set fast pointer to the first node = head
        slow = prev;
        fast = head;

        while (slow !== middle){
            temp = slow.next;
            slow.next = fast.next;
            fast.next = slow;
            fast = fast.next.next;
            slow = temp;
        }

        return head;
    }
}
