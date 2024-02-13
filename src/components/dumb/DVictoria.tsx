import { motion } from "framer-motion";
import { Fade } from "../../auxiliar/animacion";

function DVictoria(props: {
  opciones: JSX.Element;
  puntajeNivel: number;
  puntajeTotal: number;
}): JSX.Element {
  return (
    <motion.section className="pantalla post-juego" {...Fade}>
      <h2>Ganaste</h2>
      <h3>Puntaje ganado: +{props.puntajeNivel}</h3>
      <h3>Puntaje total: {props.puntajeTotal}</h3>
      {props.opciones}
    </motion.section>
  );
}

export default DVictoria;
