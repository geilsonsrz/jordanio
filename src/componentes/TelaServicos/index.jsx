import CardServico from '../CardServico'
import './TelaServicos.scss'



let conteudo1 = 'Conteúdo do serviço 1'

let conteudo2 = 'Conteúdo do serviço 2'

let conteudo3 = `Conteúdo do serviço ${2+1}`







export default function TelaServicos({className}) {

    return (
        <span id='telaServicos' className={`tela telaServicos bordaGradiente ${className || ''}`}>
            Serviços
            <CardServico 
                servico={'Avaliação Física'} 
                conteudo={conteudo1}
                imagem={'../../../public/teste/s1.jpg'} 
            />

            <CardServico 
                servico={'Treinos'} 
                conteudo={conteudo2}
                imagem={'../../../public/teste/s2.jpg'} 
            />
            
            <CardServico 
                servico={'Consultoria'} 
                conteudo={conteudo3}
                imagem={'../../../public/teste/s3.jpg'}
            />
        </span>
    )
}