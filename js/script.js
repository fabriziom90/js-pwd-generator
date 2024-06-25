// PERMETTO L'INSERIMENTO DEL NOME DA PARTE DELL'UTENTE
let first_name = prompt('Inserisci il tuo nome');
console.log(first_name);

// PERMETTO L'INSERIMENTO DEL COGNOME DA PARTE DELL'UTENTE
let last_name = prompt('Inserisci il cognome');
console.log(last_name);

// PERMETTO L'INSERIMENTO DEL COLORE DA PARTE DELL'UTENTE
let color = prompt('Inserisci il tuo colore preferito');
console.log(color);

// CREO UNA VARIABILE A CUI ASSEGNO LA CONCATENAZIONE DEI VALORI INSERITI PRECEDENTEMENTE CON IL VALORE 23
let string = `${first_name}${last_name}${color}23`;
console.log(string);


