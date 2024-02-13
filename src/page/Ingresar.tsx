import { AnimatePresence, motion } from "framer-motion";
import "../asset/style/ingresar.css";
import SIngresar from "../components/smart/SIngresar";
import usePantallaCarga from "../hook/usePantallaCarga";
import { CambiarPantalla } from "../auxiliar/animacion";

function Ingresar(): JSX.Element {
  const { pantalla } = usePantallaCarga();
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={pantalla}
        className="pagina-ingresar"
        {...CambiarPantalla}
      >
        <SIngresar />
      </motion.section>
    </AnimatePresence>
  );
}

export default Ingresar;
