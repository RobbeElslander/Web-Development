const setup = () =>{
    let input = document.getElementById("input");
    let button = document.getElementById("button");

    button.addEventListener("click", spatiesToevoegen);
}

window.addEventListener("load", setup);

const spatiesToevoegen = () => {
    let letters = input.value.split('');
    let woordMetSpaties = "";

    for(let i = 0; i < letters.length; i++){
        if(letters[i] !== " "){
            woordMetSpaties += letters[i];
        }
    }

    console.log(woordMetSpaties.split('').join(" "));
    //nog aan te passen
}