/* 
    1 - PEGAR INPUT E BOTÕES [OK]
    2 - PEGAR VALOR INPUT [OK]
    3 - ADICIONAR VALOR DO INPUT NO SELECT [OK]
*/

const buttonAdd = document.querySelector('#adicionar')
const buttonFin = document.querySelector('#finalizar')

buttonAdd.addEventListener('click', adicionar)

function adicionar() {

    const input = document.querySelector('#input')
    const valor = input.value
    const select = document.querySelector('select')
    const option = document.createElement('option')
    
    const array = [valor]
    console.log(array)
    if (valor >= 1 && valor <= 100) {
        option.innerText += `Valor ${valor} adicionado.` 
        select.appendChild(option)
    } else {
        alert ('Valor inválido!')
    }
}
