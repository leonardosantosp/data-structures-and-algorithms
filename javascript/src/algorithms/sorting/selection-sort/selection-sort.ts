export function selectionSort(array: number[]) {
    const sortedArray = [...array]

    for (let i = 0; i < sortedArray.length; i++) {
        let minIndex = i

        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            swap(sortedArray, i, minIndex)
        }
    }

    return sortedArray
}

function swap(array: number[], firstIndex: number, secondIndex: number) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
}
