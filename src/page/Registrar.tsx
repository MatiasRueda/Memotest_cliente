import "../asset/style/registrarse.css";
import { AnimatePresence, motion } from "framer-motion";
import SRegistrar from "../components/smart/SRegistrar";
import usePantallaCarga from "../hook/usePantallaCarga";
import { CambiarPantalla } from "../auxiliar/animacion";

function Registrar(): JSX.Element {
  const { pantalla } = usePantallaCarga();
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={pantalla}
        className="pagina-registrarse"
        {...CambiarPantalla}
      >
        <SRegistrar />
      </motion.section>
    </AnimatePresence>
  );
}

export default Registrar;
