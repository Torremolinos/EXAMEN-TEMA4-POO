import {mostrarDatos} from './main.js';
import { Vehiculo } from './vehiculo.js';
export class AutomovilDeportivo extends Vehiculo {
    #potenciaMotor;

    constructor(marca,modelo,color,fabricacion,cilindrada,potenciaMotor){
        super(marca,modelo,color,fabricacion,cilindrada)
        this.#potenciaMotor=potenciaMotor;
    }

    get potenciaMotor(){
        return this.#potenciaMotor;
    }

    set potenciaMotor(valor){
        this.#potenciaMotor = valor;
    }

    toString(){
        super.toString();
        const datos = `La potencia del motor del coche es : ${this.#potenciaMotor} caballos`
        mostrarDatos(datos);
    }




}
