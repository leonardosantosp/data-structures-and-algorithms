export function bubbleSort(array: number[]): number[] {

    const length = array.length

    for (let i = 0; i < length; i++) {
        let swaps = 0

        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                swaps++
            }
        }

        if (swaps === 0) break;
    }

    return array
}

function swap(array: number[], firstIndex: number, secondIndex: number): void {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
}

