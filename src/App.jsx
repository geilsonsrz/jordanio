import MenuMenor from './componentes/MenuMenor';
import NavBar from './componentes/NavBar';
import TelaInicial from './componentes/TelaInicial';


function App() {

  // Inicia adicionando o tema primário
  document.getElementById('root').classList.add('tema1')

  return (
    <>
      <NavBar />
      <MenuMenor />
      <TelaInicial />
      <TelaInicial />
    </>
  )
}

export default App
