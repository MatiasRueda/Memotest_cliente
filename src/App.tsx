import "./asset/style/app.css";
import "./asset/style/carga.css";
import SPaginas from "./components/smart/SPaginas";
import InformacionContext from "./context/Informacion";

function App(): JSX.Element {
  return (
    <InformacionContext>
      <SPaginas />
    </InformacionContext>
  );
}

export default App;
