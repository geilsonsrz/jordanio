import CardServico from '../CardServico'
import './TelaServicos.scss'



let texto_servico_1 = 'Identifica o condicionamento atual e objetivos do cliente, atraves de medições corporal e histórico de saúde, servindo como base para um treinamento seguro e eficaz.'

let texto_servico_2 = 'Treinos personalizados para atender às metas do cliente, seja a perda de peso, ganho de massa muscular, entre outros. Com foco em eficiência e segurança, garantindo resultados consistentes e a evolução contínua na saúde e bem-estar.'

let texto_servico_3 = `Orientação especializada para auxiliar o cliente a atingir seus objetivos. Inclui a criação de estratégias personalizadas de treino, ajustes na rotina de exercícios e acompanhamento de progresso, garantindo segurança e motivação.`







export default function TelaServicos({className}) {

    return (
        <section id='telaServicos' className={`tela telaServicos bordaGradiente ${className || ''}`}>
            <span className='tituloCard'>Serviços</span>
            
            <CardServico 
                servico={'Avaliação Física'} 
                texto_servico={texto_servico_1}
                imagem={'./teste/s1.jpg'}
            />

            <CardServico 
                servico={'Treinos'} 
                texto_servico={texto_servico_2}
                imagem={'./teste/s2.jpg'} 
            />
            
            <CardServico 
                servico={'Consultoria'} 
                texto_servico={texto_servico_3}
                imagem={'./teste/s3.jpg'}
            />
        </section>
    )
}