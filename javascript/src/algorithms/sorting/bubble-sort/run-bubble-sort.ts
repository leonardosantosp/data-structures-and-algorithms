import { bubbleSort } from "./bubble-sort"

const array = [10, 3, 0, 12, 35, 1, 45, 13, 67, 87]


function runBubbleSort() {
    console.log("sorted array: ", bubbleSort(array))
}

runBubbleSort()
