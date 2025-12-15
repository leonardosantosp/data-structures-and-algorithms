# 🧩 Selection Sort TypeScript Example

This code demonstrates an implementation of the Selection Sort algorithm, a simple and well-known sorting algorithm commonly used for educational purposes and algorithm analysis.

## What is Selection Sort?

Selection Sort is a comparison-based sorting algorithm that divides the array into two parts:

a sorted portion at the beginning and an unsorted portion containing the remaining elements.

At each iteration, the algorithm finds the smallest element in the unsorted portion and swaps it with the first unsorted element, expanding the sorted portion by one position.

Although it is not efficient for large datasets, Selection Sort is easy to understand and useful for learning fundamental algorithm concepts such as iteration, comparison, and swapping.

## Behavior

* Sorts the array in ascending order

* Repeatedly selects the smallest element from the unsorted portion

* Performs swaps to place elements in their correct position

* Works in-place (no additional data structures required)

* Always performs the same number of comparisons regardless of input order

## Project Structure

| Case             | Cost                              |
| ---------------- | --------------------------------- |
| Best Case        | O(n²) — array already sorted      |
| Average Case     | O(n²) — random order              |
| Worst Case       | O(n²) — reverse order             |
| Space Complexity | O(1) — in-place sorting algorithm |

```terminal
/data-structures-and-algorithms
└── javascript/
    └── algorithms
        └── sorting
            └── selection-sort
                ├── selection-sort.ts        → algorithm implementation
                └── run-selection-sort.ts    → script to run it via terminal
```

## How to execute

From the project root, install dependencies:

```bash
npm i
```

Then run the script:

```bash
npx ts-node run-selection-sort.ts
```
