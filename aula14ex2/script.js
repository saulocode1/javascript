var input = document.querySelector('input#input')
var button = document.querySelector('input#button')
var res = document.querySelector('div#tabuada')

button.addEventListener('click', function() {
    var valor = input.value
    
    for (c = 1; c <= 10; c++) {
    console.log(`${valor} x ${c} = ${valor * c}`)

    res.innerHTML = `${valor} x ${c} = ${valor * c}`
}})





