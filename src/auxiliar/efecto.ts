// Musica descargada de pixebay.com llamada bleep 6.
import acierto from "../asset/musica/acierto.mp3";
// Musica descargada de pixebay.com llamada 3-down-2.
import error from "../asset/musica/error.mp3";
// Musica descargada de pixebay.com llamada GameStart.
import comenzarJuego from "../asset/musica/gameStart.mp3";
// Musica descargada de pixebay.com llamada button.
import ingresar from "../asset/musica/login.mp3";
// Musica descargada de pixebay.com llamada new-level.
import siguienteNivel from "../asset/musica/nextLevel.mp3";
// Musica descargada de pixebay.com llamada interface.
import jugarDeNuevo from "../asset/musica/retry.mp3";
// Musica descargada de pixebay.com llamada click-game-menu.
import menu from "../asset/musica/sonidoMenu.mp3";
// Pagina de pixebay ---> https://pixabay.com/es/


type EfectoControlador = {
    play: () => void;
}

export enum EFECTO {
    ACIERTO ,
    ERROR ,
    INGRESAR ,
    SIGUIENTE_NIVEL ,
    JUGAR_DE_NUEVO ,
    MENU ,
    COMENZAR_JUEGO,
}

function obtenerEfecto(nombre: EFECTO): string {
    if (nombre === EFECTO.ACIERTO) 
        return acierto;
    else if (nombre === EFECTO.ERROR) 
        return error;
    else if (nombre === EFECTO.INGRESAR)
        return ingresar;
    else if (nombre === EFECTO.JUGAR_DE_NUEVO)
        return jugarDeNuevo;
    else if (nombre === EFECTO.SIGUIENTE_NIVEL)
        return siguienteNivel;
    else if (nombre === EFECTO.MENU) 
        return menu;
    else
        return comenzarJuego;
}

export default function efecto (nombre: EFECTO, volumen: number): EfectoControlador {
    const musica: HTMLAudioElement = new Audio(obtenerEfecto(nombre));

    const play = (): void => {
        musica.volume = volumen;
        musica.loop = false;
        musica.play();
    }

    return { play };
}