import { Stack } from "./stack";

function runStack() {
    const stack = new Stack(4)

    stack.pop()
    stack.isEmpty()
    stack.getTop()
    stack.push(10)
    stack.push(3)
    stack.getTop()
    stack.push(2)
    stack.getTop()
    stack.pop()
    stack.getTop()
    stack.isEmpty()
    stack.push(7)
    stack.push(5)
    stack.isFull()
    stack.push(1)
    stack.push(19)
    stack.printStack()

}

runStack()
