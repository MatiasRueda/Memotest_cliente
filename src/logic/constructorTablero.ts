import { EstadoCuadrado } from "../auxiliar/type";

export default class ConstructorTablero {
    #coloresNombres: string[];

    constructor(coloresNombres: string[]) {
        this.#shuffleArray(coloresNombres);
        this.#coloresNombres = coloresNombres;
    }
    /** Metodo utilizado para copia de cada elemento de un arreglo y crear
     *  un nuevo arreglo. 
     * @param array utilizado para copiar cada uno de los elementos
     * @returns un nuevo array con todos los elementos duplicados */
    #agregarPar(array: string[]) {
        return array.map(e => array.push(e));
    }

    /** Metodo utilizado para realizar una mezcla sobre el mismo arreglo.
     * @param array en este array se realizara la mezcla.
     * @returns nada. */  
    #shuffleArray(array: string[]): void{
        array.sort(()=> Math.random() - 0.5);
    }

    /** Metodo utilizado para agregar reorganizar el arreglo
     * @param array se utilizara este array para recorrerlo y agregarle un orden
     * @returns un Map que sera el que se utilizara para poder jugar */
    #agregarFormatoMap(array: string[]): Map<number, EstadoCuadrado> {
        let elementos: Map<number, EstadoCuadrado> = new Map();
        array.forEach((elem , index) => {
            elementos.set(index, {color: elem , elegido: false});
        })
        return elementos
    }

    setCuadradosPorNivel(nivelActual: number): Map<number, EstadoCuadrado> {
        const coloresNivel = this.#coloresNombres.slice(0, nivelActual + 1);
        this.#agregarPar(coloresNivel);
        this.#shuffleArray(coloresNivel);
        return this.#agregarFormatoMap(coloresNivel);
    }
}