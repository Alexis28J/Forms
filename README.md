
Lezione di lunedì 15 dicembre 2025

- Gli oggetti FormData sono usati per catturrare i campi dei form HTML ed inviarli usando fetch o altri metodi per le richieste di rete.


- La proprietà innerHTML in JavaScript permette di leggere o modificare il codice HTML e il testo all'interno di un elemento HTML specifico. Puoi usarla per ottenere una stringa dell'HTML esistente (es. let contenuto = elemento.innerHTML;) o per sostituire completamente il contenuto di un elemento con nuovo HTML (es. elemento.innerHTML = "<p>Nuovo contenuto</p>";), rendendola uno strumento potente per manipolare dinamicamente le pagine web. 


- Non è consigliato usare type = 'number' per il numero di telefono:
• 	I numeri di telefono non sono valori matematici: possono contenere il segno + (prefisso internazionale), spazi, trattini o parentesi. Con typer='number' questi caratteri non sarebbero accettati.
• 	Inoltre, alcuni numeri possono iniziare con lo zero (es. 0123456789), e type='number' tende a rimuovere gli zeri iniziali.


- type="email" fa già una validazione interna.
  Se usi type="email", il browser applica una propria regex di base. Quando aggiungi anche pattern, i due controlli devono entrambi essere soddisfatti. 
  A volte il tuo pattern può entrare in conflitto con la validazione nativa.

  
  
  Lezione di Martedì 16 dicembre 2025

  - https://mockapi.io/   ---  loggarsi con Github

Una Mock API serve a simulare il comportamento di un'API reale (back-end) che non è ancora pronta o disponibile, permettendo agli sviluppatori front-end e di testare di procedere senza blocchi, simulare scenari di errore, integrare servizi di terze parti in modo controllato, e mantenere la privacy simulando dati sensibili, velocizzando lo sviluppo e il testing senza dipendere dal server di produzione.



