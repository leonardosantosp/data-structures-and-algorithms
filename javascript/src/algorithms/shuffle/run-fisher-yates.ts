import { fisherYates } from './fisher-yates'


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function runFisherYates() {
    console.log("----------------- Fisher Yates -----------------")
    console.log("Array", array)


    const result = fisherYates(array)

    console.log("Shuffled array: ", result)
}

runFisherYates()
