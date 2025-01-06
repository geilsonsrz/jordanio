import './TelaContato.scss'


export default function TelaContato({className}) {

    return (
        <section id='telaContato' className={`tela telaContato bordaGradiente ${className || ''}`}>
            <span className='tituloCard'>Contato</span>

            {/* contact__container container grid */}
            <span className='conteinerForm'>

                {/* contact__form grid */}
                <form
                    className='formulario' 
                    action=""
                >
                    {/* contact__group grid */}
                    <span className='conteinerItensForm'>
                        <input 
                            type='text' 
                            name='user_name' 
                            id=''
                            placeholder='Nome'
                            className='inputForm'
                            required
                        />
                        <input 
                            type='email' 
                            name='user_email' 
                            id=''
                            placeholder='Email'
                            className='inputForm'
                            required
                        />
                    </span>

                    <textarea 
                        name='user_mensagem' 
                        id=''
                        className='inputForm areaMensagem'
                        placeholder='Messagem'
                    ></textarea>

                    <button 
                        type='submit'
                        className='botao'
                    >
                        Enviar
                    </button>

                    <span
                        className='confirmacaoForm'
                    >
                        Mensagem de confirmação do envio.
                    </span>


                </form>
            </span>
            
        </section>
    )
}