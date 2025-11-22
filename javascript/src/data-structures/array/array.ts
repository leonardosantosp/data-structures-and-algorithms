import { linearSearch } from "src/algorithms/searching/linear-search/linear-search"

export class Array {
    private array: { [key: number]: number } = {}
    public capacity: number
    public length: number = 0

    constructor(initialCapacity = 4) {
        this.capacity = initialCapacity
    }

    private toNativeArray(): number[] {
        const result: number[] = []

        for (let i = 0; i < this.length; i++) {
            result[i] = this.array[i]
        }

        return result
    }

    private resize() {
        this.capacity *= 2

        // Simulating memory realocation
        const newArray: { [key: number]: number } = {}
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i]
        }

        this.array = newArray
    }

    getItem(index: number): number {
        if (index < 0 || index > this.length) {
            throw new Error("Invalid index")
        }
        return this.array[index]
    }

    push(value: number): number {

        if (this.length === this.capacity) {
            this.resize()
        }
        this.array[this.length] = value
        this.length++

        return this.length
    }

    pop(): number | undefined {
        if (this.length === 0) return undefined
        const value = this.array[this.length - 1]
        delete this.array[this.length - 1]
        this.length--
        return value
    }

    insertAt(index: number, value: number) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds")
        }

        if (this.length === this.capacity) {
            this.resize()
        }

        for (let i = this.length; i > index; i--) {
            this.array[i] = this.array[i - 1]
        }
        this.array[index] = value
        this.length++
    }

    removeAt(index: number) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds")
        }

        for (let i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1]
        }
        delete this.array[this.length]
        this.length--
    }

    search(value: number) {
        return linearSearch(this.toNativeArray(), value)
    }

    size(): number {
        return this.length
    }

    isEmpty(): boolean {
        return this.length === 0
    }

    clear() {
        for (let i = 0; i < this.length; i++) {
            delete this.array[i]
        }
        length = 0
    }

    contains(value: number): boolean {
        const index = linearSearch(this.toNativeArray(), value)
        return index ? true : false
    }

    indexOf(value: number): number {
        const index = linearSearch(this.toNativeArray(), value)
        return index
    }

    lastIndexOf(value: number): number {
        if (isNaN(value) || value < 0) {
            throw new Error("Invalid value")
        }
        for (let i = this.length - 1; i >= 0; i--) {
            if (this.array[i] === value) {
                return i
            }
        }

        return -1
    }

    reverse() {
        let left = 0
        let right = length - 1
        while (left != right) {
            const aux = this.array[left]
            this.array[left] = this.array[right]
            this.array[right] = aux
            right--;
            left++;
        }
    }

    slice(start: number, end: number) {
        if (isNaN(start) || isNaN(end) || start < 0 || end < 0) {
            throw new Error("Enter with a valid number")
        }
        let sliceArray: number[] = []
        for (let i = 0; i < end; i++) {
            sliceArray[i] = this.array[start + i]
        }
    }

    // TODO: map(callback)

    // TODO: filter(callback)

    // TODO: reduce(callback, initialValue)

    // TODO: forEach(callback)

    // TODO: slice(start,end)

    // TODO: concat(otherArray)

    // TODO: unique()

    // TODO: shuffle()

}
