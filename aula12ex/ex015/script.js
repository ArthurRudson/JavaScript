function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotoo')
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "homenjovem.png")
            } else if  (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto')
            } else {
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if  (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto')
            } else {
                //idoso
                img.setAttribute('src', 'foto')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}