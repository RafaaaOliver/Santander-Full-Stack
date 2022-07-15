// Map

const valor = {
    value: 15
}

const numbersMap = [50, 49, 36]

function mapComThis(arr, thisArg) {
    return arr.map((item) => item * thisArg.value, thisArg)
}

console.log(`Map: ${mapComThis(numbersMap, valor)}`)

// Filter
const numbersFilter = [1, 3, 7, 10, 28, 46, 93, 77, 23, 55]

function filtro(arr) {
    return arr.filter((numero) => (numero % 2 === 0) ? numero : false)
}

console.log('Filter: ')
console.table(filtro(numbersFilter))


// Reduce
const numbersReduce = [10, 12, 45, 36, 75, 96, 35, 478]

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        soma = prev + current
        console.log({prev, current, soma})
        return soma
    })
}

console.log(`Reduce soma: ${somaNumeros(numbersReduce)}`)

// Reduce 2:

const listaReduce2 = [
    {
        name: 'Peixe',
        preco: 50
    },
    {
        name: 'Arroz',
        preco: 25
    },
    {
        name: 'Banana',
        preco: 5
    }
]

const saldoDisponivel = 500;

function calculaSaldo(saldoDisponivel, arr) {
    return arr.reduce(function(prev, current, index) {
        console.log('rodada: ', index ++)
        console.log({ prev })
        console.log({ current })
        return prev - current.preco
    }, saldoDisponivel) 
}

console.log(`Reduce 2: ${calculaSaldo(saldoDisponivel, listaReduce2)}`)
