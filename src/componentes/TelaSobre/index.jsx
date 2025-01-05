import Carrocel from '../Carrocel'
import './TelaSobre.scss'


export default function TelaSobre({className}) {

    return (
        <span id='telaSobre' className={`tela telaSobre bordaGradiente ${className || ''}`}>
            
            <span className='conteinerSobre'>

                <span className='tituloCard'>Sobre mim</span>

                <span className='tituloSobre'>
                    <span className='imgSobre'></span>
                </span>

                {/* TEXTO SOBRE */}
                <p>
                    Fala pessoal! Pra quem não me conhece meu nome é Jordanny, mais conhecido como Prof Jô. Sou graduado em educação física (licenciatura e bacharelado) e atualmente estou prestes a defender meu mestrado na linha de pesquisa em exercício e promoção de saúde.
                </p>
                <p>
                    Meu estudo foi realizado com idosos que praticam exercício físico, atualmente busco ajudar estudantes que estejam a busca de encontrar uma carreira profissional por meio da graduação e pós, além disso, <span className='txtChave'>sou atleta de Powerlifthing</span> nas horas vagas e diante disso entrei como sócio fundador da <span className='txtChave'>Associação Hoy Sports</span> para arrecadação de fundos para atletas de alta performance, com objetivo de sonho olímpico!
                </p>

                <Carrocel />

                <p>
                    Se você chegou até aqui conheça um pouco mais sobre nosso conteúdo.
                </p>

            </span>

        </span>
    )
}


