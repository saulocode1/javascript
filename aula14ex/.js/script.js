let button = document.querySelector('input#button')

button.addEventListener('click', contar)

function contar() {
    let inputInicio = document.querySelector('#inputInicio')
    let inputFim = document.querySelector('#inputFim')
    let inputPasso = document.querySelector('#inputPasso')
    let res = document.querySelector('div.res')
    
    let inicio = Number(inputInicio.value)
    let fim = Number(inputFim.value)
    let passo = Number(inputPasso.value)
    
    res.innerHTML = ''
    res.innerHTML += '<p>Contando: </p>'
    for (var c = inicio; c <= fim; c +=passo) {
        res.innerHTML += `${c}, `
    } 
    res.innerHTML += 'fim.'
}

