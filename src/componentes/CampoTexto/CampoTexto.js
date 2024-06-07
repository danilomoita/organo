import './CampoTexto.css'


const CampoTexto = (props)=>{

    const placehlderModificada = `${props.placeholder}...`

    const aoDigitando = (evento) => {
         props.aoAlterado (evento.target.value)   
    }


    return(
        <div className="campo-texto">
            <label >{props.label}</label>
            <input type = '' value={props.valor} onChange={aoDigitando} required = {props.obrigatorio} placeholder={placehlderModificada}/>
        </div>
    )
}

export default CampoTexto