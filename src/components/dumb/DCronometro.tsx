function DCronometro (props:{ texto: string, tiempo: number } ) {
    return (
        <div className="cont-cronometro">
            <h1>{props.texto}{props.tiempo}seg </h1>
        </div>
    );
};
  

export default DCronometro;