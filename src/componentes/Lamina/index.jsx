import './Lamina.scss'


export default function Lamina({className , tituloConteudo, textoConteudo}) {

    return (
        <span className={`lamina ${className || ''}`}>
            <span className='tituloConteudo'>{tituloConteudo}</span>
            <span className='textoConteudo'>{textoConteudo}</span>
            <span className='areaBotoes'>
                <span className='btnConteudo' >Leitura</span>
                <span className='btnConteudo' >Baixar</span>
            </span>

        </span>
    )
}



