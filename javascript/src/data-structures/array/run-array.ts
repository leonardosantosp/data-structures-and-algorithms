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
3. Remover último item
4. Listar array
5. Inserir em uma posição específica do array
6. Remover um item pelo índice
7. Retornar tamanho do array
8. Retornar se array está vazia
9. Limpar array
10. Verificar se array contém um valor
11. Retornar índice do primeiro valor encontrado
12. Retornar índice do último valor encontrado
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

            case '3':
                console.log("Último item da lista removido! Item removido: ", array.pop())
                prompt("Pressione ENTER para continuar...")
                break

            case '4':
                console.log("Array: ", array)
                prompt("Pressione ENTER para continuar...")
                break

            case '5':
                const newIndex = prompt("Digite o índice onde deseja inserir: ")
                const newValue = prompt("Digite o valor que deseja inserir: ")
                array.insertAt(newIndex, newValue)
                console.log("Valor inserido com sucesso")
                prompt("Pressione ENTER para continuar...")
                break

            case '6':
                const indexToRemove = prompt("Digite o índice do valor que deseja remover: ")
                array.removeAt(Number(indexToRemove))
                console.log("Item removido com sucesso")
                prompt("Pressione ENTER para continuar...")
                break
            case '7':
                console.log("Tamanh do array: ", array.length)
                prompt("Pressione ENTER para continuar...")
                break
            case '8':
                console.log("IsEmpty: ", array.isEmpty())
                prompt("Pressione ENTER para continuar...")
                break
            case '9':
                console.log("Limpando array...")
                array.clear()
                prompt("Pressione ENTER para continuar...")
                break
            case '10':
                const valueToVerifyContains = prompt("Digite o valor que deseja verificar: ")
                console.log("Contém: ", array.contains(Number(valueToVerifyContains)))
                prompt("Pressione ENTER para continuar...")
                break

            case '11':
                const valueToSearchFirstIndex = prompt("Digite o valor que deseja buscar: ")
                console.log("Índice encontrado: ", array.indexOf(Number(valueToSearchFirstIndex)))
                prompt("Pressione ENTER para continuar...")
                break
            case '12':
                const valueToSearchLastIndex = prompt("Digite o valor que deseja buscar: ")
                console.log("Índice encontrado: ", array.lastIndexOf(Number(valueToSearchLastIndex)))
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
