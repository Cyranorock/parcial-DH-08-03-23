import { useState } from 'react'
import './App.css'
import Bienvenida from './component/Bienvenida'
import Formulario from './component/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Bienvenida/>
      <Formulario/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </div>
  )
}

export default App
