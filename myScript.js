const distance = prompt('Inserire la distanza da percorrere, in Km');
const age = prompt('Inserire l\'età del passeggero');

const full_price = distance * 0.21;

if (age >= 18 && age < 65){
    const final_price = full_price.toFixed(2)
    document.writeln('Il costo del biglietto è ' + final_price);    
}

else if (age < 18){
    minor_price = (full_price * 20) / 100
    const final_price = minor_price.toFixed(2)    
    document.writeln('Il costo del biglietto è ' + final_price)
}

else if (age >= 65){
    mayor_price = (full_price * 40) / 100
    const final_price = mayor_price.toFixed(2)
    document.writeln('Il costo del biglietto è ' + final_price)
}

