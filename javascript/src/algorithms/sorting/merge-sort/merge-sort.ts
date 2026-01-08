export function mergeSort(array: number[]): number[] {

    if (array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)

    return mergeArray(mergeSort(leftArray), mergeSort(rightArray))
}

function mergeArray(left: number[], right: number[]): number[] {
    const result: number[] = []

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}
