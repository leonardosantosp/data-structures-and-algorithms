export function quickSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array
    }
    const pivot = positionPivot(array)
    const leftArray = array.slice(0, pivot)
    const rightArray = array.slice(pivot + 1)

    return quickSort(leftArray)
        .concat(array[pivot])
        .concat(quickSort(rightArray))
}

function positionPivot(array: number[]): number {
    let pivot = array.length - 1
    let righSize = 0;
    let leftSize = 0;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[pivot] > array[i]) {
            swap(array, leftSize, i)
            leftSize++
        }
        righSize++
    }

    swap(array, leftSize, pivot)

    return leftSize
}

function swap(array: number[], firstIndex: number, secondIndex: number) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
}
