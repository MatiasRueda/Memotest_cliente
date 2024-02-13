import { useState } from "react";

type ControladorPantallas = {
  pantalla: PANTALLA_CARGA;
  cambiarPantalla: (pantalla: PANTALLA_CARGA) => void;
  mantenerPantalla: () => Promise<void>;
};

export enum PANTALLA_CARGA {
  ACTUAL = "actual",
  CARGANDO = "cargando",
  MENSAJE = "mensaje",
  ERROR = "error",
}

export default function usePantallaCarga(
  pantallaInicial?: PANTALLA_CARGA
): ControladorPantallas {
  const [pantalla, setPantalla] = useState<PANTALLA_CARGA>(
    pantallaInicial ? pantallaInicial : PANTALLA_CARGA.ACTUAL
  );
  const miliSegundos: number = 2000;

  const cambiarPantalla = (pantalla: PANTALLA_CARGA): void => {
    setPantalla(pantalla);
  };

  const mantenerPantalla = async (): Promise<void> => {
    await new Promise((r) => setTimeout(r, miliSegundos));
  };

  return { pantalla, cambiarPantalla, mantenerPantalla };
}
