function Selecao({label, obrigatorio, nomeDaClasse, valorSalvo}){
    const aoSelecionar = (e) =>{
        valorSalvo(e.target.value)
    }

    return(
        <div>
            <label className="formulario__label" htmlFor={label}>{label}</label>
            
            <select 
                id={label}
                className="formulario__input" 
                required={obrigatorio}
                onChange={aoSelecionar}>
                    <option></option>
                    {nomeDaClasse.map(classe => <option key={classe}>{classe}</option>)}
            </select>
        </div>
    )
}

export default Selecao