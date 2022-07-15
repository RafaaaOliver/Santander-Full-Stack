let lista = [1, 5, 7, 9, 'oi', 152]
const param = 7

function recebeArray(arr, n) {
    try {
        if(!(arr instanceof Object)) throw new TypeError('A listá não é do tipo objeto!')
        if(arr.length != n) throw new RangeError('O tamanho da lista não corresponde com o número passado!')
        if(!arr && !n) throw new ReferenceError('Envie os parâmetros!')
        if(typeof n !== "number") throw new TypeError('o segundo parâmetro precisa ser do tipo Number!')
        return arr
    } catch (e) {
        if (e instanceof TypeError) {
            console.log('Esse é um TypeError')
            console.log(e.message)
            // console.log(e.stack)
        }
        else if (e instanceof RangeError) {
            console.log('Esse é um RangeError')
            console.log(e.message)
            // console.log(e.stack)
        }
        else if (e instanceof ReferenceError) {
            console.log('Esse é um ReferenceError')
            console.log(e.message)
            // console.log(e.stack)
        }
        else{
            console.log('tipo de Erro não esperado: ', e)
        }
        
    }
}
console.table(lista)
console.log(recebeArray(lista, param))