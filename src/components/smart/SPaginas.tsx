import Memotest from "../../logic/memotest";
import { PAGINA, useInformacionContext } from "./SInformacion";
import Menu from "../../page/Menu";
import Ingresar from "../../page/Ingresar";
import Registrar from "../../page/Registrar";
import Reglas from "../../page/Reglas";
import Juego from "../../page/Juego";
import Configuracion from "../../page/Configuracion";
import AFade from "../animation/AFade";
import Tabla from "../../page/Tabla";

function SManejoPantallas(): JSX.Element {
    const { pagina } = useInformacionContext();
    return (
        <AFade llave={pagina}>
            {pagina === PAGINA.MENU && 
                <Menu/>}
            {pagina === PAGINA.INGRESAR  && 
                <Ingresar/>}
            {pagina === PAGINA.REGISTRAR  && 
                <Registrar/>}
            {pagina === PAGINA.REGLAS && 
                <Reglas/>}
            {pagina === PAGINA.CONFIGURAR && 
                <Configuracion/>}
            {pagina === PAGINA.JUEGO && 
                <Juego memotest={new Memotest()} />}
            {pagina === PAGINA.TABLA && 
                <Tabla/>}
        </AFade>
    )
}

export default SManejoPantallas;