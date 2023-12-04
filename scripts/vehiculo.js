import {mostrarDatos} from './main.js'
export class Vehiculo {
    #marca
    #modelo
    #color
    #fabricacion
    #cilindrada

    constructor(marca, modelo, color, fabricacion, cilindrada) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }

    get marca() {
        return this.#marca;
    }
    set marca(valor) {
        this.#marca = valor;
    }
    get modelo() {
        return this.#modelo;
    }
    set modelo(valor) {
        this.#modelo = valor;
    }
    get color() {
        return this.#color;
    }
    set color(valor) {
        this.#color = valor;
    }
    get fabricacion() {
        return this.#fabricacion;
    }
    set fabricacion(valor) {
        this.#fabricacion = valor;
    }
    get cilindrada() {
        return this.#cilindrada;
    }
    set cilindrada(valor) {
        this.#cilindrada = valor;
    }

    //metodo to string para imprimirlo todo usando el metodo llamado del main.
    toString() {
        const datos = `La marca del coche es : ${this.marca} <br/>
        el modelo del coche es : ${this.modelo} <br/> 
        el color del coche es : ${this.color} <br/>
        el año de fabricación del coche es : ${this.#fabricacion} <br/>
        la cilindrada del coche es : ${this.cilindrada} <br/>
        `
        mostrarDatos(datos);
    }
    arrancar() {
        const datos = `El coche arranca.`
        mostrarDatos(datos);
    }
    acelerar(velocidad) {
        const datos = `La velocidad del coche es: ${velocidad} km/h `
        mostrarDatos(datos);
    }
    frenar(){
        const datos =`El coche frena.`
        mostrarDatos(datos);
    }
}