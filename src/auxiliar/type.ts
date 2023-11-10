export type Usuario = {
    id: number;
    nombre: string;
    contrasenia?: string;
    maxPuntaje: number;
    reglas: number;
}

export type RespuestaServer<T> = {
    exito: boolean,
    mensaje: string,
    dato?: T,
}

export type EstadoCuadrado = {
    color: string,
    elegido: boolean,
}

export type InformacionMemotest = {
    juegoComenzo: boolean;
    memorizar: boolean;
    gano: boolean;
    perdio: boolean;
    ultimoNivelTerminado: boolean;
    puntajeNivel: number;
    puntajeTotal: number;
    intentos: number;
    tablero: Map<number, EstadoCuadrado>;
    acertados: number[]; 
    nivel: number;
    segMemorizar: number;
    segNivel: number;
}
