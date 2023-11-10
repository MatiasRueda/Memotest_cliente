import { motion , AnimatePresence } from "framer-motion";
import { CSSProperties, Key, ReactNode } from "react";

function APostJuego(props: { llave: Key, children: ReactNode }): JSX.Element {
    const estilo: CSSProperties = {
        width: "100%", 
        height: "90%", 
        display: "flex", 
        flexWrap: "wrap",
        alignContent: "space-around",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={props.llave}
                style={estilo}
                initial={{x: "-100%"}}
                animate={{x: "0", transition: { type: "easyOut" } }}
                exit={{x: "100%", transition: { type: "easyOut" } }}>
                    {props.children}
            </motion.div>
        </AnimatePresence>
    )
}

export default APostJuego;