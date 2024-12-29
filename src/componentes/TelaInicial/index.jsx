import Botao from '../Botao'
import './TelaInicial.scss'


export default function TelaInicial({className}) {

    return (
        <span id='telaInicial' className={`tela telaInicial bordaGradiente ${className || ''}`}>
            <span className='conteinerTelaInicial'>

                <span className='cardInicio'>
                    <span className='tituloCard'>Prof. Jô</span>
                    <Botao />
                </span>

            </span>

            <span className='setaBaixar'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </span>

        </span>
    )
}


