import { EstadoCuadrado } from "../../auxiliar/type";
import Memotest from "../../logic/memotest";

const encontrarPar = (
  id: number,
  estado: EstadoCuadrado,
  cuadrados: Map<number, EstadoCuadrado>
): number => {
  let idEncontrado: number = -1;
  cuadrados.forEach((estadosVerificar, idVerificar) => {
    if (
      idVerificar === id ||
      idEncontrado !== -1 ||
      estadosVerificar.color !== estado.color
    )
      return;
    idEncontrado = idVerificar;
  });
  return idEncontrado;
};

const encontrarPares = (
  cuadrados: Map<number, EstadoCuadrado>
): Map<number, number> => {
  let parEncontrado: Map<number, number> = new Map();
  let idsYaEncontrados: number[] = [];
  cuadrados.forEach((estado, id) => {
    if (idsYaEncontrados.find((idEncontrado) => idEncontrado === id)) return;
    idsYaEncontrados.push(id);
    const idEncontrado: number = encontrarPar(id, estado, cuadrados);
    idsYaEncontrados.push(idEncontrado);
    parEncontrado.set(id, idEncontrado);
  });
  return parEncontrado;
};

describe("Parte 1 - Memotest creado correctamente", () => {
  test("Se obtiene la clase llamada memotest sin error", () => {
    try {
      new Memotest();
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });
});

describe("Parte 2 - Valores iniciales correctos", () => {
  let memotest: Memotest;
  beforeEach(() => {
    memotest = new Memotest();
  });

  test("Se puede obtener el numero de intentos sin error", () => {
    try {
      memotest.informacion.intentos;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("Se el numero de intentos es mayor a 0", () => {
    const intentos: number = memotest.informacion.intentos;
    expect(intentos).toBeGreaterThan(0);
  });

  test("Se puede obtener el nivel inicial sin error", () => {
    try {
      memotest.informacion.nivel;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("El nivel inicial es 1", () => {
    const nivelInicial: number = memotest.informacion.nivel;
    expect(nivelInicial).toBe(1);
  });

  test("Se puede obtener los segundos para memorizar sin error", () => {
    try {
      memotest.informacion.segMemorizar;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("Los segundos para memorizar son mayores o iguales a 5", () => {
    const segParaMemorizar: number = memotest.informacion.segMemorizar;
    expect(segParaMemorizar).toBeGreaterThanOrEqual(5);
  });

  test("Se puede obtener los segundos para completar el nivel sin error", () => {
    try {
      memotest.informacion.segNivel;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("Los segundos para completar el nivel son mayores o iguales a 5", () => {
    const segPorNivel: number = memotest.informacion.segNivel;
    expect(segPorNivel).toBeGreaterThanOrEqual(5);
  });

  test("Se puede obtener el puntaje sin error", () => {
    try {
      memotest.informacion.puntajeNivel;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("El puntaje inicial es 0", () => {
    const puntajeInicial: number = memotest.informacion.puntajeNivel;
    expect(puntajeInicial).toBe(0);
  });

  test("Se puede saber si se gano sin error", () => {
    try {
      memotest.informacion.gano;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("El juego comienza con gano en false", () => {
    const ganoEstadoInicial: boolean = memotest.informacion.gano;
    expect(ganoEstadoInicial).toBeFalsy();
  });

  test("Se puede saber si se perdio sin error", () => {
    try {
      memotest.informacion.perdio;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("El juego comienza con perdio en false", () => {
    const perdioEstadoInicial: boolean = memotest.informacion.perdio;
    expect(perdioEstadoInicial).toBeFalsy();
  });

  test("Se puede obtener los cuadrados sin error", () => {
    try {
      memotest.informacion.tablero;
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("Se puede obtener los cuadrados y no esta vacio", () => {
    const cuadrados: Map<number, EstadoCuadrado> = memotest.informacion.tablero;
    expect(cuadrados.size).not.toBe(0);
  });

  test("Se puede obtener los cuadrados y son 4", () => {
    const cuadrados: Map<number, EstadoCuadrado> = memotest.informacion.tablero;
    expect(cuadrados.size).toBe(4);
  });

  test("Todos los cuadrados estan NO elegidos (estan ocultos)", () => {
    const cuadrados: Map<number, EstadoCuadrado> = memotest.informacion.tablero;
    let cuadradosElegidos = false;
    cuadrados.forEach((estado, id) => (cuadradosElegidos ||= estado.elegido));
    expect(cuadradosElegidos).toBeFalsy();
  });

  test("Se puede cambiar el estado de todos los cuadrados", () => {
    let estadoInicial = false;
    let estadoPostCambio = true;
    const cuadrados: Map<number, EstadoCuadrado> = memotest.informacion.tablero;
    cuadrados.forEach((estado, id) => (estadoInicial ||= estado.elegido));
    memotest.cambiarEstadoDeLosCuadrados(true);
    const cuadradosPostCambio: Map<number, EstadoCuadrado> =
      memotest.informacion.tablero;
    cuadradosPostCambio.forEach(
      (estado, id) => (estadoPostCambio &&= estado.elegido)
    );
    expect(estadoInicial).not.toEqual(estadoPostCambio);
  });
});

describe("Parte 3 - Se puede jugar", () => {
  let memotest: Memotest;
  beforeEach(() => {
    memotest = new Memotest();
    memotest.finalizarMemorizado();
  });

  test("Se puede elegir sin error", () => {
    try {
      memotest.eleccion(1);
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("Elegir devuelve undefined", () => {
    expect(memotest.eleccion(0)).toBeUndefined();
  });

  test("Elegir un solo cuadrado no aumenta el puntaje", () => {
    const puntajeInicial = memotest.informacion.puntajeNivel;
    memotest.eleccion(0);
    const puntajeActual = memotest.informacion.puntajeNivel;
    expect(puntajeActual).toBe(puntajeInicial);
  });

  test("Elegir correctamente devuelve true", () => {
    memotest.eleccion(0);
    const resultado = encontrarPares(memotest.informacion.tablero);
    const idPar = resultado.get(0)!;
    expect(memotest.eleccion(idPar)).toBeTruthy();
  });

  test("Elegir correctamente no descuenta un intento", () => {
    const intentosIniciales = memotest.informacion.intentos;
    memotest.eleccion(0);
    const resultado = encontrarPares(memotest.informacion.tablero);
    const idPar = resultado.get(0)!;
    memotest.eleccion(idPar);
    const intentosActuales = memotest.informacion.intentos;
    expect(intentosIniciales).toBe(intentosActuales);
  });

  test("Elegir correctamente aumenta el puntaje", () => {
    const puntajeInicial = memotest.informacion.puntajeNivel;
    memotest.eleccion(0);
    const resultado = encontrarPares(memotest.informacion.tablero);
    const idPar = resultado.get(0)!;
    memotest.eleccion(idPar);
    const puntajeActual = memotest.informacion.puntajeNivel;
    expect(puntajeInicial).toBeLessThan(puntajeActual);
  });

  test("Elegir dos veces el mismo da undefined", () => {
    memotest.eleccion(0);
    expect(memotest.eleccion(0)).toBeUndefined();
  });

  test("Elegir dos veces el mismo no descuenta un intento", () => {
    const intentosIniciales: number = memotest.informacion.intentos;
    memotest.eleccion(0);
    memotest.eleccion(0);
    const intentosActuales: number = memotest.informacion.intentos;
    expect(intentosIniciales).toBe(intentosActuales);
  });

  test("Elegir dos veces el mismo deja el mismo puntaje", () => {
    const puntajeInicial: number = memotest.informacion.puntajeNivel;
    memotest.eleccion(0);
    memotest.eleccion(0);
    const puntajeActual: number = memotest.informacion.puntajeNivel;
    expect(puntajeInicial).toBe(puntajeActual);
  });

  test("Elegir dos veces el mismo no cambia los elegidos correctamente", () => {
    memotest.eleccion(0);
    const cantCorrectos: number = memotest.informacion.acertados.length;
    memotest.eleccion(0);
    expect(memotest.informacion.acertados).toHaveLength(cantCorrectos);
  });
});

describe("Parte 4 - Post game", () => {
  let memotest: Memotest;
  beforeEach(() => {
    memotest = new Memotest();
    memotest.finalizarMemorizado();
  });

  test("Se puede subir de nivel", () => {
    try {
      memotest.siguienteNivel();
    } catch (e) {
      expect(true).toBeFalsy();
    }
    expect(true).toBeTruthy();
  });

  test("Se sube de nivel y el nivel cambia", () => {
    memotest.siguienteNivel();
    expect(memotest.informacion.nivel).toBe(2);
  });

  test("Se sube de nivel y los cuadrados correctos se borran", () => {
    memotest.siguienteNivel();
    expect(memotest.informacion.acertados.length).toBe(0);
  });

  test("Se sube de nivel y se mantienen iguales el nro de intentos", () => {
    const intentosAntesDeSubirNivel: number = memotest.informacion.intentos;
    memotest.siguienteNivel();
    expect(intentosAntesDeSubirNivel).toBe(memotest.informacion.intentos);
  });

  test("Se sube de nivel y el puntaje sigue siendo el mismo", () => {
    const puntajeInicial: number = memotest.informacion.puntajeNivel;
    memotest.siguienteNivel();
    expect(puntajeInicial).toBe(memotest.informacion.puntajeNivel);
  });

  test("Se sube de nivel y el numero de cuadrados aumenta", () => {
    const nroCuadrados: number = memotest.informacion.tablero.size;
    memotest.siguienteNivel();
    expect(nroCuadrados).toBeLessThan(memotest.informacion.tablero.size);
  });

  test("Se sube de nivel y los cuadrados estan ocultos de nuevo", () => {
    memotest.siguienteNivel();
    const cuadrados: Map<number, EstadoCuadrado> = memotest.informacion.tablero;
    let cuadradosElegidos = false;
    cuadrados.forEach((estado, id) => (cuadradosElegidos ||= estado.elegido));
    expect(cuadradosElegidos).toBeFalsy();
  });
});
