import DOpciones from "../dumb/DOpciones";
import { SERVER_PATH_ACTUALIZAR } from "../../auxiliar/path";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import { RespuestaServer, Usuario } from "../../auxiliar/type";
import { invitado } from "../../auxiliar/invitado";
import { PAGINA, useInformacionContext } from "../../context/Informacion";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";

type Opcion = {
  nombre: string;
  activadorOpcion: () => void;
};

function SOpcionesMenu(): JSX.Element {
  const info = useInformacionContext();
  const { cambiarPantalla } = usePantallaCarga();
  const { trigger } = useEnviarSolicitud<Usuario, RespuestaServer<undefined>>(
    SERVER_PATH_ACTUALIZAR,
    METODO.PUT
  );

  const salir = async (): Promise<void> => {
    if (info.usuario?.invitado) {
      info.sacarUsuario();
      return;
    }
    cambiarPantalla(PANTALLA_CARGA.MENSAJE);
    await trigger(info.usuario!);
    info.sacarUsuario();
  };

  const opcionesSinUsuario: Opcion[] = [
    {
      nombre: "Ingresar",
      activadorOpcion: () => {
        info.cambiarPagina(PAGINA.INGRESAR);
      },
    },
    {
      nombre: "Registrar",
      activadorOpcion: () => {
        info.cambiarPagina(PAGINA.REGISTRAR);
      },
    },
    {
      nombre: "Invitado",
      activadorOpcion: () => {
        info.actualizarUsuario(invitado);
      },
    },
    {
      nombre: "Configuracion",
      activadorOpcion: () => {
        info.cambiarPagina(PAGINA.CONFIGURAR);
      },
    },
  ];

  const opcionesConUsuario: Opcion[] = [
    {
      nombre: "Jugar",
      activadorOpcion: () => {
        !info.usuario?.reglas
          ? info.cambiarPagina(PAGINA.JUEGO)
          : info.cambiarPagina(PAGINA.REGLAS);
      },
    },
    {
      nombre: "Configuracion",
      activadorOpcion: () => {
        info.cambiarPagina(PAGINA.CONFIGURAR);
      },
    },
    {
      nombre: "Tabla",
      activadorOpcion: () => {
        info.cambiarPagina(PAGINA.TABLA);
      },
    },
    { nombre: "Salir", activadorOpcion: salir },
  ];

  const opciones: Opcion[] =
    info.usuario || info.salidaUsuario
      ? opcionesConUsuario
      : opcionesSinUsuario;

  const opcionesCreadas: JSX.Element[] = opciones.map((opcion) => (
    <button key={opcion.nombre} onClick={opcion.activadorOpcion}>
      {opcion.nombre}
    </button>
  ));

  return <DOpciones clase="cont-opciones-menu" opciones={opcionesCreadas} />;
}

export default SOpcionesMenu;
