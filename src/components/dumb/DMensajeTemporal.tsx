import { motion } from "framer-motion";
import { Fade } from "../../auxiliar/animacion";

function DMensajeTemporal(props: { mensaje: string }): JSX.Element {
  return (
    <motion.section className="pantalla" {...Fade}>
      <h1>{props.mensaje}</h1>
    </motion.section>
  );
}

export default DMensajeTemporal;
