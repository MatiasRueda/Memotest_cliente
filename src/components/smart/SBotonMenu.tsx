import { PAGINA, useInformacionContext } from "../../context/Informacion";

export default function SBotonMenu(): JSX.Element {
  const { cambiarPagina } = useInformacionContext();
  return (
    <button
      children={"Volver al menu"}
      onClick={() => {
        cambiarPagina(PAGINA.MENU);
      }}
    />
  );
}
