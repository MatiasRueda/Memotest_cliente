import DLabel from "../dumb/DLabel";
import SFormulario from "./SFormulario";
import SInput from "./SInput";

function SFormularioRegistrar(props: { enviarInformacion: (data: any) => Promise<void>, cancelar?: () => void}): JSX.Element {

    return (
        <SFormulario id="form-registrarse" btnEnviar="Registrarse" 
            onSubmit={props.enviarInformacion}
            cancelar={props.cancelar? {texto: "Cancelar" , accion: props.cancelar} : undefined}>
                <DLabel htmlFor="nombre" texto="Nombre:"/>
                <SInput nombre="nombre" type="text" 
                        reglas={{ required: "Escriba su nombre porfavor", 
                                  maxLength: { value: 8, message: "Maximo 8 caracteres" }}}
                    {...{ placeholder: "escriba su nombre"}}/>
                <DLabel htmlFor="contrasenia" texto="Contrasenia:"/>
                <SInput nombre="contrasenia" role="contrasenia" type="password" 
                    reglas={{ required: "Escriba su contrasenia porfavor",
                              maxLength: { value: 10, message: "Maximo 10 caracteres" },
                              minLength: { value: 3, message: "Minimo 3 caracteres" } }}
                    {...{ placeholder: "escriba su contrasenia"}}/>
                <DLabel htmlFor="confirContrasenia" texto="Confirmar contrasenia:"/>
                <SInput nombre="confirContrasenia" role="contrasenia" type="password" 
                    reglas={{ required: "Reescriba su contrasenia porfavor" }} inputIgual="contrasenia"
                    {...{ placeholder: "reescriba su contrasenia"}}/>
        </SFormulario>
    )
}

export default SFormularioRegistrar;