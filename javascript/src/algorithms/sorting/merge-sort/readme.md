# 🧩 Merge Sort TypeScript Example

This code demonstrates an implementation of the **Merge Sort** algorithm, a classic and efficient divide-and-conquer sorting algorithm widely used in practice and computer science education.

## What is Merge Sort?

Merge Sort is a **divide-and-conquer** sorting algorithm.

It works by:

1. Dividing the array into two halves
2. Recursively sorting each half
3. Merging the two sorted halves into a single sorted array

Merge Sort guarantees good performance regardless of the input order and is especially suitable for large datasets.

## Behavior

* Sorts the array in ascending order
* Uses the divide-and-conquer strategy
* Recursively splits the array until subarrays of size 1
* Merges sorted subarrays to produce the final sorted result
* **Not in-place** (requires additional memory)

## Complexity Analysis

| Case             | Cost                            |
| ---------------- | ------------------------------- |
| Best Case        | O(n log n) — any input order    |
| Average Case     | O(n log n) — any input order    |
| Worst Case       | O(n log n) — any input order    |
| Space Complexity | O(n) — auxiliary array required |

## Project Structure

```terminal
/data-structures-and-algorithms
└── javascript/
    └── algorithms
        └── sorting
            └── merge-sort
                ├── merge-sort.ts         → algorithm implementation
                └── run-merge-sort.ts     → script to run it via terminal
```

## How to execute

From the project root, install dependencies:

```bash
npm i
```

Then run the script:

```bash
npx ts-node run-merge-sort.ts
```
