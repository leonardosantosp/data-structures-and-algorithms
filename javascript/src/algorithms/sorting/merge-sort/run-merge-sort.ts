import { mergeSort } from "./merge-sort"

const arrayToSort = [10, 5, 9, 0, 8, 6, 1]

function runMergeSort() {
    console.log("\nSorted Array: ", mergeSort(arrayToSort))
}

runMergeSort()
