import { SERVER_PATH_REGISTRAR } from "../../auxiliar/path";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import SFormularioRegister from "./SFormularioRegistrar";
import { Fragment } from "react";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer } from "../../auxiliar/type";
import { PAGINA, useInformacionContext } from "../../context/Informacion";
import SBotonMenu from "./SBotonMenu";

type Usuario = {
  nombre: string;
  contrasenia: string;
  confirContrasenia: string;
};

function SRegistrar(): JSX.Element {
  const enviador = useEnviarSolicitud<Usuario, RespuestaServer<undefined>>(
    SERVER_PATH_REGISTRAR,
    METODO.POST
  );
  const { cambiarPagina } = useInformacionContext();
  const { pantalla, cambiarPantalla, mantenerPantalla } = usePantallaCarga();

  const registrarse: JSX.Element = (
    <button
      children={"Volver a registrar"}
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
      cambiarPantalla(PANTALLA_CARGA.ERROR);
      return;
    }
    cambiarPantalla(PANTALLA_CARGA.MENSAJE);
  };

  return (
    <Fragment>
      <h2>Registrarse</h2>
      <SFormularioRegister
        enviarInformacion={enviarInformacion}
        cancelar={() => {
          cambiarPagina(PAGINA.MENU);
        }}
      />
      {pantalla === PANTALLA_CARGA.CARGANDO && (
        <DMensajeTemporal mensaje="Cargando..." />
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
          btnVolver={registrarse}
        />
      )}
    </Fragment>
  );
}

export default SRegistrar;
