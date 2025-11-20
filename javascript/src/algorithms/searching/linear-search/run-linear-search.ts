import promptSync from 'prompt-sync'
import { linearSearch } from "./linear-search"

const prompt = promptSync()
const array = [0, 5, 6, 9, 34, 67, 54, 66, 89, 10, 15, 33, 22, 11, 98, 100]

function runLinearSearch() {

    console.log("Array: ", array)

    const input = prompt("\nEnter the value you want to search for.")
    const value = Number(input)

    if (isNaN(value) || value < 0) {
        console.log("Please, Enther a valid value")
        return
    }

    const index = linearSearch(array, value)
    if (index === -1) {
        console.log("Value not found in array")
    } else {
        console.log(`Index: ${index} Value: ${array[index]}`)
    }

}

runLinearSearch()

