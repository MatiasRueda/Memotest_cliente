import Memotest from "../../logic/memotest";
import Menu from "../../page/Menu";
import Ingresar from "../../page/Ingresar";
import Registrar from "../../page/Registrar";
import Reglas from "../../page/Reglas";
import Juego from "../../page/Juego";
import Configuracion from "../../page/Configuracion";
import Tabla from "../../page/Tabla";
import { AnimatePresence, motion } from "framer-motion";
import { Fade } from "../../auxiliar/animacion";
import { PAGINA, useInformacionContext } from "../../context/Informacion";

function SManejoPantallas(): JSX.Element {
  const { pagina } = useInformacionContext();
  return (
    <AnimatePresence mode="wait">
      <motion.main key={pagina} className="fade" {...Fade}>
        {pagina === PAGINA.MENU && <Menu />}
        {pagina === PAGINA.INGRESAR && <Ingresar />}
        {pagina === PAGINA.REGISTRAR && <Registrar />}
        {pagina === PAGINA.REGLAS && <Reglas />}
        {pagina === PAGINA.CONFIGURAR && <Configuracion />}
        {pagina === PAGINA.JUEGO && <Juego memotest={new Memotest()} />}
        {pagina === PAGINA.TABLA && <Tabla />}
      </motion.main>
    </AnimatePresence>
  );
}

export default SManejoPantallas;
