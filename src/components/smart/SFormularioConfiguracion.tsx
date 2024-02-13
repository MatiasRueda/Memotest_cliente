import audio, { EFECTO } from "../../auxiliar/efecto";
import { useInformacionContext } from "../../context/Informacion";
import DLabel from "../dumb/DLabel";
import SFormulario from "./SFormulario";
import SInput from "./SInput";

function SFormularioConfiguracion(props: {
  enviarInformacion: (data: any) => void;
  cancelar: () => void;
}): JSX.Element {
  const informacion = useInformacionContext();

  const reproducirEfecto = (data: any): void => {
    if (!data.target.value) return;
    const volumen: number = Number(data.target.value) / 100;
    const efecto = audio(EFECTO.ACIERTO, volumen);
    efecto.play();
  };

  const cancelar = {
    texto: "Cancelar",
    accion: props.cancelar,
  };

  return (
    <SFormulario
      id="form-configuracion"
      btnEnviar="Aplicar"
      onSubmit={props.enviarInformacion}
      cancelar={cancelar}
    >
      <DLabel texto="Efecto" htmlFor={"audio"} />
      <SInput
        nombre="audio"
        type="range"
        {...{
          min: "0",
          max: "10",
          step: "1",
          defaultValue: Math.round(informacion.volumenEfecto * 100),
          onInput: reproducirEfecto,
        }}
      />
    </SFormulario>
  );
}

export default SFormularioConfiguracion;
