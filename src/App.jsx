import { useState } from 'react';
import style from './App.module.scss';
import Menu from './componentes/Menu';


function App() {

  return (
    <div className={style.app}>
      <Menu />
    </div>
  )
}

export default App
