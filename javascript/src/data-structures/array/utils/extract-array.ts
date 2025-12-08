import promptSync from 'prompt-sync'
import { DynamicArray } from '../array'

const prompt = promptSync()

export function extractArray() {
    let left = false
    let newArray = new DynamicArray()
    while (!left) {
        console.log("Build the array you want to concatenate!")
        console.log("1. Adicionar Item")
        console.log("2. Finalizar")

        const input = prompt("> ")
        switch (input) {
            case '1':
                console.clear()
                const value = Number(prompt("Digite o valor que deseja adicionar: "))
                newArray.push(value)
                break;
            case '2':
                console.log("Finalizado com sucesso")
                prompt("Pressione Enter para sair...")
                left = true
                break;
        }
    }
    return newArray
}
