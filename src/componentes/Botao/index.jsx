import './Botao.scss'


export default function Botao({className}) {

    return (
        <a 
        href="https://www.instagram.com/jordan_ny23/"
        target="_blank"
        className={`botao ${className || ''}`}
        >
            Saiba mais
        </a>
    )
}



