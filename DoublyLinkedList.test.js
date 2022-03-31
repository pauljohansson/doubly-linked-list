const DoublyLinkedList = require("./DoublyLinkedList");

describe("#prependElement", () => {
  describe("test 1: with an empty list", () => {
    test("it adds the element to the beginning of the list", () => {
      const dll = new DoublyLinkedList();
      dll.prependElement(10);

      expect(dll.head.value).toBe(10);
      expect(dll.length).toBe(1);
    });
  });
});
