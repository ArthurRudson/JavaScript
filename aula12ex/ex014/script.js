function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'imagem/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagem/tarde.jpg'
    } else {
        img.src = 'imagem/noite.jpg'
    }
}
