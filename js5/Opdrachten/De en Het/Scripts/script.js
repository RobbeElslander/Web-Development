const setup = () => {
    let button = document.getElementById("button");


    button.addEventListener("click", veranderDeHet)
}

window.addEventListener("load", setup);

const veranderDeHet = () => {
    let zin = document.getElementById("zin")
    let zinMetDe = zin.value.toLowerCase();

    zinStukken = zinMetDe.split(" ");

    for(let i = 0; i<zinStukken.length; i++){
        if(zinStukken[i] === "de"){
            zinStukken[i] = "het";
        }
    }

    let nieuweZin = zinStukken.join(" ");
    console.log(nieuweZin)
}