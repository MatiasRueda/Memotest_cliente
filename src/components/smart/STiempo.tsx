import { Fragment } from "react";
import { InformacionMemotest } from "../../auxiliar/type";
import SCronometro from "./SCronometro";

type TiempoParams = {
  informacion: InformacionMemotest;
  segMemorizar: number;
  segNivel: number;
  descontarTiempoNivel: () => number;
  descontarTiempoMemorizar: () => number;
  comenzarMemo: () => void;
};

function STiempo({ ...rest }: TiempoParams): JSX.Element {
  return (
    <Fragment>
      {!rest.informacion.memorizar && !rest.informacion.juegoComenzo && (
        <button onClick={rest.comenzarMemo}>Comenzar</button>
      )}
      {rest.informacion.memorizar && (
        <SCronometro
          tiempo={rest.informacion.segMemorizar}
          actualizarTiempo={rest.descontarTiempoMemorizar}
          texto="Tiempo para memorizar: "
        />
      )}
      {rest.informacion.juegoComenzo && (
        <SCronometro
          tiempo={rest.informacion.segNivel}
          actualizarTiempo={rest.descontarTiempoNivel}
          texto="Tiempo restante: "
        />
      )}
    </Fragment>
  );
}

export default STiempo;
