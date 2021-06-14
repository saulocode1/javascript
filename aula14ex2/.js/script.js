let button = document.querySelector('input#button')

button.addEventListener('click', calcular)

function calcular() {
    let input = document.querySelector('input#input')
    let select = document.querySelector('select')

    let valor = Number(input.value)

    select.innerHTML = ''
    for(var c = 1; c <= 10; c++) {
        let option = document.createElement('option')
        option.innerHTML = `${valor} x ${c} = ${c * valor}`
        select.appendChild(option)
    }
    input.value = ''
    input.focus()
}