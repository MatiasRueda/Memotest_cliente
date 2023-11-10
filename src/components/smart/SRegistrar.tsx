import { SERVER_PATH_REGISTRAR } from "../../auxiliar/path";
import useEnviarSolicitud , { METODO } from "../../hook/useEnviarSolicitud";
import SFormularioRegister from "./SFormularioRegistrar";
import { PAGINA, useInformacionContext } from "./SInformacion";
import { Fragment } from "react";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import ACargando from "../animation/ACargando";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer } from "../../auxiliar/type";

type Usuario = {
    nombre: string;
    contrasenia: string;
    confirContrasenia: string;
}

function SRegistrar(): JSX.Element {
    const enviador =  useEnviarSolicitud<Usuario, RespuestaServer<undefined>>( SERVER_PATH_REGISTRAR, METODO.POST );
    const { cambiarPagina } = useInformacionContext();
    const { pantalla , cambiarPantalla , mantenerPantalla } = usePantallaCarga();

    const enviarInformacion = async (data: any): Promise<void> => {
        cambiarPantalla(PANTALLA_CARGA.CARGANDO);
        await enviador.trigger(data);
        await mantenerPantalla();
        if (!enviador.data!.exito) {
            cambiarPantalla(PANTALLA_CARGA.ERROR);
            return;
        }
        cambiarPantalla(PANTALLA_CARGA.MENSAJE)
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
                    <h2>Registrarse</h2>
                    <SFormularioRegister enviarInformacion={enviarInformacion}
                                         cancelar={() => { cambiarPagina(PAGINA.MENU) }}/>
                </Fragment>}

            {pantalla === PANTALLA_CARGA.ERROR && 
                <DMensaje mensaje={enviador.data!.mensaje}
                        btnSiguiente={<button onClick={() => { cambiarPagina(PAGINA.MENU) }}>
                                        Ir al menu
                                      </button>}
                          btnVolver={<button onClick={() => { cambiarPantalla(PANTALLA_CARGA.ACTUAL) }}>
                                        Volver a registrar
                                     </button>}/>}
        </ACargando>
    )
}

export default SRegistrar;