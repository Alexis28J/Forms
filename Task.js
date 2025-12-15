function formSubmitTask(event) {   //funzione per catturare i dati del form dei dati anagrafici
    event.preventDefault();    //Previene il comportamento di default del form (che è quello di ricaricare la pagina)
    const formPData = document.getElementById('personal-data'); //prendo il form con id="personal-data"
    
    console.log(formPData.checkValidity()); //metodo che controlla se tutti i campi del form rispettano le regole di validazione (required, type, pattern, min, max, ecc)

    const data = new FormData(formPData);  //Oggetto che contiene i dati del form.
    console.log(data.get('name'));
    console.log(data.get('surname'));
    console.log(data.get('gender'));
    console.log(data.get('yob'));
    console.log(data.get('place-of-birth'));
    console.log(data.get('nationality'));
    console.log(data.get('residing-in'));
    console.log(data.get('province'));
    console.log(data.get('address'));
    console.log(data.get('tax-id-number'));
    console.log(data.get('telephone-number'));
    console.log(data.get('email'));
    
}