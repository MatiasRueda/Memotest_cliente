import { ReactNode, createContext, useContext, useState } from "react";
import { Usuario } from "../auxiliar/type";
import efecto, { EFECTO } from "../auxiliar/efecto";

export enum PAGINA {
  MENU = "menu",
  JUEGO = "juego",
  CONFIGURAR = "configurar",
  REGLAS = "reglas",
  INGRESAR = "ingresar",
  REGISTRAR = "registrar",
  TABLA = "tabla",
  MENSAJE = "mensaje",
}

type Informacion = {
  usuario?: Usuario;
  actualizarUsuario: (actualizarUsuario: Usuario) => void;
  salidaUsuario: boolean;
  terminoDeSalirUsuario: () => void;
  sacarUsuario: () => void;
  volumenEfecto: number;
  cambiarVolumenEfecto: (volumen: number) => void;
  cambiarPagina: (pagina: PAGINA, cambiarVolumen?: number) => void;
  primeraVez: boolean;
  sacarPrimeraVez: () => void;
  pagina: string;
};

const informacionContext = createContext<Informacion | undefined>(undefined);

export function useInformacionContext(): Informacion {
  return useContext(informacionContext)!;
}

function InformacionContext(props: { children: ReactNode }): JSX.Element {
  const [usuario, setUsuario] = useState<Usuario | undefined>(undefined);
  const [pagina, setPagina] = useState<PAGINA>(PAGINA.MENU);
  const [primeraVez, setPrimeraVez] = useState<boolean>(true);
  const [salidaUsuario, setSalidaUsuario] = useState<boolean>(false);
  const [volumenEfecto, setVolumenEfecto] = useState<number>(0.01);

  const actualizarUsuario = (actualizarUsuario: Usuario): void => {
    setUsuario({ ...usuario, ...actualizarUsuario });
  };

  const cambiarVolumenEfecto = (volumen: number): void => {
    setVolumenEfecto(volumen);
  };

  const sacarPrimeraVez = (): void => {
    setPrimeraVez(false);
  };

  const terminoDeSalirUsuario = (): void => {
    setSalidaUsuario(false);
  };

  const sacarUsuario = async (): Promise<void> => {
    const efectoSalir = efecto(EFECTO.INGRESAR, volumenEfecto);
    efectoSalir.play();
    setUsuario(undefined);
    setSalidaUsuario(true);
  };

  const cambiarPagina = (pagina: PAGINA, volumen?: number) => {
    const efectoCambiar = efecto(
      EFECTO.INGRESAR,
      volumen !== undefined ? volumen : volumenEfecto
    );
    efectoCambiar.play();
    setPagina(pagina);
  };

  const informacion: Informacion = {
    usuario,
    actualizarUsuario,
    sacarUsuario,
    salidaUsuario,
    terminoDeSalirUsuario,
    volumenEfecto,
    cambiarVolumenEfecto,
    cambiarPagina,
    primeraVez,
    sacarPrimeraVez,
    pagina,
  };

  return (
    <informacionContext.Provider value={informacion}>
      {props.children}
    </informacionContext.Provider>
  );
}

export default InformacionContext;
