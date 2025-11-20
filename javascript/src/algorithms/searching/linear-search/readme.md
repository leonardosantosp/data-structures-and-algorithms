# 📘 Linear Search TypeScript Example

This project demonstrates an implementation of the linear search algorithm in TypeScript.

## What is linear search?

Linear search is a simple algorithm used to find an item inside an array by iterating through the list element by element and comparing each one with the target value.

## Behavior

- Returns -1 if the item is not found

- Returns the index of the item if it is found

## Complexity

| Case        | Coust                                        |
| ----------- | -------------------------------------------- |
| Best case | **O(1)** — the element is the first item             |
| Average case  | **O(n)**                                     |
| Worst case   | **O(n)** — the element is the last item or doesn't exist |

## Project Structure

```terminal
 /data-structures-and-algorithms
 └── javascript/
    └──algorithms
        └──searching
            └──linear-searching
                ├── linear-search.ts         → algorithm implementation
                └── run-linear-search.ts     → script to run it via terminal
```


## How to execute

From the project root, install dependencies:
```bash
    npm i
```

Then run the script:

```bash
    npx ts-node run-linear-search.ts
```
