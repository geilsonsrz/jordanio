import './CardServico.scss'


function cardAtive(e) {

    // Captura do elemento
    let pelicula = e.target

    let elementoPai = pelicula.parentElement

    // Adicionando ou removendo a classe
    elementoPai.classList.toggle('cardAtivo')
    
}




export default function CardServico({servico, conteudo, imagem}) {

    return (

        <span className='cardServico'>
            <img src={imagem} alt='Imagem serviço.' />
            <span className="pelicula" onClick={cardAtive}/>
            <span className='servico'>{servico}</span>
            <span className='conteudoServico'>
                <span>AAAdasdas</span>
                {conteudo}
            </span>
        </span>

    )
}

