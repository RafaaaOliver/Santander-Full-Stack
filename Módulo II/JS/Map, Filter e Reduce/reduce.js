/**
 * - executa uma função em todos os elementos de um array, retornando um valor único
 */
/**
 * sintaxe:
 * - array.reduce(callbackFn, initialValue)
 */
/**
 * - Callback: função a ser executada a partir do acumulador
 * - initialValue: valor sobre o qual o retorno final irá atuar
 */
/**
 * - Accumulator/prevValue: acumulador de todas as chamadas da função de callbackFn
 * - currentValue: elemento atual sendo acessado pela função
 * - index é opcional
 * - array é opcional
 */
const callbackFn = function(accumulator, currentValue, index, array) {
    // do something
}
array.reduce(callbackFn, inicialValue)