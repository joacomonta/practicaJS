// mi codigo
hoy = new Date();
ahora = hoy.toLocaleTimeString([], {hora: '2-digit', minutos: '2-digit'});
total = Math.floor(Math.random() * (60 * 10 - 60 * 5) + 60 * 5);
console.log("Hora de inicio: " + ahora);
console.log("Valor Rand en min: " + total);
hoy.setHours(hoy.getHours() + total / 60);
hoy.setMinutes(hoy.getMinutes() + total % 60);
fin = hoy.toLocaleTimeString([], {hora: '2-digit', minutos: '2-digit'});
console.log("Hora final: " + fin);


// codigo generado por el chatgpt
// Obtener la hora actual
const horaActual = new Date();
const horaActualEnMinutos = horaActual.getHours() * 60 + horaActual.getMinutes();

// Generar un número aleatorio en minutos cuyo equivalente en horas debe ser mayor o igual a 5 horas
// y menor o igual a 10 horas posteriores a la hora actual.
const horasMinimas = 5 * 60; // 5 horas en minutos
const horasMaximas = 10 * 60; // 10 horas en minutos
const valorAleatorioEnMinutos = Math.floor(Math.random() * (horasMaximas - horasMinimas + 1)) + horasMinimas;

// Calcular la hora final en base al valor aleatorio generado
const horaFinalEnMinutos = horaActualEnMinutos + valorAleatorioEnMinutos;
const horas = Math.floor(horaFinalEnMinutos / 60);
const minutos = horaFinalEnMinutos % 60;

// Muestra la hora actual en formato HH:mm
console.log("Hora Actual: " + horaActual.getHours() + ":" + (horaActual.getMinutes() < 10 ? "0" : "") + horaActual.getMinutes());

// Muestra el valor aleatorio generado en minutos
console.log("Valor Aleatorio Generado en Minutos: " + valorAleatorioEnMinutos);

// Muestra la hora final en formato HH:mm
console.log("Hora Final: " + horas + ":" + (minutos < 10 ? "0" : "") + minutos);