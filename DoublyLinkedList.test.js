const DoublyLinkedList = require("./DoublyLinkedList");

describe("#prependElement", () => {
  describe("test 1: with an empty list", () => {
    test("it adds the element at the beginning of the list", () => {
      const dll = new DoublyLinkedList();
      dll.prependElement(10);

      expect(dll.head.value).toBe(10);
      expect(dll.length).toBe(1);
    });
  });
  describe("test 2: with an existing list", () => {
    test("it adds the element at the beginning of the list", () => {
      const dll = new DoublyLinkedList();
      dll.prependElement(10);
      const oldHead = dll.head;
      dll.prependElement(20);
      const newHead = dll.head;

      expect(newHead.value).toBe(20);
      expect(newHead.next).toBe(oldHead);
      expect(oldHead.previous).toBe(newHead);
      expect(dll.length).toBe(2);
    });
  });
});
