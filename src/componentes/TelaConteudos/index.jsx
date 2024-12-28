import './TelaConteudos.scss'


export default function TelaConteudos({className}) {

    return (
        <span id='telaConteudos' className={`tela telaConteudos bordaGradiente ${className || ''}`}>
            Conteúdos
        </span>
    )
}


