import { insertionSort } from "./insertion-sort"

const arrayToSort = [1, 2, 0]
// BEST CASE
// [1, 2, 3, 4, 5]
// WORST CASE
// [5, 4, 3, 2, 1]
// MEDIUM CASE
// [1, 2, 4, 3, 5]

function runInsertionSort() {
    console.log(insertionSort(arrayToSort))
}

runInsertionSort()
