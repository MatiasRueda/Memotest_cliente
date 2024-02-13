import { useEffect } from "react";
import DCronometro from "../dumb/DCronometro";

function SCronometro(props: {
  actualizarTiempo: () => number;
  tiempo: number;
  texto: string;
}): JSX.Element {
  useEffect(() => {
    const interval = setInterval(() => {
      if (!props.actualizarTiempo()) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <DCronometro tiempo={props.tiempo} texto={props.texto} />;
}

export default SCronometro;
