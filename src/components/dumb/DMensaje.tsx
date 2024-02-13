import { motion } from "framer-motion";
import { Fade } from "../../auxiliar/animacion";

function DMensaje(props: {
  mensaje: string;
  btnSiguiente?: JSX.Element | false;
  btnVolver?: JSX.Element | false;
}): JSX.Element {
  return (
    <motion.section className="pantalla mensaje" {...Fade}>
      <h1>{props.mensaje}</h1>
      <div className="cont-botones">
        {props.btnSiguiente}
        {props.btnVolver}
      </div>
    </motion.section>
  );
}

export default DMensaje;
