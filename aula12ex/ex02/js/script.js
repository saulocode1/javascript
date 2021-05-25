
var button = document.querySelector('input#button')

button.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var input = document.querySelector('input#inputYear')
    var inputSex = document.getElementsByName('inputSex')
    var p = document.querySelector('p.text')
    var img = document.createElement('img') // criar elemento
    img.setAttribute('class', 'img') // criar atributo 

    var res = Number(input.value)
    var idade = ano - res

    if (input.value.length == 0 || input.value > ano) {
        alert('Ano inválido. Tente novamente.')
    }

    var gênero = ''
    if (inputSex[0].checked) { // input radio selecionado
        gênero = 'Homem'
        if (idade < 5) {
            img.setAttribute('src', './img/homemBebe.jpg')
        } else if (idade < 15) {
            img.setAttribute('src', './img/homemCrianca.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', './img/homemJovem.jpg')
        } else if (idade < 40) {
            img.setAttribute('src', './img/homemAdulto.jpg')
        } else {
            img.setAttribute('src', './img/homemIdoso.jpg')
        }

    } else if (inputSex[1].checked) {
        gênero = 'Mulher'
        if (idade < 5) {
            img.setAttribute('src', './img/mulherBebe.jpg')
        } else if (idade < 15) {
            img.setAttribute('src', './img/mulherCrianca.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', './img/mulherJovem.jpg')
        } else if (idade < 40) {
            img.setAttribute('src', './img/mulherAdulta.jpg')
        } else {
            img.setAttribute('src', './img/mulherIdosa.jpg')
        }
    } 
    p.innerHTML = `${gênero} com ${idade} anos.`
    p.appendChild(img) // adicionar filho
}