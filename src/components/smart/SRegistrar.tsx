import { SERVER_PATH_REGISTRAR } from "../../auxiliar/path";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import SFormularioRegister from "./SFormularioRegistrar";
import { Fragment } from "react";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer } from "../../auxiliar/type";
import { motion } from "framer-motion";
import { CambiarPantalla } from "../../auxiliar/animacion";
import { PAGINA, useInformacionContext } from "../../context/Informacion";

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
    <motion.section key={pantalla} className="cargando" {...CambiarPantalla}>
      {pantalla === PANTALLA_CARGA.CARGANDO && (
        <DMensajeTemporal mensaje="Cargando..." />
      )}
      {pantalla === PANTALLA_CARGA.MENSAJE && (
        <DMensaje
          mensaje={enviador.data!.mensaje}
          btnSiguiente={
            <button
              onClick={() => {
                cambiarPagina(PAGINA.MENU);
              }}
            >
              Ir al menu
            </button>
          }
        />
      )}
      {pantalla === PANTALLA_CARGA.ACTUAL && (
        <Fragment>
          <h2>Registrarse</h2>
          <SFormularioRegister
            enviarInformacion={enviarInformacion}
            cancelar={() => {
              cambiarPagina(PAGINA.MENU);
            }}
          />
        </Fragment>
      )}

      {pantalla === PANTALLA_CARGA.ERROR && (
        <DMensaje
          mensaje={enviador.data!.mensaje}
          btnSiguiente={
            <button
              children={"Ir al menu"}
              onClick={() => {
                cambiarPagina(PAGINA.MENU);
              }}
            />
          }
          btnVolver={
            <button
              children={"Volver a registrar"}
              onClick={() => {
                cambiarPantalla(PANTALLA_CARGA.ACTUAL);
              }}
            />
          }
        />
      )}
    </motion.section>
  );
}

export default SRegistrar;
