import { SERVER_PATH_INGRESAR } from "../../auxiliar/path";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import SFormularioIngresar from "./SFormularioIngresar";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer, Usuario } from "../../auxiliar/type";
import { AnimatePresence, motion } from "framer-motion";
import { CambiarPantalla } from "../../auxiliar/animacion";
import { PAGINA, useInformacionContext } from "../../context/Informacion";

function SIngresar(): JSX.Element {
  const enviador = useEnviarSolicitud<Usuario, RespuestaServer<Usuario>>(
    SERVER_PATH_INGRESAR,
    METODO.POST
  );
  const { cambiarPagina, actualizarUsuario } = useInformacionContext();
  const { pantalla, cambiarPantalla, mantenerPantalla } = usePantallaCarga();

  const menu: JSX.Element = (
    <button
      children={"Ir al menu"}
      onClick={() => {
        cambiarPagina(PAGINA.MENU);
      }}
    />
  );
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
    await new Promise((resolve) => setTimeout(resolve, 30000));
    await enviador.trigger(data);
    await mantenerPantalla();
    if (!enviador.data!.exito) {
      cambiarPantalla(PANTALLA_CARGA.ERROR);
      return;
    }
    cambiarPantalla(PANTALLA_CARGA.MENSAJE);
    actualizarUsuario(enviador.data!.dato!);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section key={pantalla} className="cargando" {...CambiarPantalla}>
        <h2>Ingresar</h2>
        <SFormularioIngresar
          enviarInformacion={enviarInformacion}
          cancelar={() => {
            cambiarPagina(PAGINA.MENU);
          }}
        />
        {pantalla === PANTALLA_CARGA.MENSAJE && (
          <DMensaje mensaje={enviador.data!.mensaje} btnSiguiente={menu} />
        )}
        {pantalla === PANTALLA_CARGA.ERROR && (
          <DMensaje
            mensaje={enviador.data!.mensaje}
            btnSiguiente={menu}
            btnVolver={ingresar}
          />
        )}
        {pantalla === PANTALLA_CARGA.CARGANDO && (
          <DMensajeTemporal mensaje="Cargando..." />
        )}
      </motion.section>
    </AnimatePresence>
  );
}

export default SIngresar;
