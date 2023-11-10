import { SERVER_PATH_INGRESAR } from "../../auxiliar/path";
import useEnviarSolicitud, { METODO } from "../../hook/useEnviarSolicitud";
import SFormularioIngresar from "./SFormularioIngresar";
import { PAGINA, useInformacionContext } from "./SInformacion";
import ACargando from "../animation/ACargando";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import { Fragment } from "react";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer, Usuario } from "../../auxiliar/type";

function SIngresar(): JSX.Element {
    const enviador = useEnviarSolicitud<Usuario, RespuestaServer<Usuario>>(SERVER_PATH_INGRESAR, METODO.POST);
    const { cambiarPagina , actualizarUsuario  } = useInformacionContext();
    const { pantalla , cambiarPantalla , mantenerPantalla } = usePantallaCarga();

    const enviarInformacion = async (data: any): Promise<void> => {
        cambiarPantalla(PANTALLA_CARGA.CARGANDO);
        await enviador.trigger(data);
        await mantenerPantalla();
        if (!enviador.data!.exito) {
            cambiarPantalla(PANTALLA_CARGA.ERROR);
            return;
        }
        cambiarPantalla(PANTALLA_CARGA.MENSAJE);
        actualizarUsuario(enviador.data!.dato!);
    }

    return (
        <ACargando llave={pantalla}>
            {pantalla === PANTALLA_CARGA.CARGANDO && 
                <DMensajeTemporal mensaje="Cargando..."/>}
            {pantalla === PANTALLA_CARGA.MENSAJE &&
                <DMensaje mensaje={enviador.data!.mensaje}
                          btnSiguiente={<button onClick={() => { cambiarPagina(PAGINA.MENU) }}>
                                            Ir al menu
                                        </button>}/>}
            {pantalla === PANTALLA_CARGA.ACTUAL && 
                <Fragment>
                    <h2>Ingresar</h2>
                    <SFormularioIngresar enviarInformacion={enviarInformacion}
                                         cancelar={() => { cambiarPagina(PAGINA.MENU) }}/>
                </Fragment>}
            {pantalla === PANTALLA_CARGA.ERROR && 
                <DMensaje mensaje={enviador.data!.mensaje}
                          btnSiguiente={<button onClick={() => { cambiarPagina(PAGINA.MENU) }}>
                                            Ir al menu
                                        </button>}
                          btnVolver={<button onClick={() => { cambiarPantalla(PANTALLA_CARGA.ACTUAL) }}>
                                        Volver a ingresar
                                     </button>}/>}
        </ACargando>
    )
}

export default SIngresar;