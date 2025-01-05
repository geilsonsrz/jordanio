import Lamina from '../Lamina'
import './TelaConteudos.scss'


// Conteúdo 1
let conteudo_1 = 'Conteúdo 1'
let conteudo_1_txt = 'Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui. Texo do conteúdo 1 aqui.'
let conteudo_1_pdf = 'arquivo.pdf'


// Conteúdo 2
let conteudo_2 = 'Conteúdo 2'
let conteudo_2_txt = 'Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2. Texto do conteúdo 2.'
let conteudo_2_pdf = 'aquivo.pdf'


export default function TelaConteudos({className}) {

    return (
        <span id='telaConteudos' className={`tela telaConteudos bordaGradiente ${className || ''}`}>
            <span className='tituloCard'>Conteúdos</span>
            <p className='textoTela'>
                Explicação sobre os documentos que constam aqui.
            </p>

            < Lamina
                className={'direita'}
                tituloConteudo={conteudo_1}
                textoConteudo={conteudo_1_txt} 
                linkPDF={conteudo_1_pdf}
            />

            < Lamina
                className={'esquerda'}
                tituloConteudo={conteudo_2}
                textoConteudo={conteudo_2_txt}
                linkPDF={conteudo_2_pdf}
            />


        </span>
    )
}


