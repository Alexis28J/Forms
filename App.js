function formSubmit(event) {  //funzione che gestisce l'evento di submit del form
    event.preventDefault();    //Previene il comportamento di default del form (che è quello di ricaricare la pagina)
    const myForm = document.getElementById('my-form');
    // console.log('Form inviata'); 
    console.log(myForm.checkValidity()); 
    //metodo che controlla se tutti i campi del form rispettano le regole di validazione (required, type, pattern, min, max, ecc)

    //console.log(new FormData(myForm));
    const data = new FormData(myForm);  //Oggetto che contiene i dati del form. FormData è un oggetto predefinito di JS

    console.log(data.get('name'));
    console.log(data.get('gender'));
}

function getPokemon(event) {  //funzione che gestisce l'evento di submit del form per cercare un pokemon
    event.preventDefault();
    const pForm = document.getElementById('pokeform');

    const data = new FormData(pForm);
    console.log(data);

    const pokemonName = data.get('search-string');  //prendo il valore dell'input con name="search-string"
    console.log(pokemonName);
    
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;  //costruisco l'url per la chiamata API 


    //effettuo la chiamata API
    fetch(apiUrl) 
    .then(res => res.json())
    //.then(result => console.log(result));
    .then(result => displayPokemon(result))
    .catch(errore => displayPokemon(null)); //gestione dell'errore nel caso in cui il pokemon non venga trovato

    //fetch(apiUrl) è una funzione predefinita di JS che effettua una chiamata HTTP all'url passato come parametro
    //.then() è un metodo che viene eseguito quando la chiamata fetch è completata con successo
    //.then(res => res.json()) converte la risposta in formato JSON
    //.then(result => console.log(result)) stampa il risultato della chiamata API
    
}


function displayPokemon(pokemon) {
    const pokeDiv = document.getElementById('pokemon-container');

if (pokemon === null) { //se il pokemon non è stato trovato
    const errorMessage = 'Pokemon non trovato';
    pokeDiv.innerHTML = errorMessage;  //innerHTML permette di inserire del codice HTML all'interno di un elemento
}else{
    const pokeCard = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.sprites.front_default}" alt="">
    ` //template literal per creare una scheda del pokemon con il nome e l'immagine
    pokeDiv.innerHTML = pokeCard;  //inserisco la scheda del pokemon all'interno del div con id="pokemon-container"
}

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TASK per domani
//Form con dati anagrafici di una persona (10 - 15 input)