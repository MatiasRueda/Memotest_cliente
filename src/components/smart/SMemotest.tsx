import DMemotest from "../dumb/DMemotest";
import { EstadoCuadrado } from "../../auxiliar/type";

function SMemotest(props: {tablero: Map<number, EstadoCuadrado>, nivel: number ,elegirCuadrado: (id: number) => void, juegoComenzo: boolean}): JSX.Element {
    const crearButtons = (): JSX.Element[] => {
        let arrayButtons: JSX.Element[] = [];
        props.tablero.forEach((estado, id) => {
            arrayButtons.push(<button key={id} 
                onClick={() => { props.elegirCuadrado(id) }}
                style={{ backgroundColor : estado.elegido? estado.color : "black",
                         width : (props.nivel >= 9)? "5rem": "6.5rem", 
                         height: (props.nivel >= 9)? "5rem": "6.5rem",
                         cursor: props.juegoComenzo && !estado.elegido? "pointer" : "default"}}/>) 
        })
        return arrayButtons;
    } 

    return <DMemotest botones={crearButtons()}/>
}

export default SMemotest;