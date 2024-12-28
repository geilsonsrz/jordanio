import './TelaContato.scss'


export default function TelaContato({className}) {

    return (
        <span id='telaContato' className={`tela telaContato bordaGradiente ${className || ''}`}>
            Contato
        </span>
    )
}