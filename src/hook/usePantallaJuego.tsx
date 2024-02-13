import { useEffect, useState } from "react";

export enum PANTALLA_JUEGO {
  JUEGO = "juego",
  VICTORIA = "victoria",
  DERROTA = "derrota",
  FINAL = "final",
}

type ControladorPantallasJuego = {
  pantalla: PANTALLA_JUEGO;
};

type Informacion = {
  gano: boolean;
  perdio: boolean;
  ultimoNivelTerminado: boolean;
};

function usePantallaJuego(informacion: Informacion): ControladorPantallasJuego {
  const [pantalla, setPantalla] = useState<PANTALLA_JUEGO>(
    PANTALLA_JUEGO.JUEGO
  );
  const juego: boolean = !informacion.gano && !informacion.perdio;
  const gano: boolean = informacion.gano && !informacion.ultimoNivelTerminado;
  const perdio: boolean = informacion.perdio;
  const final: boolean = informacion.gano && informacion.ultimoNivelTerminado;

  const cambiarPantalla = (): void => {
    if (final) return setPantalla(PANTALLA_JUEGO.FINAL);
    else if (gano) return setPantalla(PANTALLA_JUEGO.VICTORIA);
    else if (juego) return setPantalla(PANTALLA_JUEGO.JUEGO);
    else return setPantalla(PANTALLA_JUEGO.DERROTA);
  };

  useEffect(() => {
    cambiarPantalla();
  }, [informacion]);

  return { pantalla };
}

export default usePantallaJuego;
