type InfoCronometro = {
    tiempo: number;
    frenado: boolean;
}

export default class Cronometro {
    #tiempo: number = 0;
    #info: InfoCronometro = {  
        tiempo: 0,
        frenado: true,
    };

    constructor(tiempoInicial: number) {
        this.#info.tiempo = tiempoInicial;
        this.#tiempo = tiempoInicial;
    }

    iniciar(): void {
        this.#info.frenado = false;
    }

    frenar(): void {
        this.#info.frenado = true;
    }

    descontar(): InfoCronometro {
        if (!this.#info.tiempo) {
            this.frenar();
            return this.#info;
        }
        const tiempoDescontado = this.#info.tiempo - 1;
        this.#info = { ...this.#info, tiempo: tiempoDescontado };
        return this.#info;
    }

    tiempoTerminado(): boolean {
        return !this.#info.tiempo;
    }

    get info(): InfoCronometro {
        return this.#info; 
    }

    set reiniciar(tiempo: number | undefined) {
        this.frenar();
        if (!!tiempo)
            this.#tiempo = tiempo;
        this.#info = { ...this.#info , tiempo: this.#tiempo };
    }
}