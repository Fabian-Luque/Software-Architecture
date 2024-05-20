import { ListNode } from "./listNode.class";

function middleNode(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}