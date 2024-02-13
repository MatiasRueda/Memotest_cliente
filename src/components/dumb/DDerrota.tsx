import { motion } from "framer-motion";
import { Fade } from "../../auxiliar/animacion";

function DDerrota(props: { opciones: JSX.Element }): JSX.Element {
  return (
    <motion.section className="pantalla post-juego" {...Fade}>
      <h2>Perdiste</h2>
      {props.opciones}
    </motion.section>
  );
}

export default DDerrota;
