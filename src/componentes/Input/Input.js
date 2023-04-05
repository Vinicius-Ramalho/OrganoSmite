function Input({type, label, placeholder, obrigatorio, valorSalvo}){
    const aoDigitar = (e) =>{
        valorSalvo(e.target.value)
    }

    return(
        <div>
            <label className="formulario__label" htmlFor={label}>{label}</label>
            
            <input
                id={label}
                className="formulario__input"
                type={type} 
                placeholder={placeholder} 
                required={obrigatorio}
                onChange={aoDigitar}>
            </input>
        </div>
    )
}

export default Input