let familieleden = ['Mama', 'Papa', 'Zus1', 'Broer', 'Zus2'];
console.log(familieleden.length);
console.log(familieleden[0] + ' ' + familieleden[2] + ' ' + familieleden[4]);

const voegNaamToe = () => {
    let nieuweNaam = window.prompt("Geef een nieuwe naam voor de familie");
    familieleden.push(nieuweNaam);
    let aantalKeer = familieleden.length;
    let familieledenTekst = '';
    for(let i = 0; i<aantalKeer; i++){
        familieledenTekst += familieleden[i] + ', ';
    }
    console.log(familieledenTekst);
}

voegNaamToe();