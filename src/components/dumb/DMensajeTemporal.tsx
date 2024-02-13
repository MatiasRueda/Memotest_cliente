import { motion } from "framer-motion";
import { Fade } from "../../auxiliar/animacion";

function DMensajeTemporal(props: {
  mensaje: string;
  mensajes?: JSX.Element;
}): JSX.Element {
  return (
    <motion.section className="pantalla mensaje-temporal" {...Fade}>
      <h1>{props.mensaje}</h1>
      {props.mensajes}
    </motion.section>
  );
}

export default DMensajeTemporal;
