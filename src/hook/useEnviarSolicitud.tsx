import useSWRMutation from 'swr/mutation';

export enum METODO {
    PUT = "PUT",
    POST = "POST"
}

export default function useEnviarSolicitud<T, K>(url: string, metodo: METODO) {
    
    async function enviarSolicitud(url: any, { arg }: { arg: T }): Promise<K> {
        return fetch(url, {
            method: metodo,
            body : JSON.stringify(arg),
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            }
        }).then(res => res.json());
    }

    return useSWRMutation(url, enviarSolicitud);
}