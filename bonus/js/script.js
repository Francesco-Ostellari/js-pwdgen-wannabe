
/* bonus:
- chiediamo all'utente anche il suo numero preferito
- al numero preferito sommiamo 5
- attacchiamo alla password, al posto del 21, il risultato 
*/


// chiedo all'utente il suo nome
let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome Utente: ' + nomeUtente);
document.writeln("Nome Utente:" + nomeUtente);

// chiedo all'utente il suo cognome
let cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome Utente: ' + cognomeUtente);
document.writeln("Cognome Utente:" + cognomeUtente);

// chiedo all'utente il suo colore preferito
let colorePreferitoUtente = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito: Utente ' + colorePreferitoUtente);
document.writeln("Colore preferito Utente:" + colorePreferitoUtente);

// chiedo all'utente il suo numero preferito
let numeroPreferitoUtente = prompt('Inserisci il tuo numero preferito');
console.log('Numero preferito: Utente ' + numeroPreferitoUtente);
document.writeln("Numero preferito Utente:" + numeroPreferitoUtente);

// somma numero preferito + 5
let somma = parseInt(numeroPreferitoUtente) + 5;
console.log("Numero preferito + 5 " + somma);
document.writeln("Numero preferito + 5 = " + somma);

// stampa password
let stampa = `
  <h1>${nomeUtente}${cognomeUtente}${colorePreferitoUtente}${somma}</h1>
  `;
console.log(stampa);
document.getElementById('mio_id').innerHTML = stampa;
