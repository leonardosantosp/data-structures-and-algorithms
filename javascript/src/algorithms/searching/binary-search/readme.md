# 📘 Binary Search TypeScript Example

This code demonstrates an implementation of the Binary search algorithm, following clean-code principles.

## What is binary search?

Binary Search is an efficient algorithm used to find a target value inside a sorted array.
It works by repeatedly dividing the search interval into a left and a right half until the value is found or the interval becomes empty.

## Behavior

- Returns -1 if the item is not found

- Returns the index of the item if it is found

## Complexity

| Case        | Coust                                        |
| ----------- | -------------------------------------------- |
| Best case | **O(1)** — the element is the first item             |
| Average case  | **O(log n)**                                     |
| Worst case   | **O(log n)** — the element is the last item or doesn't exist |

## Project Structure

```terminal
 /data-structures-and-algorithms
 └── javascript/
    └──algorithms
        └──searching
            └──binary-searching
                ├── binary-search.ts         → algorithm implementation
                └── run-binary-search.ts     → script to run it via terminal
```


## How to execute

From the project root, install dependencies:
```bash
    npm i
```

Then run the script:

```bash
    npx ts-node run-binary-search.ts
```
