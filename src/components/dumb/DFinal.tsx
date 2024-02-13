import { motion } from "framer-motion";
import { Fade } from "../../auxiliar/animacion";

function DFinal(props: {
  opciones: JSX.Element;
  puntajeTotal: number;
}): JSX.Element {
  return (
    <motion.section className="pantalla post-juego" {...Fade}>
      <h2>Terminaste el juego!</h2>
      <h3>Puntaje final: {props.puntajeTotal}</h3>
      {props.opciones}
    </motion.section>
  );
}

export default DFinal;
