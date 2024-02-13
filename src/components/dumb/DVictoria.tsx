function DVictoria(props: {
  opciones: JSX.Element;
  puntajeNivel: number;
  puntajeTotal: number;
}): JSX.Element {
  return (
    <section className="post-juego">
      <h2>Ganaste</h2>
      <h3>Puntaje ganado: +{props.puntajeNivel}</h3>
      <h3>Puntaje total: {props.puntajeTotal}</h3>
      {props.opciones}
    </section>
  );
}

export default DVictoria;
