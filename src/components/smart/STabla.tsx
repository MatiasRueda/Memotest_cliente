import { useEffect } from "react";
import { SERVER_PATH_USUARIOS } from "../../auxiliar/path";
import useObtenerInfo from "../../hook/useObtenerInfo";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import DTabla from "../dumb/DTabla";
import DUsuarioTabla from "../dumb/DUsuarioTabla";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer } from "../../auxiliar/type";
import { AnimatePresence } from "framer-motion";
import { PAGINA, useInformacionContext } from "../../context/Informacion";
import SBotonMenu from "./SBotonMenu";
import AMensajes from "../animation/AMensajes";

type UsuarioTabla = {
  nombre: string;
  maxPuntaje: number;
};

function STabla(): JSX.Element {
  const { usuario: usuarioActual, cambiarPagina } = useInformacionContext();
  const { pantalla, cambiarPantalla, mantenerPantalla } = usePantallaCarga(
    PANTALLA_CARGA.CARGANDO
  );
  const { data, isLoading, isValidating } = useObtenerInfo<
    RespuestaServer<UsuarioTabla[]>
  >(SERVER_PATH_USUARIOS, false);

  const usuariosTabla = (usuarios: UsuarioTabla[]): JSX.Element[] => {
    return usuarios.map((usuario) => (
      <DUsuarioTabla
        key={usuario.nombre}
        nombre={usuario.nombre}
        maxPuntaje={usuario.maxPuntaje}
        estilo={{
          color:
            !usuarioActual?.invitado && usuario.nombre === usuarioActual!.nombre
              ? "red"
              : "white",
        }}
      />
    ));
  };

  useEffect(() => {
    const manipularPantalla = async (): Promise<void> => {
      if (isLoading || isValidating) return;
      await mantenerPantalla();
      if (!data!.exito) {
        cambiarPantalla(PANTALLA_CARGA.ERROR);
        return;
      }
      cambiarPantalla(PANTALLA_CARGA.ACTUAL);
    };

    manipularPantalla();
  }, [isLoading || isValidating]);

  return (
    <AnimatePresence>
      <DTabla
        usuarios={usuariosTabla(data!.dato!)}
        volver={() => {
          cambiarPagina(PAGINA.MENU);
        }}
      />
      <AnimatePresence mode="wait" key={pantalla}>
        {pantalla === PANTALLA_CARGA.CARGANDO && (
          <DMensajeTemporal mensaje="Cargando..." mensajes={<AMensajes />} />
        )}
        {pantalla === PANTALLA_CARGA.ERROR && (
          <DMensaje mensaje={data!.mensaje} btnSiguiente={<SBotonMenu />} />
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}

export default STabla;
