import SMemotest from "../smart/SMemotest";
import { InformacionMemotest, Usuario } from "../../auxiliar/type";

type JuegoParams = {
    informacion: InformacionMemotest;
    elegirCuadrado: (id: number) => void;
    usuario: Usuario;
    tiempo: JSX.Element;
}

function DJuego({...rest} : JuegoParams): JSX.Element {
    return (
        <section className="juego">
            <section className="info-puntaje">
                <h2>{"Puntaje acumulado: " + rest.informacion.puntajeTotal}</h2>
                <h2>{"Puntaje nivel: "+ rest.informacion.puntajeNivel}</h2>
            </section>
            <SMemotest tablero={rest.informacion.tablero} 
                       nivel={rest.informacion.nivel}
                       elegirCuadrado={rest.elegirCuadrado}
                       juegoComenzo={rest.informacion.juegoComenzo}/>
            <section className="info">
                <h2>{"Intentos: "+ rest.informacion.intentos}</h2>
            </section>
            <div className="cont-tiempo">
                {rest.tiempo}
            </div>
        </section>
    )
}

export default DJuego;