let button = document.querySelector('input#button')

button.addEventListener('click', clicar)

function clicar() {
    let numero = document.querySelector('input#numero')
    let select = document.querySelector('select')

    if (numero.value.length == 0) {
        alert('Valor inválido.')
    } else {
        let valor = Number(numero.value)

        select.innerText = '' //limpar select
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option') //criar option a cada loop
            item.innerText = `${valor} x ${c} = ${c*valor}`
            select.appendChild(item)
        }
    }
}