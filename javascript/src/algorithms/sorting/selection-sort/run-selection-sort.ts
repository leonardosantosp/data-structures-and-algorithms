import { selectionSort } from "./selection-sort";

const array = [10, 5, 8, 21, 4, 7, 2, 6, 0]

export function runSelectionSort() {
    console.log("Sorted array: ", selectionSort(array))
}

runSelectionSort()
