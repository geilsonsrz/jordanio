import './Botao.scss'


export default function Botao({className, href, target='', texto}) {

    return (
        <a 
        href={href}
        target={target}
        className={`botao ${className || ''}`}
        >
            {texto}
        </a>
    )
}



