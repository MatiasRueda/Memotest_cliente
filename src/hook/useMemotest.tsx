import { useState } from "react";
import Memotest from "../logic/memotest";
import { InformacionMemotest } from "../auxiliar/type";
import { useInformacionContext } from "../components/smart/SInformacion";
import efecto, { EFECTO } from "../auxiliar/efecto";

type MetodosMemotest = {
    elegirCuadrado: (id: number) => void;
    comenzarMemorizado: () => void;
    finalizarMemorizado: () => void;
    siguienteNivel: () => void;
    reiniciar: () => void;
    descontarTiempoNivel: () => number;
    descontarTiempoMemorizar: () => number;
}

type UseMemotest = {
    informacion: InformacionMemotest;
    metodosMemotest: MetodosMemotest;
}

function useMemotest(memotest: Memotest): UseMemotest {
    const [ informacion, setInformacion ] = useState<InformacionMemotest>(memotest.informacion);
    const { volumenEfecto } = useInformacionContext();

    const comenzarMemorizado = (): void => {
        memotest.comenzarMemorizado();
        setInformacion({ ...informacion, ...memotest.informacion });
    }

    const finalizarMemorizado = (): void => {
        memotest.finalizarMemorizado();
        setInformacion({ ...informacion, ...memotest.informacion });
    }

    const elegirCuadrado = (id: number): void => {
        const acertado = efecto(EFECTO.ACIERTO, volumenEfecto);
        const error = efecto(EFECTO.ERROR, volumenEfecto);
        const resultado: boolean | undefined = memotest.eleccion(id);
        setInformacion({ ...informacion, ...memotest.informacion });   
        if (resultado === undefined)
            return;
        resultado? acertado.play() : error.play();
    }

    const siguienteNivel = (): void => {
        memotest.siguienteNivel();
        const siguienteNivel = efecto(EFECTO.SIGUIENTE_NIVEL, volumenEfecto);
        siguienteNivel.play();
        setInformacion({...informacion, ...memotest.informacion });
    }

    const reiniciar = (): void => {
        memotest.reiniciar();
        const volverAJugar = efecto(EFECTO.JUGAR_DE_NUEVO, volumenEfecto);
        volverAJugar.play();
        setInformacion({...informacion, ...memotest.informacion });
    }

    const descontarTiempoNivel = (): number => {
        memotest.descontarSegundosNivel();
        if (!memotest.informacion.segNivel) 
            memotest.finalizarJuego();
        setInformacion({...informacion, ...memotest.informacion });
        return memotest.informacion.perdio? 0 : memotest.informacion.segNivel;
    } 

    const descontarTiempoMemorizar = (): number => {
        memotest.descontarSegundosMemorizar();
        if (!memotest.informacion.segMemorizar) 
            memotest.finalizarMemorizado();
        setInformacion({...informacion, ...memotest.informacion });
        return memotest.informacion.segMemorizar;
    }

    const metodosMemotest: MetodosMemotest = { 
        elegirCuadrado , 
        comenzarMemorizado, 
        finalizarMemorizado, 
        siguienteNivel, 
        reiniciar,
        descontarTiempoNivel,
        descontarTiempoMemorizar
    }


    return { informacion , metodosMemotest }
}

export default useMemotest;