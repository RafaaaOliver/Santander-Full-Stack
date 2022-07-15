/**
 * - não afeta o array original
 * - a Função Filter cria um novo array 
 */
/**
 * sintaxe:
 * - array.filter(callback, thisArg)
 * - callback(item, index, array)
 */
/**
 * Callback: função a ser executada em cada elemento
 * thisARg é opcional
 */

const frutas = ['maçã fuji', 'maça verde', 'laranja', 'abacaxi']
let newFrutas = frutas.filter((fruta) => fruta.includes('maçã'))
console.table(newFrutas)