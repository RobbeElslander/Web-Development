const setup = () => {
    var geboortedatum = new Date('2003-11-19')
    var datumNu = new Date()

    var verschilDatums = datumNu.getTime() - geboortedatum.getTime()
    var verschilInDagen = Math.floor(verschilDatums / (1000*3600*24))

    console.log(verschilInDagen + " dagen")
}

window.addEventListener("load", setup)