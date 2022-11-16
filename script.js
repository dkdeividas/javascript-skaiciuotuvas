// Kiekvienas veiksmas atskirai, reik perrasyt reiksmes

// let sudetis = (a, b) => a + b;
// let atimtis = (a, b) => a - b;
// let daugyba = (a, b) => a * b;
// let dalyba = (a, b) => a / b;
// console.log(sudetis(20, 5));
// console.log(atimtis(20, 5));
// console.log(daugyba(20, 5));
// console.log(dalyba(20, 5));



let pirmsk = 20;
let antrsk = 5;

// reiksmiu ivedimas per prompt
// let pirmsk = parseFloat(prompt('Iveskite pirma skaiciu: '));
// let antrsk = parseFloat(prompt('Iveskite antra skaiciu: '));

function skaiciuotuvas(sk1, sk2) {
    let sudetis = sk1 + sk2;
        atimtis = sk1 - sk2;
        daugyba = sk1 * sk2;
        dalyba = sk1 / sk2;
    return {sudetis, atimtis, daugyba, dalyba};
}
console.log(skaiciuotuvas(pirmsk, antrsk));


