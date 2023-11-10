import { Usuario } from "../../auxiliar/type";
import SFormularioReglas from "./SFormularioReglas";
import { PAGINA, useInformacionContext } from "./SInformacion";

function SReglas(): JSX.Element {
    const { usuario , actualizarUsuario , cambiarPagina } = useInformacionContext();

    const reglas = (data: any): void => {
        const usuarioActualizado: Usuario = {...usuario! , reglas: data.reglas? 0 : 1};
        actualizarUsuario(usuarioActualizado);
        cambiarPagina(PAGINA.JUEGO);
    }

    return <SFormularioReglas enviarInformacion={reglas}/>
}

export default SReglas;