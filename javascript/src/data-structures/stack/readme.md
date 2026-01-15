# 📘 Stack (Pilha) Implementation in TypeScript

This project demonstrates an implementation of the **Stack (LIFO) data structure** in TypeScript, using a fixed-capacity array and manual control of the stack pointer. The implementation focuses on clarity and on simulating how stacks work internally in lower-level languages.

## What is a Stack?

A **stack** is a linear data structure that follows the **LIFO principle (Last In, First Out)**, meaning the last element added is the first one to be removed.

Common real-world examples include:

* Function call stacks
* Undo/redo operations
* Expression evaluation
* Backtracking algorithms

---

## Behavior & Features

### ➤ Core operations

* `push(value)` — inserts an element at the top of the stack
* `pop()` — removes and returns the element from the top
* `getTop()` — returns the current top element without removing it
* `isEmpty()` — checks if the stack is empty
* `isFull()` — checks if the stack has reached its maximum capacity
* `printStack()` — prints the current stack state

### ➤ Characteristics

* Fixed maximum capacity defined at instantiation
* Manual control of the **top pointer**
* No dynamic resizing
* Clear boundary checks for overflow and underflow

---

## Complexity

| Operation | Cost     |
| --------- | -------- |
| Push      | **O(1)** |
| Pop       | **O(1)** |
| Get Top   | **O(1)** |
| isEmpty   | **O(1)** |
| isFull    | **O(1)** |

All operations execute in constant time.

---

## Internal Behavior

### 📌 Stack Pointer

The stack uses a variable to track the top position:

```ts
private top: number = -1;
```

Each `push` increments the pointer, and each `pop` decrements it, simulating how stacks are implemented at a low level.

### 📌 Internal Storage

Elements are stored using a simple array:

```ts
private array: number[] = [];
```

The capacity is manually enforced to prevent overflow.

---

## Code Example

```ts
const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);

stack.getTop();      // 30
stack.pop();         // removes 30
stack.printStack();  // [10, 20]
```

---

## Project Structure

```terminal
/data-structures-and-algorithms
└── javascript/
    src
    └── data-structures
        └── stack
            ├── stack.ts
            └── run-stack.ts
```

---

## How to Execute

From the project root, install dependencies:

```bash
npm install
```

Then run the stack example:

```bash
npx ts-node run-stack.ts
```

---

## Educational Purpose

This implementation is intended for **learning and understanding how stacks work internally**, without relying on built-in abstractions. It emphasizes manual control, boundary validation and constant-time operations.
