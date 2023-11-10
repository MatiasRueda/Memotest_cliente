function DMensajeTemporal(props: {mensaje: string}): JSX.Element {
    return (
        <section className="mensaje-temporal">
            <h1>{props.mensaje}</h1>
        </section>
    )
}

export default DMensajeTemporal;