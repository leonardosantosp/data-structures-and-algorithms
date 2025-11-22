# 🎲 Fisher–Yates Shuffle TypeScript Example

This code demonstrates an implementation of the **Fisher–Yates Shuffle**, a classic algorithm used to generate a **uniform random permutation** of an array.

## What is the Fisher–Yates Shuffle?

The Fisher–Yates Shuffle (also known as the **Knuth Shuffle**) is a reliable and unbiased algorithm used to shuffle an array randomly.
It iterates from the end of the array to the beginning, swapping each element with a randomly chosen index that is less than or equal to the current position.

This guarantees that **every permutation has the same probability of occurring**, making it the gold standard for random shuffling.

## Behavior

- Returns a **new shuffled array**
- **Does not mutate** the original array
- Produces a **uniform shuffle** (all outcomes equally likely)

## Complexity

| Case              | Cost                                      |
| ----------------- | ------------------------------------------ |
| Time Complexity   | **O(n)** — single pass through the array   |
| Space Complexity  | **O(n)** — because it returns a new array  |

## Project Structure

```terminal
/data-structures-and-algorithms
└── javascript/
    └── algorithms
        └── shuffling
            └── fisher-yates
                ├── fisher-yates.ts        → algorithm implementation
                └── run-fisher-yates.ts    → script to run it via terminal

## How to execute

From the project root, install dependencies:
```bash
    npm i
```

Then run the script:

```bash
    npx ts-node run-fisher-yates.ts
```
