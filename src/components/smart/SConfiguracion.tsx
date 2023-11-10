import SFormularioConfiguracion from "./SFormularioConfiguracion";
import { PAGINA, useInformacionContext } from "./SInformacion";

function SConfiguracion(): JSX.Element {
    const { cambiarPagina , cambiarVolumenEfecto } = useInformacionContext();
    
    const enviarInformacion = (data: any): void => {
        const volumen: number = Number(data.audio)/100;
        cambiarVolumenEfecto(volumen);
        cambiarPagina(PAGINA.MENU ,volumen);
    } 
    return <SFormularioConfiguracion enviarInformacion={enviarInformacion}
                                     cancelar={() => { cambiarPagina(PAGINA.MENU) }}/>
}

export default SConfiguracion;