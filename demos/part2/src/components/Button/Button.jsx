const Button = (props) => {
    

    const handleClick = ()=>{
        console.log("hhel");
    }
    
    return(
        <div>
            <button onClick={ () => handleClick()} data-delta={delta}>
                OUI MONSIEUR
            </button>
        </div>
    )
}


export default Button;