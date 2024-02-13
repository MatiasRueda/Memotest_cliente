import { AnimatePresence } from "framer-motion";
import "../asset/style/menu.css";
import SMenu from "../components/smart/SMenu";
function Menu(): JSX.Element {
  return (
    <AnimatePresence mode="wait">
      <section className="pagina-menu">
        <SMenu />
      </section>
    </AnimatePresence>
  );
}

export default Menu;
