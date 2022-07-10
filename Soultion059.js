// Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

const Node = (data, next = null) => ({ data, next });
const append = (l1, l2) => l1 ? new Node(l1.data, append(l1.next, l2)) : l2;
