let student={
    voornaam : "Robbe",
    familienaam : "Elslander",
    geboorteDatum : new Date("2003-11-19"),
    adres : {
        straat : "Surmont de Volsberghestraat 36 A1",
        postcode : "8900",
        gemeente : "Ieper"
    },
    isIngeschreven : true,
}

const setup = () => {
    let tekst = JSON.stringify(student)
    console.log(tekst)
}

window.addEventListener("load",setup)