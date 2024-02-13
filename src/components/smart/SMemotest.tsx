import DMemotest from "../dumb/DMemotest";
import { EstadoCuadrado } from "../../auxiliar/type";
import { motion } from "framer-motion";

function SMemotest(props: {
  tablero: Map<number, EstadoCuadrado>;
  nivel: number;
  elegirCuadrado: (id: number) => void;
  juegoComenzo: boolean;
}): JSX.Element {
  const crearButtons = (): JSX.Element[] => {
    let arrayButtons: JSX.Element[] = [];
    props.tablero.forEach((estado, id) => {
      arrayButtons.push(
        <motion.button
          key={id}
          whileHover={{
            scale: props.juegoComenzo && !estado.elegido ? 1.1 : 1,
          }}
          whileTap={{ scale: props.juegoComenzo && !estado.elegido ? 0.9 : 1 }}
          animate={{
            backgroundColor: estado.elegido ? estado.color : "#000000",
          }}
          onClick={() => {
            props.elegirCuadrado(id);
          }}
          style={{
            width: props.nivel >= 9 ? "5rem" : "6.5rem",
            height: props.nivel >= 9 ? "5rem" : "6.5rem",
            cursor:
              props.juegoComenzo && !estado.elegido ? "pointer" : "default",
          }}
        />
      );
    });
    return arrayButtons;
  };

  return <DMemotest botones={crearButtons()} />;
}

export default SMemotest;
