function simularTiradas() { 
    for (var i = 1; i <= 10; i++) {
        var vueltas = Math.floor(Math.random() * (37 * 10 - 37 * 5 + 1)) + 37 * 5;
        var posicionFinal = Math.floor(vueltas % 37);
        var resultado = `Juego Nro: ${i}\n`;
        resultado += `Valor Rand: ${vueltas}\n`;
        resultado += `Nro en el que cayo: ${posicionFinal}\n`;
        resultado += "...\n";
        console.log(resultado);
    }
}
simularTiradas();