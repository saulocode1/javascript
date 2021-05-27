var button = document.querySelector('input#button')

button.addEventListener('click', tabuada)

function tabuada() {
    let input = document.querySelector('input#input')
    let tab = document.querySelector('select#tabuada')
    let valor = input.value
    
    if (valor.length == 0) {
        alert('Digite um número.')
    }

    tab.innerHTML = ''
    for (var c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        
        console.log(item)
        item.innerHTML = `${valor} x ${c} = ${valor*c}`
        item.value = `tab${c}`
        tab.appendChild(item) // adicionar filho item dentro de tab
    }
}