import Botao from '../Botao'
import './TelaInicial.scss'


export default function TelaInicial({className}) {

    return (
        <span id='telaInicial' className={`tela telaInicial bordaGradiente ${className || ''}`}>
            <span className='bgFoto'>
                <span className='txtTitulo fontePrimaria'>
                    Olá
                </span>
                <Botao className='btn fonteSecundaria'/>
            </span>
        </span>
    )
}


