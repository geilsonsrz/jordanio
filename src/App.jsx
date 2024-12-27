import NavBar from './componentes/NavBar';
import TelaInicial from './componentes/TelaInicial';


function App() {

  // Inicia adicionando o tema primário
  document.getElementById('root').classList.add('tema1')

  return (
    <>
      <NavBar />
      <TelaInicial />
      <TelaInicial />
    </>
  )
}

export default App
