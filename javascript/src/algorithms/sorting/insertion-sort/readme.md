# 🧩 Insertion Sort TypeScript Example

This code demonstrates an implementation of the Insertion Sort algorithm, a classic and intuitive sorting algorithm widely used for small datasets and educational purposes.

## What is Insertion Sort?

Insertion Sort is a comparison-based sorting algorithm that works the way you might sort playing cards in your hand.

It builds the final sorted array one element at a time.
At each step, the algorithm takes the next element and inserts it into its correct position among the already sorted elements on the left side of the array.

Insertion Sort is simple, efficient for small inputs, and performs very well when the array is already partially sorted.

## Behavior

- Sorts the array in ascending order

- Builds a sorted portion of the array progressively

- Works in-place (no additional data structures required)

- Efficient for small datasets or nearly sorted arrays

## Project Structure

| Case              | Cost                                      |
| ----------------- | ------------------------------------------ |
| Best Case   | O(n) — already sorted array   |
| Average Case  | O(n²) — random order  |
| Worst Case  | O(n²) — reverse order  |
| Space Complexity  | O(1) — in-place sorting algorithm  |

```terminal
/data-structures-and-algorithms
└── javascript/
    └── algorithms
        └── sorting
            └── insertion-sort
                ├── insertion-sort.ts        → algorithm implementation
                └── run-insertion-sort.ts    → script to run it via terminal
```

## How to execute

From the project root, install dependencies:
```bash
    npm i
```

Then run the script:

```bash
    npx ts-node run-insertion-sort.ts
```

