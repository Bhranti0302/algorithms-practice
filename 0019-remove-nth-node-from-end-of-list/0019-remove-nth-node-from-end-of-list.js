/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let curr = head;

    // Step 1: count length
    while (curr !== null) {
        length++;
        curr = curr.next;
    }

    // If removing head
    if (length === n) {
        return head.next;
    }

    // Step 2: go to (length - n - 1)
    curr = head;
    for (let i = 1; i < length - n; i++) {
        curr = curr.next;
    }

    // Step 3: remove node
    curr.next = curr.next.next;

    return head;
};