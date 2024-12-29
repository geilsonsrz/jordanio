import Botao from '../Botao'
import './TelaInicial.scss'


export default function TelaInicial({className}) {

    return (
        <span id='telaInicial' className={`tela telaInicial bordaGradiente ${className || ''}`}>
            <span className='conteinerTelaInicial'>
                <span className='fraseTitulo'>
                    "Alguma frase de filosofía de trabalho aqui." - Jordanio
                </span>

                <span className='cardTitulo'>
                    <>Prof. Jó</>
                    <>Botão</>
                </span>

            </span>
        </span>
    )
}


