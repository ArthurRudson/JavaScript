function carregar(){
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12 ) {
        img.src = `imagem/manhaa.png`
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = `imagem/tardee.png`
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagem/noite.png'
        document.body.style.background = '#515154'
    }
}
