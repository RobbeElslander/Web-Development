const setup = () => {
    maakTrigram();
}

window.addEventListener("load", setup);

const maakTrigram = () => {
    let woord = "onoorbaar";
    for(let i = 0; i<woord.length-2; i++){
        console.log(woord.substring(i,i+3));
    }
}