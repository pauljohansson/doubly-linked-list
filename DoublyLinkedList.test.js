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

describe("#appendElement", () => {
  describe("test 1: with an empty list", () => {
    test("it adds the element at the end of the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);

      expect(dll.head.value).toBe(10);
      expect(dll.length).toBe(1);
    });
  });
  describe("test 2: with an existing list", () => {
    test("it adds the element at the end of the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);

      expect(dll.head.value).toBe(10);
      expect(dll.head.next.value).toBe(20);
      expect(dll.tail.previous).toBe(dll.head);
      expect(dll.length).toBe(2);
    });
  });
});

describe("#getElementAtIndex", () => {
  describe("test 1: with index less than 0", () => {
    test("it returns null", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);

      expect(dll.getElementAtIndex(-1)).toBeNull();
    });
  });
  describe("test 2: with index greater than list length", () => {
    test("it returns null", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);

      expect(dll.getElementAtIndex(5)).toBeNull();
    });
  });
  describe("test 3: with index 0", () => {
    test("it returns the first element in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);

      expect(dll.getElementAtIndex(0)).toBe(dll.head);
    });
  });
  describe("test 4: with index in the middle", () => {
    test("it returns the element at that index", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.appendElement(40);
      dll.appendElement(50);

      expect(dll.getElementAtIndex(2)).toBe(dll.head.next.next);
    });
  });
});

describe("#getFirstElement", () => {
  describe("test 1: with an empty list", () => {
    test("it returns null", () => {
      const dll = new DoublyLinkedList();

      expect(dll.getFirstElement()).toBeNull();
    });
  });
});
