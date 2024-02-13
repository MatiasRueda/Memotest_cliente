import "../asset/style/tabla.css";
import STabla from "../components/smart/STabla";
import { Fade } from "../auxiliar/animacion";
import { motion } from "framer-motion";

function Tabla(): JSX.Element {
  return (
    <motion.section className="pagina-tabla" {...Fade}>
      <STabla />
    </motion.section>
  );
}

export default Tabla;
