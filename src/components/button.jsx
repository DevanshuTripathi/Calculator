function Button(props) {
    return(
        <button onClick={props.onClick} data-value={props.dataValue} data-type={props.dataType}>
            {props.value}
        </button>
    )
}

export default Button;