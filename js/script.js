// 1- Chiedere quanti km vuole percorrere il passeggero
// 2- Chiedere l'età al passeggero
// 3- Validazione
// 4- Creare la funzione per calcolare il prezzo del biglietto al km senza sconti
// 5- Istruzioni condizionali per eventuali sconti sul biglietto
// 6- Stampare il risultato in pagina




const TicketParagrapf = document.getElementById('ticket-price');

// 1- Chiedere quanti km vuole percorrere il passeggero
const NumberKm = parseInt(prompt('Quanti km vuole percorrere?','100'));
console.log(NumberKm);

// 2- Chiedere l'età al passeggero
const UserAge = parseInt(prompt('Quanti anni ha?','28'));
console.log(UserAge);

// 3- Validazione
if (isNaN(NumberKm) || isNaN(UserAge)) {
    alert('Per favore inserisca un numero');
}

// 4- Creare la funzione per calcolare il prezzo al km
let price = 0.21 * NumberKm;
console.log(price);

// 5- Istruzioni condizionali per eventuali sconti sul biglietto
if (UserAge <= 18){
    price = price * 0.8;
}

if (UserAge >= 65){
    price = price * 0.6;
}

const showPrice = price.toFixed(2);

// 6- Stampare il risultato in pagina

TicketParagrapf.innerHTML = `Il prezzo del suo biglietto é di <strong>€${showPrice}</strong>.` 


