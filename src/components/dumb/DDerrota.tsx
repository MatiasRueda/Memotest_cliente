function DDerrota(props: { opciones: JSX.Element }): JSX.Element {
    return (
        <section className="post-juego">
            <h2>Perdiste</h2>
            {props.opciones}
        </section>
    )
}

export default DDerrota;