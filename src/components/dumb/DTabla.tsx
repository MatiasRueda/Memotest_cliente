function DTabla(props: {
  usuarios: JSX.Element[];
  volver: () => void;
}): JSX.Element {
  return (
    <section className="tabla">
      <h2>Top 5 Jugadores</h2>
      <div className="cont-columnas">
        <p>Nombre</p>
        <p>Puntaje</p>
      </div>
      <div className="cont-tabla">{props.usuarios}</div>
      <div className="cont-boton">
        <button onClick={props.volver}>Volver</button>
      </div>
    </section>
  );
}

export default DTabla;
