
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

const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    fabricacion: vehiculo1.fabricacion,
    cilindrada: vehiculo1.cilindrada,
}

JSON.stringify("vehiculo", vehiculoObject);
localStorage.setItem("vehiculo", vehiculoObject);


const deportivo1 = new AutomovilDeportivo("Ferrari", "Spider", "Amarillo", 2020, 4000, 500);
mostrarDatos(`------Muestro los datos del Automóvil Deportivo------`)
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();

