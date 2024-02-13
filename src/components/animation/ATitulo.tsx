import { motion } from "framer-motion";

export default function ATitulo(props: { texto: string }): JSX.Element {
    const textoSeparado = props.texto.split("");

    return (
        <div className="cont-titulo">
            {textoSeparado.map((letra, indice) => (
                <motion.span
                    key={indice}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: indice / 15,
                    }}>
                        {letra}
                </motion.span>
            ))}
        </div>
    )
}
