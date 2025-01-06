import Botao from '../Botao'
import './Lamina.scss'


export default function Lamina({className , tituloConteudo, textoConteudo}) {

    return (
        <span className={`lamina ${className || ''}`}>
            <span className='conteinerLamina'>
                <span className='tituloConteudo'>{tituloConteudo}</span>
                <span className='textoConteudo'>{textoConteudo}</span>
                <span className='areaBotoes'>
                    <Botao 
                        className={'btnLeitura'}
                        texto={'Leitura'}
                    />
                    <Botao 
                        className={'btnBaixar'}
                        texto={'Baixar'}
                    />
                </span>
            </span>
        </span>
    )
}



