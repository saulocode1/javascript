let inputAdd = document.querySelector('input#adicionar')
let inputFin = document.querySelector('input#finalizar')

inputAdd.addEventListener('click', adicionar)
inputFin.addEventListener('click', finalizar)

let input = document.querySelector('input#input')
let lista = document.querySelector('select')
let res = document.querySelector('.res')
let valores = []

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
    let valor = Number(input.value)
    
    if (isNumero(valor) && !inLista(valor, valores)) {
        valores.push(valor)
        let option = document.createElement('option')
        option.innerHTML = `Valor ${valor} adicionado.`
        lista.appendChild(option)
        input.value = ''
        input.focus()
    } else {
        alert('Número inválido ou já encontrado na lista.')
    } res.innerHTML = ''
}

function finalizar() {
    res.innerHTML = `Temos ${valores.length} valores.` 
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let média = 0
    for (pos in valores) {
        soma += valores[pos]
        média = soma / valores.length
        if (valores[pos] > maior) {
            maior = valores[pos]
        } if (valores[pos] < menor) {
            menor = valores[pos]
        } 
    } 
    res.innerHTML += `<p>O maior valor é ${maior}.</p>`
    res.innerHTML += `<p>O maior valor é ${menor}.</p>`
    res.innerHTML += `<p>A soma total é ${soma}.</p>`
    res.innerHTML += `<p>A média total é ${média}.</p>`

}