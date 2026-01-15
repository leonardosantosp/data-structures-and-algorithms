# 📘 Custom Dynamic Array in TypeScript

This project demonstrates an implementation of a **dynamic array data structure** in TypeScript, replicating the behavior of low-level arrays found in languages like C, C++ or Java — including manual capacity control, resizing, element shifting, and various utility operations.

## What is a dynamic array?

A dynamic array is a data structure that **automatically adjusts its capacity** in memory when new elements are inserted.

Unlike a native JavaScript array, this implementation manually manages:

- Internal storage using an object acting as memory
- Automatic resizing (capacity × 2)
- Element shifting for insertion and removal
- Manual implementations of utilities like `map`, `filter`, `reduce`, `unique`, etc.

It simulates how arrays work in lower-level languages.

---

## Behavior & Features

### ➤ Core operations
- `push(value)` — add element to the end
- `pop()` — remove last element
- `getItem(index)` — access element by index
- `insertAt(index, value)` — insert element shifting others
- `removeAt(index)` — remove and shift
- Automatic resizing when capacity is reached

### ➤ Query methods
- `search(value)` — uses **linear search**
- `contains(value)`
- `indexOf(value)`
- `lastIndexOf(value)`
- `isEmpty()`
- `size()`

### ➤ Utility operations
- `reverse()`
- `slice(start, end)`
- `concat(array)`
- `unique()` — returns an array with unique elements
- `shuffle()` — uses **Fisher-Yates algorithm**
- `map(callback)`
- `filter(callback)`
- `foreach(callback)`
- `reduce(callback, initialValue)`

---

## Complexity

| Operation           | Cost             |
|--------------------|------------------|
| Access (getItem)   | **O(1)**         |
| Push (amortized)   | **O(1)**         |
| Insert / Remove    | **O(n)**         |
| Search             | **O(n)**         |
| Reverse            | **O(n)**         |
| Unique             | **O(n)**         |
| Map / Filter       | **O(n)**         |
| Resize             | **O(n)** — copy on reallocation |

---

## Internal Behavior

### 📌 Memory Simulation

The structure stores elements inside:

```ts
private array: { [key: number]: number } = {}
```

This simulates low-level memory indexing.

## Project Structure

```terminal
/data-structures-and-algorithms
└── javascript/
    src
    ├── algorithms
    │
    └── data-structures
        └── array
            ├── array.ts
            └── run-array.ts

```

## How to execute

From the project root, install dependencies:
```bash
    npm i
```

Then run the script:

```bash
    npx ts-node run-array.ts
```
