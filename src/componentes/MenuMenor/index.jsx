import { useEffect, useState } from 'react'
import './MenuMenor.scss'


export default function MenuMenor() {

    // Começa com o link inicial ativo
    const [linkAtivo, setLinkAtivo] = useState('linkInicio')

    // Mapeamento de IDs de links para IDs de seções
    const telas = {
        linkInicio: 'telaInicial',
        linkSobre: 'telaSobre',
        linkServicos: 'telaServicos',
        linkConteudos: 'telaConteudos',
        linkContato: 'telaContato',
    };

    // Função para atualizar o link ativo conforme a rolagem
    const scrollAtivo = () => {
        const posicaoTela = window.scrollY + window.innerHeight / 2

        // Verifica qual seção está visível
        for (const [linkId, telaId] of Object.entries(telas)) {
            const tela = document.getElementById(telaId)
            if (tela) {
                const topTela = tela.offsetTop
                const alturaTela = tela.offsetHeight

                if (posicaoTela >= topTela && posicaoTela < topTela + alturaTela) {
                    ativador(linkId)
                    break
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollAtivo)
        return () => {
            window.removeEventListener('scroll', scrollAtivo)
        }
    }, [])


    // Ativador da classe
    const ativador = (id) => {
        // Atualiza o estado com o ID do link clicado
        setLinkAtivo(id)
    }



    return (
        <span className="conteinerMenuMenor">

            {/* LINK INÍCIO */}
            <a
                id='linkInicio'
                href='#telaInicial'
                className={`itemMenuMenor ${linkAtivo === 'linkInicio' ? 'linkAtivo' : ''}`}
                onClick={() => ativador('linkInicio')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
            </a>

            {/* LINK SOBRE */}
            <a 
                id='linkSobre' 
                href='#telaSobre' 
                className={`itemMenuMenor ${linkAtivo === 'linkSobre' ? 'linkAtivo' : ''}`}
                onClick={() => ativador('linkSobre')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
                </svg>
            </a>
            
            {/* LINK SERVIÇOS */}
            <a 
                id='linkServicos' 
                href='#telaServicos' 
                className={`itemMenuMenor ${linkAtivo === 'linkServicos' ? 'linkAtivo' : ''}`}
                onClick={() => ativador('linkServicos')}
            >
                <span className="material-symbols-outlined">
                exercise
                </span>
            </a>
            
            {/* LINK CONTEÚDOS */}
            <a 
                id='linkConteudos' 
                href='#telaConteudos' 
                className={`itemMenuMenor ${linkAtivo === 'linkConteudos' ? 'linkAtivo': ''}`}
                onClick={() => ativador('linkConteudos')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                </svg>
            </a>

            <a 
                id='linkContato' 
                href='#telaContato' 
                className={`itemMenuMenor ${linkAtivo === 'linkContato' ? 'linkAtivo': ''}`}
                onClick={() => ativador('linkContato')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
            </a>
        </span>
    )
}




