e = Math.floor(Math.random () * 360); // pos inicial rand
vueltas = Math.floor((Math.random(10 - 5) + 5) * 360); // vueltas rand
numRand = Math.floor(e * vueltas); // valor en grados
angFinal = Math.floor (e * vueltas) % 360; // valor final
// impresion
console.log ("Angulo Inicial: " + e);
console.log ("Valor Rand en Grados: " + numRand);
console.log ("Angulo Final: " + angFinal);
console.log ("....");
console.log ("");