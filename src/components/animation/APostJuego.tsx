import { motion , AnimatePresence } from "framer-motion";
import { CSSProperties, Key, ReactNode } from "react";

function APostJuego(props: { llave: Key, children: ReactNode }): JSX.Element {
    const estilo: CSSProperties = {
        width: "100%", 
        height: "88%", 
        display: "flex", 
        flexWrap: "wrap",
        alignContent: "space-around",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <AnimatePresence mode="wait">
            <motion.section
                key={props.llave}
                style={estilo}
                initial={{x: "-100%"}}
                animate={{x: "0", transition: { type: "easyOut" }  }}
                exit={{x: "100%", transition: { duration: 0.25,  type: "easyOut" } }}
                transition={{ duration: 0.25 }}>
                    {props.children}
            </motion.section>
        </AnimatePresence>
    )
}

export default APostJuego;