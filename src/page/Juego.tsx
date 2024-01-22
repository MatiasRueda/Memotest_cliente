import "../asset/style/juego.css";
import SJuego from "../components/smart/SJuego";
import Memotest from "../logic/memotest";

function Juego(props: {memotest: Memotest}): JSX.Element {
    return (
        <section className="pagina-juego">
            <SJuego memotest={props.memotest}/>
        </section>
    )
}

export default Juego;