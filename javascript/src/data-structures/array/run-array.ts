import promptSync from 'prompt-sync'
import { Array } from "./array"
import { extractArray } from './utils/extract-array'

const prompt = promptSync()
const array = new Array()

function runArray() {

    let left = false

    while (!left) {

        console.clear()
        console.log(`
=== ARRAY MENU ===

1. Get item by index
2. Add item
3. Remove last item
4. Show array
5. Insert at specific index
6. Remove item by index
7. Show array length
8. Check if array is empty
9. Clear array
10. Check if array contains a value
11. Find first index of value
12. Find last index of value
13. Reverse array
14. Apply slice
15. Concatenate arrays
16. Shuffle array
17. Add value to each element (map)
18. Filter items less than a value (filter)
19. Add value to each item (foreach)
20. Sum all array items (reduce)
21. Exit
`)


        const input = prompt("Choose an option: ")

        switch (input) {
            case '1':
                const indexStr = prompt("Enter the index: ")
                const index = Number(indexStr)
                console.log("Value found:", array.getItem(index))
                prompt("Press ENTER to continue...")
                break

            case '2':
                const valueStr = prompt("Enter the value: ")
                const value = Number(valueStr)
                array.push(value)
                console.log("Value added!")
                prompt("Press ENTER to continue...")
                break

            case '3':
                console.log("Last item removed! Removed item: ", array.pop())
                prompt("Press ENTER to continue...")
                break

            case '4':
                console.log("Array: ", array)
                prompt("Press ENTER to continue...")
                break

            case '5':
                const newIndex = Number(prompt("Enter the index where you want to insert: "))
                const newValue = Number(prompt("Enter the value you want to insert: "))
                array.insertAt(newIndex, newValue)
                console.log("Value inserted successfully")
                prompt("Press ENTER to continue...")
                break

            case '6':
                const indexToRemove = Number(prompt("Enter the index of the item you want to remove: "))
                array.removeAt(Number(indexToRemove))
                console.log("Item removed successfully")
                prompt("Press ENTER to continue...")
                break
            case '7':
                console.log("Array length: ", array.length)
                prompt("Press ENTER to continue...")
                break
            case '8':
                console.log("IsEmpty: ", array.isEmpty())
                prompt("Press ENTER to continue...")
                break
            case '9':
                console.log("Clearing array...")
                array.clear()
                prompt("Press ENTER to continue...")
                break
            case '10':
                const valueToVerifyContains = Number(prompt("Enter the value you want to check: "))
                console.log("Contains: ", array.contains(valueToVerifyContains))
                prompt("Press ENTER to continue...")
                break

            case '11':
                const valueToSearchFirstIndex = Number(prompt("Enter the value to search: "))
                console.log("First index found: ", array.indexOf(valueToSearchFirstIndex))
                prompt("Press ENTER to continue...")
                break
            case '12':
                const valueToSearchLastIndex = Number(prompt("Enter the value to search: "))
                console.log("Last index found: ", array.lastIndexOf(valueToSearchLastIndex))
                prompt("Press ENTER to continue...")
                break
            case '13':
                const reverseArray = array.reverse()
                console.log("Reversed array: ", reverseArray)
                prompt("Press ENTER to continue...")
                break;
            case '14':
                const firstIndex = Number(prompt("Enter the start index: "))
                const lastIndex = Number(prompt("Enter the end index: "))
                const slidecArray = array.slice(firstIndex, lastIndex)
                console.log("Slice: ", slidecArray)
                prompt("Press ENTER to continue...")
                break;
            case '15':
                console.log("Build the array you want to concatenate! \n")
                const newArray = extractArray()
                const concatedArray = array.concat(newArray)
                console.log("Concatenated Array: ", concatedArray)
                prompt("Press ENTER to continue...")
                break;
            case '16':
                console.log("New shuffled array: ", array.shuffle())
                prompt("Press ENTER to continue...")
                break;
            case '17':
                const valueToSum = Number(prompt("Enter the value you want to add: "))
                console.log("New Array: ", array.map(item => item + valueToSum))
                prompt("Press ENTER to continue...")
                break;
            case '18':
                const valueToFilter = Number(prompt("Enter the value to use as filter: "))
                console.log("Filtered result: ", array.filter(item => item < valueToFilter))
                prompt("Press ENTER to continue...")
                break;
            case '19':
                const valueToSumForEach = Number(prompt("Enter the value you want to add: "))
                array.foreach(item => item + valueToSumForEach)
                console.log("Array updated:", array)
                prompt("Press ENTER to continue...")
                break;
            case '20':

                console.log(
                    "Sum of all items: ",
                    array.reduce((acc, value) => acc + value, 0)
                )

                prompt("Press ENTER to continue...")
                break;
            case '21':
                left = true
                break

            default:
                console.log("Invalid option!")
                prompt("Press ENTER to continue...")
                break
        }
    }
}

runArray()
