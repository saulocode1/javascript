let buttonAdd = document.querySelector('#adicionar')
let buttonFin = document.querySelector('#finalizar')

let input = document.querySelector('input#input')
let lista = document.querySelector('select')
let res = document.querySelector('#res')

let valores = []

buttonAdd.addEventListener('click', adicionar)
buttonFin.addEventListener('click', finalizar)

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let valor = Number(input.value)
    if (isNumero(valor) && !inLista(valor, valores)) {
        valores.push(valor)
        let item = document.createElement('option')
        item.innerHTML = `Valor ${valor} adicionado.`
        lista.appendChild(item)
        input.value = ''
        input.focus()
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
} 

function finalizar() {
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let média = 0
    for (pos in valores) {
        soma += valores[pos]
        média = soma / valores.length
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }

    res.innerHTML = `<p>Temos ${valores.length} valores.</p>`
    res.innerHTML += `<p>O maior valor é ${maior}.</p>`
    res.innerHTML += `<p>O menor valor é ${menor}.</p>`
    res.innerHTML += `<p>A soma entre os valores é ${soma}.</p>`
    res.innerHTML += `<p>A média entre os valores é ${média}.</p>`
}
