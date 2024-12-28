import './TelaSobre.scss'


export default function TelaSobre({className}) {

    return (
        <span id='telaSobre' className={`tela telaSobre bordaGradiente ${className || ''}`}>
            Sobre
        </span>
    )
}


