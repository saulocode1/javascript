/* 
    1 - PEGAR INPUT E BOTÕES [OK]
    2 - PEGAR VALOR INPUT [OK]
    3 - ADICIONAR VALOR DO INPUT NO SELECT [OK]
*/

let buttonAdd = document.querySelector('#adicionar')
let buttonFin = document.querySelector('#finalizar')

let input = document.querySelector('#input')
let select = document.querySelector('select')
let res = document.querySelector('#res')

let valor = Number(input.value)
let valores = []

buttonAdd.addEventListener('click', adicionar)

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(valor) && !inLista(valor, valores)) {
        valores.push(valor)
    } else {
        alert('Opção inválida.')
    }
} 