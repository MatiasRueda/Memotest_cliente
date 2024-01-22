import { MotionProps } from "framer-motion";

export const Fade: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const CambiarPantalla: MotionProps = {
  initial: {x: "-100%"},
  animate: {x: "0", transition: { type: "easyOut" }  },
  exit: {x: "100%", transition: { duration: 0.25,  type: "easyOut" } },
  transition: { duration: 0.25 }
}