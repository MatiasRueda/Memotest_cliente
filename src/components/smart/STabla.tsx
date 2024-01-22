import { useEffect } from "react";
import { SERVER_PATH_USUARIOS } from "../../auxiliar/path";
import useObtenerInfo from "../../hook/useObtenerInfo";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import DTabla from "../dumb/DTabla";
import DUsuarioTabla from "../dumb/DUsuarioTabla";
import { PAGINA, useInformacionContext } from "./SInformacion";
import DMensaje from "../dumb/DMensaje";
import { RespuestaServer } from "../../auxiliar/type";
import { motion } from "framer-motion";
import { CambiarPantalla } from "../../auxiliar/animacion";

type UsuarioTabla = {
    nombre: string;
    maxPuntaje: number;
}

function STabla(): JSX.Element {
    const { usuario: usuarioActual , cambiarPagina } = useInformacionContext();
    const { pantalla , cambiarPantalla , mantenerPantalla } = usePantallaCarga(PANTALLA_CARGA.CARGANDO);
    const { data , isLoading , isValidating } = useObtenerInfo<RespuestaServer<UsuarioTabla[]>>(SERVER_PATH_USUARIOS, false);
    const usuariosTabla = (usuarios: UsuarioTabla[]): JSX.Element[] => {
        return usuarios.map((usuario) => <DUsuarioTabla key={usuario.nombre}
                                            nombre={usuario.nombre}
                                            maxPuntaje={usuario.maxPuntaje}
                                            estilo={{color: usuario.nombre === usuarioActual!.nombre? 
                                                "red" : "white"}} />);
    }

    useEffect(() => {
        const manipularPantalla = async (): Promise<void> => {
            if (isLoading || isValidating) 
                return;
            await mantenerPantalla();
            if (!data!.exito) {
                cambiarPantalla(PANTALLA_CARGA.ERROR);
                return;
            }
            cambiarPantalla(PANTALLA_CARGA.ACTUAL);
        } 
        
        manipularPantalla();

    }, [isLoading || isValidating])

    return (
        <motion.section 
            key={pantalla}
            className="cargando"
            {...CambiarPantalla}>
            {pantalla === PANTALLA_CARGA.CARGANDO && 
                <DMensajeTemporal mensaje="Cargando..."/>}
            {pantalla === PANTALLA_CARGA.ERROR && 
                <DMensaje mensaje={data!.mensaje}
                          btnSiguiente={<button onClick={() => { cambiarPagina(PAGINA.MENU) }}>
                                            Volver al menu
                                        </button>}/>}
            {pantalla === PANTALLA_CARGA.ACTUAL && 
                    <DTabla usuarios={usuariosTabla(data!.dato!)} 
                            volver={() => { cambiarPagina(PAGINA.MENU) }}/>}
        </motion.section>
    )
}

export default STabla;