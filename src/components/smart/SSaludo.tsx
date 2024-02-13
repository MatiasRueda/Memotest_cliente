import { useEffect, useState } from "react";
import { useInformacionContext } from "../../context/Informacion";

function SSaludo(): JSX.Element {
  const [nombre, setNombre] = useState<string | undefined>(undefined);
  const { usuario, salidaUsuario } = useInformacionContext();

  useEffect(() => {
    if (!usuario) return;
    setNombre(usuario.nombre);
  }, [usuario]);

  return (
    <div className="cont-saludo">
      {(usuario || salidaUsuario) && <h3>¡Bienvenido/a {nombre}!</h3>}
    </div>
  );
}

export default SSaludo;
