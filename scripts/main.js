//importo las clases que necesitos para el main
import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";
const contenedor = document.createElement('div');
document.body.appendChild(contenedor);
//exporto la funcion que utilizo en el resto de clases
export function mostrarDatos(datos) {
    contenedor.innerHTML += `<p>${datos}</p>`
}
//Instancio la vehiculo1 con el constructor de la clase Vehiculo
const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, 2400)
mostrarDatos(`-------Muestro los datos del vehiculo 1-------`)
//Muestro los datos del vehiculo1
vehiculo1.toString()
//Muestro los metodos por pantalla.
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();
//Creo un nuevo objeto vehiculoObjeto con los parametros de vehiculo1
const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    fabricacion: vehiculo1.fabricacion,
    cilindrada: vehiculo1.cilindrada,
}

//Introduzco como llave Vehiculo en el local storage con el tratamiento que convierte un objeto en un JSON, es decir el stringify
localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));
//Recupero el JSON y lo transformo otra vez a objeto.
JSON.parse(localStorage.getItem("vehiculo", vehiculoObject))
//Imprimo el objeto.
console.log(vehiculoObject)

//Instancio el objeto deportivo1, de la clase AutomovilesDeportivo 
const deportivo1 = new AutomovilDeportivo("Ferrari", "Spider", "Amarillo", 2020, 4000, 500);
mostrarDatos(`------Muestro los datos del Automóvil Deportivo------`)
//Imprimo los datos del deportivo
deportivo1.toString();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar();
//Creo un objeto DeportivoObject y le doy los parametros del objeto deportivo1.
const deportivoObject = {
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    fabricacion: deportivo1.fabricacion,
    cilindrada: deportivo1.cilindrada,
    potenciaMotor: deportivo1.potenciaMotor
}
//Introduzco los datos en el local storage con un for in
for (let key in deportivoObject) {
    if (deportivoObject.hasOwnProperty(key)) {
        localStorage.setItem(key, deportivoObject[key]);
    }
}
//esto lo habia puesto por si acaso.
// console.log(deportivoObject)

localStorage.removeItem("color");
localStorage.removeItem("fabricacion");
// localStorage.clear();

