import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, Key, ReactNode } from "react";

function AFade(props: { llave: Key , children: ReactNode }): JSX.Element {
    const estilo: CSSProperties = {
        width: "100%", 
        height: "100%", 
        display: "flex", 
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <AnimatePresence mode="wait">
            <motion.section
                key={props.llave}
                style={estilo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                    {props.children}
            </motion.section>
        </AnimatePresence>
    )
}

export default AFade;
