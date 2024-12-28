import MenuMenor from './componentes/MenuMenor';
import NavBar from './componentes/NavBar';
import TelaInicial from './componentes/TelaInicial';
import TelaSobre from './componentes/TelaSobre';
import TelaServicos from './componentes/TelaServicos';
import TelaConteudos from './componentes/TelaConteudos';
import TelaContato from './componentes/TelaContato';


function App() {

  // Inicia adicionando o tema primário
  document.getElementById('root').classList.add('tema1')

  return (
    <>
      <NavBar />
      <MenuMenor />

      {/*   ÍNICIO 
      - Cartão de entrada
      - Cara do negócio
      */}
      <TelaInicial />

      {/*   SOBRE
      - Breve apresentação
      - Filosofia de trabalho
      - Formações e certificações
      - Exepriência relevante
      */}
      <TelaSobre />

      {/* Serviços */}
      <TelaServicos />

      {/* Conteúdos educativos */}
      <TelaConteudos />

      {/* Contato */}
      <TelaContato />

      {/* Footer */}
    </>
  )
}

export default App
