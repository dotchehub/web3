const Button = (props) => {
    const {text,handler} = props;

    return(
        <div>
            <button onClick={handler}>
                {text}
            </button>
        </div>
    )
}

export default Button;