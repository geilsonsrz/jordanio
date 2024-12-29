import './Botao.scss'


export default function Botao({className}) {

    return (
        <a 
        href="https://www.instagram.com/p/DDnOi7-pQMM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        target="_blank"
        className={`botao ${className || ''}`}
        >
            Saiba mais
        </a>
    )
}



