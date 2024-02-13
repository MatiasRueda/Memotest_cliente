import { AnimatePresence, motion, wrap } from "framer-motion";
import { useEffect, useState } from "react";

export default function AMensajes(): JSX.Element {
  const mensajes: string[] = ["Esto puede demorarar un rato al principio.", "Estos tiempos de demora escapan a mi alcance como programador",
 "Son pequeñas desventajas de que tiene subir mi API a una pagina como Render", "La gran ventaja es que es GRATIS", "Asi que espero que sepa entender y disfrute el juego"];
  const [ indice , setIndice ] = useState<number>(0);
  const indiceWrap: number = wrap(0, mensajes.length, indice);
  const segundosPorMensaje = 6;

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((indice) => indice + 1);
    }, segundosPorMensaje * 1000);

    return () => clearInterval(intervalo);
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.span 
          key={indice}
          initial = {{ x : "100%" }}
          animate = {{ x : "0" }}
          transition={{ type: "easyOut" , duration: 1}}
          exit = {{ x : "-100%" }}>
        {mensajes[indiceWrap]}
      </motion.span>
    </AnimatePresence>
  )
}
