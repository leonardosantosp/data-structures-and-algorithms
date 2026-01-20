export class Queue {
    private queue: number | undefined[] = []
    private total: number = 0;
    private first: number = 0;
    private last: number = 0;
    private capacity: number

    constructor(capacity: number) {
        this.capacity = capacity
    }

    enqueue(value: number) {
        if (this.isFull()) {
            console.log("Queue is full")
            return undefined;
        }
        this.queue[this.last] = value;
        this.total++
        this.last = (this.last + 1) % this.capacity
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Nothing to remove")
            return undefined;
        }
        const value = this.queue[this.first]
        this.queue[this.first] = undefined
        this.first = (this.first + 1) % this.capacity
        this.total--;
        return value
    }

    print() {
        let index = this.first
        console.log("------ queue ------")
        for (let count = 0; count < this.total; count++) {
            console.log(" ", this.queue[index])
            index = (index + 1) % this.capacity
        }
        console.log("Total: ", this.total)
        console.log("-------------------")
    }

    isFull(): boolean {
        return this.capacity === this.total
    }

    isEmpty(): boolean {
        return this.total === 0
    }

}
