
import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";
const contenedor = document.createElement('div');
document.body.appendChild(contenedor);

export function mostrarDatos(datos) {
    contenedor.innerHTML += `<p>${datos}</p>`
}

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, 2400)

mostrarDatos(`-------Muestro los datos del vehiculo 1-------`)
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

