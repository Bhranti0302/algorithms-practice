/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) return head;

    // Step 1: Find length
    let length = 1;
    let curr = head;

    while (curr.next) {
        curr = curr.next;
        length++;
    }

    // Step 2: Optimize k
    k = k % length;
    if (k === 0) return head;

    // Step 3: Make circular
    curr.next = head;

    // Step 4: Find new tail
    let stepsToNewTail = length - k;
    let newTail = head;

    for (let i = 1; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }

    // Step 5: Break the circle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};