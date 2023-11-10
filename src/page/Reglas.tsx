import "../asset/style/reglas.css";
import DReglas from "../components/dumb/DReglas";
import SReglas from "../components/smart/SReglas";

function Reglas() {
    return (
        <main className="pagina-reglas">
            <section className="reglas">
                <h1>Reglas:</h1>
                <DReglas/>
                <SReglas/>
            </section>
        </main>
    )
}

export default Reglas;