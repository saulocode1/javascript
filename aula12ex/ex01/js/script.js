window.onload = carregar

function carregar() {
    var date = new Date()
    var hora = date.getHours()

    var body = document.querySelector('body.body')
    var text = document.querySelector('p.text')
    var img = document.querySelector('img.img')

    if (hora < 12){
        body.style.background = '#FFD6AB' //document.body.style.background = '#FFD6AB'
        text.innerText = `Agora são ${hora} horas.`
        img.style.backgroundImage = 'url(img/manha.jpg)'
    } else if (hora >= 12 && hora < 18) {
        body.style.background = '#FFC0AB' //document.body.style.background = '#FFC0AB'
        text.innerText = `Agora são ${hora} horas.`
        img.style.backgroundImage = 'url(img/tarde.jpg)'
    } else {
        body.style.background = '#6D5F90' //document.body.style.background  = '#6D5F90'
        text.innerText = `Agora são ${hora} horas.`
        img.style.backgroundImage = 'url(img/noite.jpg)'
    }
}