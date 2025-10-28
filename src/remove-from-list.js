const { NotImplementedError } = require("../lib/errors");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Handle empty list
  if (!l) return null;

  // Remove leading nodes with value k
  let current = l;
  while (current && current.value === k) {
    current = current.next;
  }

  // If all nodes were removed
  if (!current) return null;

  let head = current;
  let prev = current;
  current = current.next;

  // Remove nodes with value k from the rest of the list
  while (current) {
    if (current.value === k) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return head;
}

module.exports = {
  removeKFromList,
};
