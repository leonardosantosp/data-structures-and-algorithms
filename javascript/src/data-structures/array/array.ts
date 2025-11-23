import { linearSearch } from "../../algorithms/searching/linear-search/linear-search"

import { fisherYates } from "../../algorithms/shuffle/fisher-yates"

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
        console.log(index)
        if (index < 0 || isNaN(index) || index > this.length) {
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
        this.length = 0
    }

    contains(value: number): boolean {
        const index = linearSearch(this.toNativeArray(), value)
        return index !== -1
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
        let right = this.length - 1
        while (left != right) {
            const aux = this.array[left]
            this.array[left] = this.array[right]
            this.array[right] = aux
            right--;
            left++;
        }
    }

    slice(start: number, end: number): number[] {
        if (isNaN(start) || isNaN(end) || start < 0 || end < 0) {
            throw new Error("Enter with a valid number")
        }
        let sliceArray: number[] = []
        for (let i = start; i < end; i++) {
            sliceArray[i] = this.array[start + i]
        }
        return sliceArray
    }

    concat(newArray: number[]) {
        for (let i = 0; i < newArray.length; i++) {
            this.array[this.length + i] = newArray[i]
        }
        this.length += newArray.length
        return this.array
    }

    unique() {
        const seen = new Set<number>
        const uniqueArray = new Array(this.length)
        for (let i = 0; i < this.length; i++) {
            const value = this.array[i]
            if (!seen.has(value)) {
                seen.add(value)
                uniqueArray.push(value)
            }
        }

        return uniqueArray
    }

    shuffle() {
        return fisherYates(this.toNativeArray())
    }

    map(callback: (value: number, index: number) => number) {

        const result = new Array(this.length)
        for (let i = 0; i < this.length; i++) {
            const newValue = callback(this.array[i], i)
            result.push(newValue)
        }

        return result
    }

    filter(callback: (value: number, index: number) => boolean) {
        const result = new Array()

        for (let i = 0; i < this.length; i++) {
            const isFilter = callback(this.array[i], i)
            if (isFilter) {
                result.push(this.array[i])
            }
        }

        return result
    }

    foreach(callback: (value: number, index: number) => number) {
        for (let i = 0; i < this.length; i++) {
            callback(this.array[i], i)
        }
    }

    reduce<T>(callback: (acc: T, value, index) => T, initalValue: T): T {
        let acumulator = initalValue
        for (let i = 0; i < this.length; i++) {
            acumulator = callback(acumulator, this.array[i], i)
        }

        return acumulator
    }

}
