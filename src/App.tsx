import "./asset/style/app.css";
import "./asset/style/carga.css";
import SPaginas from "./components/smart/SPaginas";
import SInformacion from "./components/smart/SInformacion";

function App(): JSX.Element {
    return (
        <SInformacion>
            <SPaginas/>
        </SInformacion>
    )
}

export default App
