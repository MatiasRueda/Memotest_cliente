
function DOpciones(props: { clase: string,  opciones: JSX.Element[] }): JSX.Element {
    return (
        <div className={props.clase}>
            {props.opciones}
        </div>
    )
}

export default DOpciones;