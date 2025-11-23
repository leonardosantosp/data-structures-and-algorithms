import promptSync from 'prompt-sync'
import { Array } from "./array"

const prompt = promptSync()
const array = new Array()

function runArray() {

    let left = false

    while (!left) {

        console.clear()
        console.log(`
=== MENU DO ARRAY ===

1. Recuperar item por index
2. Adicionar item
21. Sair
`)

        const input = prompt("Escolha uma opção: ")

        switch (input) {
            case '1':
                const indexStr = prompt("Digite o índice: ")
                const index = Number(indexStr)
                console.log("Valor encontrado:", array.getItem(index))
                prompt("Pressione ENTER para continuar...")
                break

            case '2':
                const valueStr = prompt("Digite o valor: ")
                const value = Number(valueStr)
                array.push(value)
                console.log("Valor adicionado!")
                prompt("Pressione ENTER para continuar...")
                break

            case '21':
                left = true
                break

            default:
                console.log("Opção inválida!")
                prompt("Pressione ENTER para continuar...")
                break
        }
    }
}

runArray()
