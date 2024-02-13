import { SERVER_PATH_INGRESAR } from "../../auxiliar/path";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import SFormularioIngresar from "./SFormularioIngresar";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer, Usuario } from "../../auxiliar/type";
import { PAGINA, useInformacionContext } from "../../context/Informacion";
import { Fragment } from "react";
import SBotonMenu from "./SBotonMenu";
import AMensajes from "../animation/AMensajes";

function SIngresar(): JSX.Element {
  const enviador = useEnviarSolicitud<Usuario, RespuestaServer<Usuario>>(
    SERVER_PATH_INGRESAR,
    METODO.POST
  );
  const { cambiarPagina, actualizarUsuario, primeraVez, sacarPrimeraVez } =
    useInformacionContext();
  const { pantalla, cambiarPantalla, mantenerPantalla } = usePantallaCarga();

  const ingresar: JSX.Element = (
    <button
      children={"Volver a ingresar"}
      onClick={() => {
        cambiarPantalla(PANTALLA_CARGA.ACTUAL);
      }}
    />
  );

  const enviarInformacion = async (data: any): Promise<void> => {
    cambiarPantalla(PANTALLA_CARGA.CARGANDO);
    await enviador.trigger(data);
    await mantenerPantalla();
    if (!enviador.data!.exito) {
      sacarPrimeraVez();
      cambiarPantalla(PANTALLA_CARGA.ERROR);
      return;
    }
    cambiarPantalla(PANTALLA_CARGA.MENSAJE);
    actualizarUsuario(enviador.data!.dato!);
    sacarPrimeraVez();
  };

  return (
    <Fragment>
      {pantalla === PANTALLA_CARGA.ACTUAL && (
        <Fragment>
          <h2>Ingresar</h2>
          <SFormularioIngresar
            enviarInformacion={enviarInformacion}
            cancelar={() => {
              cambiarPagina(PAGINA.MENU);
            }}
          />
        </Fragment>
      )}
      {pantalla === PANTALLA_CARGA.MENSAJE && (
        <DMensaje
          mensaje={enviador.data!.mensaje}
          btnSiguiente={<SBotonMenu />}
        />
      )}
      {pantalla === PANTALLA_CARGA.ERROR && (
        <DMensaje
          mensaje={enviador.data!.mensaje}
          btnSiguiente={<SBotonMenu />}
          btnVolver={ingresar}
        />
      )}
      {pantalla === PANTALLA_CARGA.CARGANDO && (
        <DMensajeTemporal
          mensaje="Cargando..."
          mensajes={primeraVez && <AMensajes />}
        />
      )}
    </Fragment>
  );
}

export default SIngresar;
