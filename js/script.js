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
const price = parseInt(0.21 * (NumberKm));
console.log(price);

// 5- Istruzioni condizionali per eventuali sconti sul biglietto
if (UserAge >= 18){
    console.log(parseInt((price) - (price * 20 / 100)));
}

const DiscountUnder18 = (price) - (price * 20 / 100);

if (UserAge >= 65){
    console.log(parseInt((price) - (price * 40 / 100)));
}

const DiscountOver65 = (price) - (price * 40 / 100);

// 6- Stampare il risultato in pagina

TicketParagrapf.innerHTML = `Il prezzo del suo biglietto é di <strong>${price}€.` 