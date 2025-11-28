import promptSync from 'prompt-sync'
import { Array } from '../array'

const prompt = promptSync()

export function extractArray() {
    let left = false
    let newArray = new Array()
    while (!left) {
        console.clear()
        const input = prompt("1. Adicionar Item na nova array para concatenar \n2. finalizar\n ")

        switch (input) {
            case '1':
                const value = Number(prompt("Digite o valor que deseja adicionar: "))
                newArray.push(value)
                break;
            case '2':
                prompt("Finalizado com sucesso")
                left = true
                break;
        }
    }
    return newArray
}
