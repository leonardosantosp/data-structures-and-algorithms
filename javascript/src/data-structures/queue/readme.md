# 📘 Queue (Fila) Implementation in TypeScript

This project demonstrates an implementation of the **Queue (FIFO) data structure** in TypeScript, using a **fixed-capacity circular array** and manual control of head and tail pointers.
The implementation focuses on clarity, performance, and on simulating how queues work internally in lower-level languages.

---

## What is a Queue?

A **queue** is a linear data structure that follows the **FIFO principle (First In, First Out)**, meaning the first element inserted is the first one to be removed.

Common real-world examples include:

- Task scheduling
- Message queues
- Print queues
- Breadth-First Search (BFS)
- Producer–consumer systems

---

## Behavior & Features

### ➤ Core operations

- `enqueue(value)` — inserts an element at the end of the queue
- `dequeue()` — removes and returns the element from the front of the queue
- `isEmpty()` — checks whether the queue is empty
- `isFull()` — checks whether the queue has reached its maximum capacity
- `print()` — prints the internal queue state

### ➤ Characteristics

- Fixed maximum capacity defined at instantiation
- Circular queue implementation (ring buffer)
- Manual control of front and rear pointers
- No dynamic resizing
- Constant-time operations
- Explicit overflow and underflow handling

---

## Complexity

| Operation | Cost     |
|----------|----------|
| Enqueue  | **O(1)** |
| Dequeue  | **O(1)** |
| isEmpty | **O(1)** |
| isFull  | **O(1)** |

All operations execute in constant time.

---

## Internal Behavior

### 📌 Circular Queue Mechanism

Instead of shifting elements after a removal, this queue uses a **circular buffer**.
When the end of the array is reached, indices wrap around using the modulo operator:

```ts
this.last = (this.last + 1) % this.capacity
this.first = (this.first + 1) % this.capacity
```

This guarantees efficient space usage and avoids unnecessary data movement.

---

### 📌 Internal State Control

```ts
private queue: (number | undefined)[] = []
private total: number = 0
private first: number = 0
private last: number = 0
private capacity: number
```

- `queue` stores the elements
- `first` points to the front element
- `last` points to the next insertion position
- `total` tracks the current number of elements
- `capacity` defines the maximum queue size

---

## Code Example

```ts
const queue = new Queue(5)

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()     // removes 10
queue.print()       // [undefined, 20, 30, undefined, undefined]
```

---

## Educational Purpose

This implementation is intended for **learning and understanding how queues work internally**, without relying on built-in abstractions.
It emphasizes manual pointer control, constant-time operations, and efficient memory usage through a circular buffer.
