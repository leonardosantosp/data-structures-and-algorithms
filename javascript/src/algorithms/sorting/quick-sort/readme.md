# ⚡ Quick Sort TypeScript Example

This code demonstrates an implementation of the **Quick Sort** algorithm, a highly efficient divide-and-conquer sorting algorithm commonly used in real-world systems.

## What is Quick Sort?

Quick Sort is a **divide-and-conquer** sorting algorithm that works by selecting a **pivot element** and partitioning the array into two subarrays:

* Elements smaller than the pivot
* Elements greater than the pivot

The subarrays are then recursively sorted, and the pivot is placed in its correct final position.

Quick Sort is known for its excellent average-case performance and cache efficiency.

## Behavior

* Sorts the array in ascending order
* Uses a pivot-based partitioning strategy
* Recursively sorts subarrays around the pivot
* Can be implemented in-place or with additional arrays
* Performance depends on pivot selection

## Complexity Analysis

| Case             | Cost                                       |
| ---------------- | ------------------------------------------ |
| Best Case        | O(n log n) — balanced partitions           |
| Average Case     | O(n log n) — random input                  |
| Worst Case       | O(n²) — poor pivot choice (already sorted) |
| Space Complexity | O(log n) — recursion stack (in-place)      |

> ⚠️ The worst case can be mitigated by using randomized pivot selection or median-of-three strategies.

## Project Structure

```terminal
/data-structures-and-algorithms
└── javascript/
    └── algorithms
        └── sorting
            └── quick-sort
                ├── quick-sort.ts         → algorithm implementation
                └── run-quick-sort.ts     → script to run it via terminal
```

## How to execute

From the project root, install dependencies:

```bash
npm i
```

Then run the script:

```bash
npx ts-node run-quick-sort.ts
```
