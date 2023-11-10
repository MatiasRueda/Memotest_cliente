function DLabel(props: {htmlFor: string , texto: string}): JSX.Element {
    return (
        <div className="cont-label">
            <label htmlFor={props.htmlFor}>
                {props.texto}
            </label>
        </div>
    )
}

export default DLabel;