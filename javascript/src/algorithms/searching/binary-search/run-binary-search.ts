import promptSync from 'prompt-sync'
import { binarySearch } from './binary-search'

const prompt = promptSync()
const array = [1, 3, 5, 9, 23, 45, 54, 67, 81, 84, 91, 100]

function runBinarySerch() {
    console.log("----------------- Binary Search -----------------")
    console.log("Array", array)

    const input = prompt("\nEnter the value you want to search for.")
    const value = Number(input)

    if (isNaN(value) || value < 0) {
        console.log("Please, Enther a valid value")
        return
    }

    const index = binarySearch(array, value)

    if (index === -1) {
        console.log("Value not found")
    } else {
        console.log(`Index: ${index} Value: ${value}`)
    }
}

runBinarySerch()
