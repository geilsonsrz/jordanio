import { useState } from 'react'
import './CardServico.scss'


function cardAtive(e) {

    // Captura do elemento
    let pelicula = e.target

    let elemento_pai = pelicula.parentElement

    // Adicionando ou removendo a classe
    elemento_pai.classList.toggle('cardAtivo')
    
}




export default function CardServico({servico, texto_servico, imagem}) {


    return (

        <span className='cardServico' style={{backgroundImage: `url(${imagem})`}}>
            <span className='pelicula' onClick={cardAtive} />
            <span className='servico'>{servico}</span>
            <span className='textoServico'>
                <p className='descricao'>Descrição</p>
                <p className='txt'>
                    {texto_servico}
                </p>
            </span>            
        </span>

    )
}

