import { AnimatePresence, motion, wrap } from "framer-motion";
import { useEffect, useState } from "react";

export default function AMensajes(): JSX.Element {
  const mensajes: string[] = [
    "Buenas! Decidí dejar unos cuantos mensajes acá",
    "Por si alguien se aburre de esperar y quiere leer un rato",
    "Te estarás preguntando ¿Por que tarda tanto?",
    "Y esto se debe principalmente a que subí mi API a una pagina gratuita",
    "Es por eso que tarda tanto en pedir los datos",
    "Estos largos tiempos de demora se escapan a mi alcance como programador",
    "Son pequeñas desventajas de que tiene subir mi API a una pagina como Render",
    "La gran ventaja es que es GRATIS",
    "Así que espero que sepa entender y disfrute el juego",
    "Ahh, y a partir de acá los mensajes se empezaran a repetir",
    "Así que no hace falta que siga leyendo",
  ];
  const [indice, setIndice] = useState<number>(0);
  const indiceWrap: number = wrap(0, mensajes.length, indice);
  const segundosPorMensaje = 10;

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((indice) => indice + 1);
    }, segundosPorMensaje * 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={indice}
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        transition={{ type: "easyOut", duration: 1 }}
        exit={{ x: "-100%" }}
      >
        {mensajes[indiceWrap]}
      </motion.span>
    </AnimatePresence>
  );
}
