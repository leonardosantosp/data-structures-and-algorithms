# 🫧 Bubble Sort TypeScript Example

This code demonstrates an implementation of the Bubble Sort algorithm, one of the most fundamental and easy-to-understand sorting algorithms.

## What is Bubble Sort?

Bubble Sort is a simple comparison-based sorting algorithm.
It works by repeatedly stepping through the array, comparing adjacent elements, and swapping them if they are in the wrong order.

This process is repeated until the array is fully sorted.
With each pass, the largest unsorted element “bubbles up” to its correct position at the end of the array.

Although easy to implement, Bubble Sort is not efficient for large datasets, making it mainly useful for educational purposes.

## Behavior

- Sorts the array in ascending order

- Can be implemented in-place

- Stops early if no swaps are made in a full pass (optimized version)

## Complexity

| Case              | Cost                                      |
| ----------------- | ------------------------------------------ |
| Best Case   | O(n) — already sorted array (optimized)   |
| Average Case  | O(n²) — random order  |
| Worst Case  | O(n²) — reverse order  |
| Space Complexity  | O(1) — in-place sorting algorithm  |

## Project Structure

```terminal
/data-structures-and-algorithms
└── javascript/
    └── algorithms
        └── sorting
            └── bubble-sort
                ├── bubble-sort.ts        → algorithm implementation
                └── run-bubble-sort.ts    → script to run it via terminal
```

## How to execute

From the project root, install dependencies:
```bash
    npm i
```

Then run the script:

```bash
    npx ts-node run-bubble-sort.ts
```
