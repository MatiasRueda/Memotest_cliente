import { EstadoCuadrado, InformacionMemotest } from "../auxiliar/type";
import ConstructorTablero from "./constructorTablero";
import Cronometro from "./cronometro";
import config from "./memotestConfig";

export default class Memotest {
  #nivel: number = config.nivelInicial;
  #tablero: Map<number, EstadoCuadrado> = new Map(); //Map k=id,  v=object(nombre , elegido)
  #acertados: number[] = []; //Array con id de los cuadrados elegidos correctamente
  #intentos: number = config.intentosInicial;
  #puntajeNivel: number = config.scoreInicial;
  #puntajeTotal: number = config.scoreInicial;
  #segPorNivel: number = config.segPorNivelInicial;
  #segParaMemorizar: number = config.segParaMemorizarInicial;
  #constructorTablero: ConstructorTablero = new ConstructorTablero(
    config.colores
  );
  #cronoNivel: Cronometro = new Cronometro(config.segPorNivelInicial);
  #cronoMemorizar: Cronometro = new Cronometro(config.segParaMemorizarInicial);
  #juegoComenzo: boolean = false;
  #memorizar: boolean = false;
  #perdio: boolean = false;

  constructor() {
    this.#tablero = this.#constructorTablero.setCuadradosPorNivel(this.#nivel);
  }

  #agregarMasRecursos(): boolean {
    return !(this.#nivel % config.masRecursosCadaXNivel);
  }

  #mismoColor(
    cuadradoElegido: EstadoCuadrado,
    ultimoCuadradoElegido: EstadoCuadrado
  ): boolean {
    return cuadradoElegido.color === ultimoCuadradoElegido.color;
  }

  #manipularCuadrado(
    id: number,
    cuadradoElegido: EstadoCuadrado,
    acertado: boolean
  ): void {
    acertado ? this.#acertados.push(id) : this.#acertados.pop();
    cuadradoElegido.elegido = acertado;
    this.#tablero.set(id, cuadradoElegido);
  }

  #primerParSeleccionado(): boolean {
    return !(this.#acertados.length % 2);
  }

  eleccion(id: number): boolean | undefined {
    if (!this.#juegoComenzo) return undefined;
    const cuadradoElegido: EstadoCuadrado | undefined = this.#tablero.get(id);
    if (!cuadradoElegido || cuadradoElegido.elegido) return undefined;
    if (this.#primerParSeleccionado()) {
      this.#manipularCuadrado(id, cuadradoElegido, true);
      return undefined;
    }
    const idUltimoElegido: number = this.#acertados[this.#acertados.length - 1];
    const ultimoCuadradoElegido: EstadoCuadrado | undefined =
      this.#tablero.get(idUltimoElegido); //Obtenemos valores nombre y elegido
    if (!ultimoCuadradoElegido) return false;
    if (
      cuadradoElegido.elegido ||
      !this.#mismoColor(cuadradoElegido, ultimoCuadradoElegido)
    ) {
      this.#manipularCuadrado(idUltimoElegido, ultimoCuadradoElegido, false);
      this.#intentos--;
      return false;
    }
    this.#puntajeNivel += config.masScorePorAcertar;
    this.#manipularCuadrado(id, cuadradoElegido, true);
    if (this.informacion.gano) this.#configurarScore();
    return true;
  }

  cambiarEstadoDeLosCuadrados(elegido: boolean): void {
    this.#tablero.forEach((v, k) => {
      v.elegido = elegido;
    });
  }

  comenzarMemorizado(): void {
    this.#juegoComenzo = false;
    this.#memorizar = true;
    this.#cronoMemorizar.iniciar();
    this.cambiarEstadoDeLosCuadrados(true);
  }

  finalizarMemorizado(): void {
    this.#juegoComenzo = true;
    this.#memorizar = false;
    this.#cronoMemorizar.frenar();
    this.#cronoNivel.iniciar();
    this.cambiarEstadoDeLosCuadrados(false);
  }

  #configurarScore(): void {
    this.#puntajeNivel +=
      this.#cronoNivel.info.tiempo * config.masScorePorSegundos;
    this.#puntajeTotal += this.#puntajeNivel;
  }

  finalizarJuego(): void {
    this.#perdio = true;
  }

  siguienteNivel(): void {
    this.#juegoComenzo = false;
    this.#nivel++;
    this.#perdio = false;
    this.#tablero = this.#constructorTablero.setCuadradosPorNivel(this.#nivel);
    this.cambiarEstadoDeLosCuadrados(false);
    this.#acertados = [];
    this.#puntajeNivel = config.scoreInicial;
    this.#cronoMemorizar.reiniciar = undefined;
    this.#cronoNivel.reiniciar = undefined;
    if (!this.#agregarMasRecursos()) return;
    this.#segPorNivel += config.masSegParaNivel;
    this.#segParaMemorizar += config.masSegParaMemorizar;
    this.#cronoNivel.reiniciar = this.#segPorNivel;
    this.#cronoMemorizar.reiniciar = this.#segParaMemorizar;
    this.#intentos += config.masIntentos;
  }

  reiniciar(): void {
    this.#juegoComenzo = false;
    this.#perdio = false;
    this.#intentos = config.intentosInicial;
    this.#puntajeNivel = config.scoreInicial;
    this.#puntajeTotal = config.scoreInicial;
    this.#cronoNivel.reiniciar = config.segPorNivelInicial;
    this.#cronoMemorizar.reiniciar = config.segParaMemorizarInicial;
    this.#nivel = config.nivelInicial;
    this.#tablero = this.#constructorTablero.setCuadradosPorNivel(this.#nivel);
    this.cambiarEstadoDeLosCuadrados(false);
    this.#acertados = [];
  }

  get informacion(): InformacionMemotest {
    const info: InformacionMemotest = {
      juegoComenzo: this.#juegoComenzo,
      memorizar: this.#memorizar,
      gano: this.#tablero.size === this.#acertados.length,
      perdio: this.#perdio || !this.#intentos,
      ultimoNivelTerminado:
        this.#tablero.size === this.#acertados.length &&
        this.#nivel === config.ultimoNivel,
      puntajeNivel: this.#puntajeNivel,
      puntajeTotal: this.#puntajeTotal,
      intentos: this.#intentos,
      tablero: this.#tablero,
      acertados: this.#acertados,
      nivel: this.#nivel,
      segNivel: this.#cronoNivel.info.tiempo,
      segMemorizar: this.#cronoMemorizar.info.tiempo,
    };
    return info;
  }

  descontarSegundosNivel(): void {
    this.#cronoNivel.descontar();
  }

  descontarSegundosMemorizar(): void {
    this.#cronoMemorizar.descontar();
  }
}
