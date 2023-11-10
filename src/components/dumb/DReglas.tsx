function DReglas(): JSX.Element {
    return (
        <section className="informacion-reglas">
            <p>1- Para ganar es necesario llegar al nivel 16 y superarlo</p>
            <p>2- Se perdera en cualquiera de los 2 siguientes casos: </p>
            <ul>
                <li>No hay mas intentos</li>
                <li>No hay mas tiempo</li>
            </ul>
            <p>3- Se debera jugar hasta ganar o perder, no se puede salir en medio del juego</p>
            <p>4- En caso de salir no se guardaran los datos</p>
            <p>5- Cada 3 niveles: </p>
            <ul>
                <li>Se recuperaran 2 intentos</li>
                <li>Se aumentaran 2 segundos al tiempo para memorizar</li>
                <li>Se aumentaran 5 segundos al tiempo para completar el nivel</li>
            </ul>
        </section>
    )
}

export default DReglas;