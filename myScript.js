

/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/

/*
const distance = prompt('Inserire la distanza da percorrere, in Km');
const age = prompt('Inserire l\'età del passeggero');

const fullPrice = distance * 0.21;

if (age >= 18 && age < 65) {
    const final_price = full_price.toFixed(2)
    document.writeln('Il costo del biglietto è ' + final_price);
}

else if (age < 18) {
    minor_price = (full_price * 20) / 100
    const final_price = minor_price.toFixed(2)
    document.writeln('Il costo del biglietto è ' + final_price)
}

else if (age >= 65) {
    mayor_price = (full_price * 40) / 100
    const final_price = mayor_price.toFixed(2)
    document.writeln('Il costo del biglietto è ' + final_price)
}
*/

console.log('JS OK!')


// richiesta di informazioni
const button = document.getElementById('button');
let visibleResult = document.querySelector('.container.py-5.d-none');


// costo dei biglietti in base ad età e km


    button.addEventListener('click', 
        function(){
            //al click vengono presi i valori dagli input
            const distance = document.getElementById('km').value;
            const age = document.getElementById('age');
            const name = document.getElementById('name').value;

            //console.log(distance + ' km da percorrere');
            
            let ageCategory = age.value;
            //console.log('età del passeggero: ' + ageCategory);

            if(!isNaN(distance) && distance >= 0 && isNaN(name)){

                let fullPrice = (distance * 0.21);

                //console.log('il costo è di:', fullPrice)

                let category;

                switch(ageCategory){

                    case 'Minorenne':{
                        category = 20
                        break;
                    }
                    case 'Over65':{
                        category = 40
                        break;
                    }
                    default:{
                        category = 0
                    }
                }

                //console.log(category)

                let discount = fullPrice * category / 100

                //console.log('lo sconto è di: ', discount)

                let finalPrice = fullPrice - discount

                //console.log('il prezzo finale è di :', finalPrice)

                document.querySelector('div.col.ae-bg-grey.fw-bold p').innerHTML = name.toUpperCase()

                document.getElementById('category').innerHTML = `Biglietto ${ageCategory}`

                document.getElementById("output").innerHTML = finalPrice.toFixed(2);


                // if (ageValue >= 18 && ageValue < 65) {
                //     document.getElementById("output").innerHTML = fullPrice.toFixed(2);
                    
                // }

                // if (ageValue < 18) {
                //     let seniorDiscountPrice = (fullPrice - ((fullPrice * 20) / 100))
                //     document.getElementById("output").innerHTML = seniorDiscountPrice.toFixed(2)
                // }

                // if (ageValue > 65) {
                //     let minorDiscountPrice = (fullPrice - ((fullPrice * 40) / 100))
                //     document.getElementById("output").innerHTML = minorDiscountPrice.toFixed(2)            
                // }

                visibleResult.classList.remove('d-none'); 
        }
        else{
            alert('inserisci i dati corretti')
        }
        }
    );
// prezzo del biglietto intero


// prezzo biglietto minorenni

// prezzo biglietto over 65