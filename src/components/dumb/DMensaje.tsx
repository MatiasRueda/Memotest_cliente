function DMensaje(props: {
  mensaje: string;
  btnSiguiente?: JSX.Element | false;
  btnVolver?: JSX.Element | false;
}): JSX.Element {
  return (
    <section className="mensaje">
      <h1>{props.mensaje}</h1>
      <div className="cont-botones">
        {props.btnSiguiente}
        {props.btnVolver}
      </div>
    </section>
  );
}

export default DMensaje;
