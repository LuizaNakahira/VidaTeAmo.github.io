function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'vidaeeu (2).png'
        document.body.style.background = '#eb9234'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'euevida.png'
        document.body.style.background = '#9334eb'
    } else {
        img.src = 'vidaa.png'
        document.body.style.background = '#3d0d2f'
    }
}

