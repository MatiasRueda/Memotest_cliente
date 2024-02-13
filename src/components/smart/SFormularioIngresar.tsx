import DLabel from "../dumb/DLabel";
import SFormulario from "./SFormulario";
import SInput from "./SInput";

function SFormularioIngresar(props: {
  enviarInformacion: (data: any) => void;
  cancelar: (volumen?: number) => void;
}): JSX.Element {
  const cancelar = {
    texto: "Cancelar",
    accion: props.cancelar,
  };
  return (
    <SFormulario
      id="form-ingresar"
      btnEnviar="Ingresar"
      onSubmit={props.enviarInformacion}
      cancelar={cancelar}
    >
      <DLabel htmlFor="nombre" texto="Nombre:" />
      <SInput
        nombre="nombre"
        type="text"
        reglas={{
          required: "Escriba su nombre porfavor",
          maxLength: { value: 12, message: "Maximo 12 caracteres" },
        }}
        {...{ placeholder: "escriba su nombre" }}
      />
      <DLabel htmlFor="contrasenia" texto="Contrasenia:" />
      <SInput
        nombre="contrasenia"
        role="contrasenia"
        type="password"
        reglas={{
          required: "Escriba su contrasenia porfavor",
          maxLength: { value: 10, message: "Maximo 10 caracteres" },
        }}
        {...{ placeholder: "escriba su contrasenia" }}
      />
    </SFormulario>
  );
}

export default SFormularioIngresar;
