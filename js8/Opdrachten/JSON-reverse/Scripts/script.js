let tekst = '{"voornaam":"Robbe","familienaam":"Elslander","geboorteDatum":"2003-11-19T00:00:00.000Z","adres":{"straat":"Surmont de Volsberghestraat 36 A1","postcode":"8900","gemeente":"Ieper"},"isIngeschreven":true}'

const setup = () => {
    let student = JSON.parse(tekst)
    console.log(student)
}

window.addEventListener("load",setup)