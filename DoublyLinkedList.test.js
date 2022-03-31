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
  describe("test 2: with an existing list", () => {
    test("it returns the first element in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);

      expect(dll.getFirstElement()).toBe(dll.head);
    });
  });
});

describe("#getLastElement", () => {
  describe("test 1: with an empty list", () => {
    test("it returns null", () => {
      const dll = new DoublyLinkedList();

      expect(dll.getLastElement()).toBeNull();
    });
  });
  describe("test 2: with an existing list", () => {
    test("it returns the last element in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);

      expect(dll.getLastElement()).toBe(dll.tail);
    });
  });
});

describe("#getIndexOfElement", () => {
  describe("test 1: with an element that does not exist", () => {
    test("it returns -1", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);

      expect(dll.getIndexOfElement(40)).toBe(-1);
    });
  });
  describe("test 2: with an element that exists", () => {
    test("it returns its index", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);

      expect(dll.getIndexOfElement(20)).toBe(1);
    });
  });
});

describe("#insertElementAtIndex", () => {
  describe("test 1: with index less than 0", () => {
    test("it will not add anything", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.insertElementAtIndex(-1, 30);

      expect(dll.length).toBe(2);
    });
  });
  describe("test 2: with index greater than list length", () => {
    test("it will not add anything", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.insertElementAtIndex(5, 30);

      expect(dll.length).toBe(2);
    });
  });
  describe("test 3: with index 0", () => {
    test("it adds the element at the beginning of the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.insertElementAtIndex(0, 30);

      expect(dll.head.value).toBe(30);
      expect(dll.length).toBe(3);
    });
  });
  describe("test 4: with index that is equal to list length", () => {
    test("it adds the element at the end of the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.insertElementAtIndex(dll.length, 30);

      expect(dll.tail.value).toBe(30);
      expect(dll.length).toBe(3);
    });
  });
  describe("test 5: with index in the middle", () => {
    test("it adds the element at the given index", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.appendElement(40);
      dll.insertElementAtIndex(2, 50);

      expect(dll.getElementAtIndex(2).value).toBe(50);
      expect(dll.getElementAtIndex(2).previous.value).toBe(20);
      expect(dll.getElementAtIndex(2).next.value).toBe(30);
      expect(dll.length).toBe(5);
    });
  });
});

describe("#removeFirstElement", () => {
  describe("test 1: with an empty list", () => {
    test("it will not remove anything", () => {
      const dll = new DoublyLinkedList();
      dll.removeFirstElement();

      expect(dll.head).toBeNull();
      expect(dll.length).toBe(0);
    });
  });
  describe("test 2: with an existing non circular list", () => {
    test("it removes the first element in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.removeFirstElement();

      expect(dll.head.value).toBe(20);
      expect(dll.length).toBe(1);
      expect(dll.head.previous).toBeNull();
    });
  });
  describe("test 3: with an existing circular list", () => {
    test("it removes the first element in the list then reconnects head.previous with tail and tail.next with head", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.appendElement(40);
      dll.isCircular = true;
      dll.removeFirstElement();

      expect(dll.head.value).toBe(20);
      expect(dll.length).toBe(3);
      if (dll.isCircular) {
        expect(dll.head.previous.value).toBe(40);
        expect(dll.tail.next.value).toBe(20);
      }
    });
  });
});

describe("#removeLastElement", () => {
  describe("test 1: with an empty list", () => {
    test("it will not remove anything", () => {
      const dll = new DoublyLinkedList();
      dll.removeLastElement();

      expect(dll.tail).toBeNull();
      expect(dll.length).toBe(0);
    });
  });
  describe("test 2: with an existing non circular list", () => {
    test("it removes the last element in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.removeLastElement();

      expect(dll.tail.value).toBe(20);
      expect(dll.length).toBe(2);
    });
  });
  describe("test 3: with an existing circular list", () => {
    test("it removes the last element in the list then reconnects tail.next with head and head.previous with tail", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.appendElement(40);
      dll.isCircular = true;
      dll.removeLastElement();

      expect(dll.tail.value).toBe(30);
      expect(dll.length).toBe(3);
      if (dll.isCircular) {
        expect(dll.tail.next.value).toBe(10);
        expect(dll.head.previous.value).toBe(30);
      }
    });
  });
});

describe("#removeAllElements", () => {
  describe("test 1: with a list of elements", () => {
    test("it removes all elements in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.removeAllElements();

      expect(dll.head).toBeNull();
      expect(dll.tail).toBeNull();
      expect(dll.length).toBe(0);
    });
  });
});

describe("#removeElementAtIndex", () => {
  describe("test 1: with index less than 0", () => {
    test("it will not remove anything", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.removeElementAtIndex(-1);

      expect(dll.length).toBe(2);
    });
  });
  describe("test 2: with index greater than list length", () => {
    test("it will not remove anything", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.removeElementAtIndex(5);

      expect(dll.length).toBe(2);
    });
  });
  describe("test 3: with index 0", () => {
    test("it removes the first element in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.removeElementAtIndex(0);

      expect(dll.head.value).toBe(20);
      expect(dll.length).toBe(1);
    });
  });
  describe("test 4: with index that is equal to list length - 1", () => {
    test("it removes the last element in the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.removeElementAtIndex(dll.length - 1);

      expect(dll.tail.value).toBe(20);
      expect(dll.length).toBe(2);
    });
  });
  describe("test 5: with index in the middle", () => {
    test("it removes the element at the given index", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.appendElement(40);
      dll.appendElement(50);
      dll.removeElementAtIndex(2);

      expect(dll.getElementAtIndex(2).value).toBe(40);
      expect(dll.getElementAtIndex(2).previous.value).toBe(20);
      expect(dll.getElementAtIndex(2).next.value).toBe(50);
      expect(dll.length).toBe(4);
    });
  });
});

describe("#removeElement", () => {
  describe("test 1: with an element that does not exist", () => {
    test("it will not remove anything", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.removeElement(30);

      expect(dll.length).toBe(2);
    });
  });
  describe("test 2: with an element that exists", () => {
    test("it removes the element from the list", () => {
      const dll = new DoublyLinkedList();
      dll.appendElement(10);
      dll.appendElement(20);
      dll.appendElement(30);
      dll.removeElement(20);

      expect(dll.getElementAtIndex(1).value).toBe(30);
      expect(dll.length).toBe(2);
    });
  });
});
