const { ListNode } = require("../extensions/list-node.js");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    // Convert ListNode chain to plain objects for the test
    if (!this.head) return null;

    let current = this.head;
    let result = null;
    let currentResult = null;

    while (current) {
      const node = {
        value: current.value,
        next: null,
      };

      if (!result) {
        result = node;
        currentResult = node;
      } else {
        currentResult.next = node;
        currentResult = node;
      }

      current = current.next;
    }

    return result;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined; // Changed back to undefined to match test expectations
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue,
};
