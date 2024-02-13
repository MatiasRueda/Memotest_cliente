import { CSSProperties } from "react";

function DUsuarioTabla(props: {
  nombre: string;
  maxPuntaje: number;
  estilo: CSSProperties;
}): JSX.Element {
  return (
    <div className="cont-usuario-tabla">
      <p style={props.estilo}>{props.nombre}</p>
      <p>{props.maxPuntaje}</p>
    </div>
  );
}

export default DUsuarioTabla;
