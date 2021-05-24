
var button = document.querySelector('input#button')

button.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var input = document.querySelector('input#inputYear')
    var inputSex = document.getElementsByName('inputSex')
    var p = document.querySelector('p.text')
    var img = document.createElement('img')
    img.setAttribute('class', 'img')

    var res = Number(input.value)
    var idade = ano - res

    if (input.value.length == 0 || input.value > ano) {
        alert('Ano inválido. Tente novamente.')
    }

    var gênero = ''
    if (inputSex[0].checked) {
        gênero = 'Homem'
        if (idade < 5) {
            img.setAttribute('src', './img/homemBebe.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', './homem')
        }
    } else if (inputSex[1].checked) {
        gênero = 'Mulher'
    }
    p.innerHTML = `${gênero} com ${idade} anos.`
    p.appendChild(img)

}