export class Stack {
    private capacity: number;
    private top: number = -1;
    private array: number[] = [];

    constructor(c: number) {
        this.capacity = c;
    }

    public push(value: number): void {
        if (this.isFull()) {
            console.log("Max size reached")
            return undefined;
        }
        this.top++;
        this.array[this.top] = value
    }

    public pop(): number | undefined {
        if (this.isEmpty()) {
            console.log("Nothing to pop")
            return undefined;
        }
        const removedValue = this.array[this.top];
        this.top--;
        return removedValue
    }

    public isFull(): boolean {
        if (this.top + 1 >= this.capacity) {
            return true
        } else {
            return false;
        }
    }

    public isEmpty(): boolean {
        if (this.top === -1) {
            return true
        } else {
            return false;
        }
    }

    public getTop(): number {
        console.log("Top: ", this.array[this.top])
        return this.array[this.top];
    }

    public printStack(): void {
        console.log("Stack: ", this.array)
    }


}
