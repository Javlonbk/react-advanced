export const Button  = ({size, color, text, ...props}) => {

    return(
        <button
        style={{
            fontSize: size === "small"? "10px" : "32px",
            backgroundColor: color
        }}
        >
            {text}
        </button>
    )
}


export const RedButton = (props) => {
    return <Button color={"red"} {...props} />
}

export const GreenSmallButton = (props) => {
    return <Button color={"green"} size={"small"} {...props} />
}