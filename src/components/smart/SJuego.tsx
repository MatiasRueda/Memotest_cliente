import SOpciones from "./SOpciones";
import Memotest from "../../logic/memotest";
import DJuego from "../dumb/DJuego";
import useMemotest from "../../hook/useMemotest";
import STiempo from "./STiempo";
import DVictoria from "../dumb/DVictoria";
import DDerrota from "../dumb/DDerrota";
import DFinal from "../dumb/DFinal";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import { SERVER_PATH_ACTUALIZAR } from "../../auxiliar/path";
import usePantallaJuego, { PANTALLA_JUEGO } from "../../hook/usePantallaJuego";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer, Usuario } from "../../auxiliar/type";
import { AnimatePresence } from "framer-motion";
import { PAGINA, useInformacionContext } from "../../context/Informacion";
import SBotonMenu from "./SBotonMenu";

function SJuego(props: { memotest: Memotest }): JSX.Element {
  const { usuario, cambiarPagina, actualizarUsuario } = useInformacionContext();
  const { informacion, metodosMemotest } = useMemotest(props.memotest);
  const { pantalla: pantallaJuego } = usePantallaJuego(informacion);
  const { pantalla, mantenerPantalla, cambiarPantalla } = usePantallaCarga();
  const enviador = useEnviarSolicitud<Usuario, RespuestaServer<undefined>>(
    SERVER_PATH_ACTUALIZAR,
    METODO.PUT
  );

  const volverAJugar = async (): Promise<void> => {
    if (informacion.puntajeTotal <= usuario!.maxPuntaje) {
      metodosMemotest.reiniciar();
      return;
    }
    const usuarioActualizado: Usuario = {
      ...usuario!,
      maxPuntaje: informacion.puntajeTotal,
    };
    if (usuarioActualizado.invitado) {
      actualizarUsuario(usuarioActualizado);
      metodosMemotest.reiniciar();
      cambiarPantalla(PANTALLA_CARGA.ACTUAL);
      return;
    }
    cambiarPantalla(PANTALLA_CARGA.MENSAJE);
    await enviador.trigger(usuarioActualizado);
    await mantenerPantalla();
    if (!enviador.data!.exito) {
      cambiarPantalla(PANTALLA_CARGA.ERROR);
      return;
    }
    actualizarUsuario(usuarioActualizado);
    metodosMemotest.reiniciar();
    cambiarPantalla(PANTALLA_CARGA.ACTUAL);
  };

  const volverAlMenu = async (): Promise<void> => {
    if (informacion.puntajeTotal <= usuario!.maxPuntaje) {
      cambiarPagina(PAGINA.MENU);
      return;
    }
    const usuarioActualizado: Usuario = {
      ...usuario!,
      maxPuntaje: informacion.puntajeTotal,
    };
    if (usuarioActualizado.invitado) {
      metodosMemotest.reiniciar();
      actualizarUsuario(usuarioActualizado);
      cambiarPagina(PAGINA.MENU);
      return;
    }

    metodosMemotest.reiniciar();
    cambiarPantalla(PANTALLA_CARGA.MENSAJE);
    await enviador.trigger(usuarioActualizado);
    if (!enviador.data!.exito) {
      cambiarPantalla(PANTALLA_CARGA.ERROR);
      return;
    }
    actualizarUsuario(usuarioActualizado);
    cambiarPagina(PAGINA.MENU);
  };

  const opcionesFinal = [
    { nombre: "Volver al menu", activadorOpcion: volverAlMenu },
  ];

  const opcionesDerrota = [
    { nombre: "Volver al menu", activadorOpcion: volverAlMenu },
    { nombre: "Volver a jugar", activadorOpcion: volverAJugar },
  ];

  const opcionesVictoria = [
    {
      nombre: "Siguiente nivel",
      activadorOpcion: metodosMemotest.siguienteNivel,
    },
  ];
  return (
    <AnimatePresence>
      <div className="cont-juego">
        <h1 className="cont-nivel">Nivel: {informacion.nivel}</h1>
        <DJuego
          informacion={informacion}
          elegirCuadrado={metodosMemotest.elegirCuadrado}
          usuario={usuario!}
          tiempo={
            <STiempo
              informacion={informacion}
              segNivel={informacion.segNivel}
              segMemorizar={informacion.segMemorizar}
              descontarTiempoMemorizar={
                metodosMemotest.descontarTiempoMemorizar
              }
              descontarTiempoNivel={metodosMemotest.descontarTiempoNivel}
              comenzarMemo={metodosMemotest.comenzarMemorizado}
            />
          }
        />
        <AnimatePresence mode="wait" key={pantalla}>
          {pantalla === PANTALLA_CARGA.MENSAJE && (
            <DMensajeTemporal mensaje="Actualizando datos..." />
          )}
          {pantalla === PANTALLA_CARGA.ERROR && (
            <DMensaje
              mensaje={enviador.data!.mensaje}
              btnSiguiente={<SBotonMenu />}
            />
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait" key={pantallaJuego}>
          {pantallaJuego === PANTALLA_JUEGO.FINAL && (
            <DFinal
              puntajeTotal={informacion.puntajeTotal}
              opciones={<SOpciones opciones={opcionesFinal} />}
            />
          )}

          {pantallaJuego === PANTALLA_JUEGO.VICTORIA && (
            <DVictoria
              puntajeNivel={informacion.puntajeNivel}
              puntajeTotal={informacion.puntajeTotal}
              opciones={<SOpciones opciones={opcionesVictoria} />}
            />
          )}

          {pantallaJuego === PANTALLA_JUEGO.DERROTA && (
            <DDerrota opciones={<SOpciones opciones={opcionesDerrota} />} />
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}

export default SJuego;
