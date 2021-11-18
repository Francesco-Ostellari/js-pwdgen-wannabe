
/* Descrizione esercizio:
1. Chiedi all’utente il suo nome,
2. poi chiedi il suo cognome,
3. poi chiedi il suo colore preferito
4. Infine scrivi sulla pagina nomecognomecolorepreferito21
*/


let nomeUtente = prompt('Inserisci il tuo nome');
console.log('Nome Utente: ' + nomeUtente);
document.writeln("Nome Utente:" + nomeUtente);
let cognomeUtente = prompt('Inserisci il tuo cognome');
console.log('Cognome Utente: ' + cognomeUtente);
document.writeln("Cognome Utente:" + cognomeUtente);
let colorePreferitoUtente = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito: Utente ' + colorePreferitoUtente);
document.writeln("Colore preferito Utente:" + colorePreferitoUtente);
let numero = 21;
let stampa = `
  <h1>${nomeUtente}${cognomeUtente}${colorePreferitoUtente}${numero}</h1>
  `;
console.log(stampa);
document.getElementById('mio_id').innerHTML = stampa;
