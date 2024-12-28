import './TelaServicos.scss'


export default function TelaServicos({className}) {

    return (
        <span id='telaServicos' className={`tela telaServicos bordaGradiente ${className || ''}`}>
            Serviços
        </span>
    )
}