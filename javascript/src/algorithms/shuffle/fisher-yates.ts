export function fisherYates(array: number[]) {
    const result = [...array];
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))

        const temp = result[i]
        result[i] = result[randomIndex]
        result[randomIndex] = temp
    }

    return result
}
