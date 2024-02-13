const usuarios = "/usuarios";
const ingresar = "/ingresar";
const registrar = "/registrar";
const actualizar = "/actualizar";

const server: string = import.meta.env.VITE_SERVER!;

export const SERVER_PATH_INGRESAR: string = server + ingresar;
export const SERVER_PATH_REGISTRAR: string = server + registrar;
export const SERVER_PATH_USUARIOS: string = server + usuarios;
export const SERVER_PATH_ACTUALIZAR: string = server + actualizar;
