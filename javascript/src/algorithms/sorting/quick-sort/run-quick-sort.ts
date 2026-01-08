import { quickSort } from "./quick-sort";

const array = [9, 4, 3, 8, 2, 7, 0, 6, 1, 5]

function runQuickSort() {
    console.log("Sorted Array: ", quickSort(array))
}

runQuickSort()
