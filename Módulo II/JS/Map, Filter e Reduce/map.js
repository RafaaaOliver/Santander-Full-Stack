/**
 * - não afeta o array original
 * - a Função Map cria um novo array 
 * - realiza as operações em ordem
 */
/**
 * sintaxe:
 * - array.map(callback, thisArg)
 * - callback(item, index, array)
 */
/**
 * Callback: função a ser executada em cada elemento
 * thisARg é opcional
 */

const array = [1, 2, 3, 4, 5]
let mapzao = array.map((result) => result * 2) // arrow

let teste = array.map(function (item) { // normal
    return item * 7
})

console.log(mapzao)
console.log(teste)

