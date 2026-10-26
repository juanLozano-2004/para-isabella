import { useState } from 'react'
import FondoMagico from './components/FondoMagico'
import Calendario from './components/Calendario'
import ModalSorpresa from './components/ModalSorpresa'
import { sorpresas } from './data/sorpresas'

export default function App() {
  const [abierta, setAbierta] = useState(null)

  return (
    <>
      <FondoMagico />
      <main className="contenedor">
        <header className="cabecera">
          <h1 className="titulo-brillo">Para Isabella</h1>
          <p className="subtitulo">Cada día una sorpresa nueva, solo para ti ✨</p>
        </header>
        <Calendario sorpresas={sorpresas} onAbrir={setAbierta} />
        <p className="pie">Hecho con todo mi amor 💖</p>
      </main>
      {abierta && (
        <ModalSorpresa sorpresa={abierta} onCerrar={() => setAbierta(null)} />
      )}
    </>
  )
}