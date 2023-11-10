import DOpciones from "../dumb/DOpciones";

type Opcion = {
    nombre: string;
    activadorOpcion: () => void;
}

function SOpciones(props: { opciones: Opcion[] }): JSX.Element {

    const opcionesBtns: JSX.Element[] = props.opciones.map((opcion) => 
        <button key={opcion.nombre} onClick={opcion.activadorOpcion}>
            {opcion.nombre}
        </button>);
    
    return <DOpciones clase="cont-opciones" opciones={opcionesBtns}/>
}

export default SOpciones;