import DLabel from "../dumb/DLabel";
import SFormulario from "./SFormulario";
import SInput from "./SInput";

function SFormularioReglas(props: { enviarInformacion: (data: any) => void }): JSX.Element {
    return (
        <SFormulario id="form-reglas" btnEnviar="empezar" onSubmit={props.enviarInformacion}>
            <SInput nombre="reglas" type="checkbox"/>
            <DLabel htmlFor="reglas" texto="No volver a mostrar" />
        </SFormulario>
    )
}

export default SFormularioReglas;