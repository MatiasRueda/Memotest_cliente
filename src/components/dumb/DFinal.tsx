function DFinal(props: {
  opciones: JSX.Element;
  puntajeTotal: number;
}): JSX.Element {
  return (
    <section className="post-juego">
      <h2>Terminaste el juego!</h2>
      <h3>Puntaje final: {props.puntajeTotal}</h3>
      {props.opciones}
    </section>
  );
}

export default DFinal;
