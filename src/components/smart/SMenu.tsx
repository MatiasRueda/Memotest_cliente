import SOpcionesMenu from "./SOpcionesMenu";
import SSaludo from "./SSaludo";
import usePantallaCarga, { PANTALLA_CARGA } from "../../hook/usePantallaCarga";
import { Fragment, useEffect } from "react";
import DMensajeTemporal from "../dumb/DMensajeTemporal";
import { useInformacionContext } from "./SInformacion";

function SMenu(): JSX.Element {
    const { pantalla , cambiarPantalla , mantenerPantalla } = usePantallaCarga();
    const { salidaUsuario , terminoDeSalirUsuario } = useInformacionContext();

    useEffect(() => {
        const manipularPantalla = async (): Promise<void> => {
            if (!salidaUsuario) 
                return;
            cambiarPantalla(PANTALLA_CARGA.MENSAJE);
            await mantenerPantalla();
            terminoDeSalirUsuario();
            cambiarPantalla(PANTALLA_CARGA.ACTUAL);
        } 
        
        manipularPantalla();

    }, [salidaUsuario])


    return (
        <Fragment >
            {pantalla === PANTALLA_CARGA.ACTUAL &&  
                <Fragment>
                    <h1>Memotest</h1>
                    <SSaludo/>
                    <SOpcionesMenu/>
                </Fragment>}
            {pantalla === PANTALLA_CARGA.MENSAJE && 
                <DMensajeTemporal mensaje="Saliendo..."/>}
        </Fragment>
    )
}

export default SMenu;