import { Queue } from "./queue"

function runQueue() {
    const queue = new Queue(4)

    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    queue.enqueue(6)
    queue.print()
    queue.dequeue()
    queue.enqueue(6)
    queue.print()
    queue.enqueue(7)
}

runQueue()
