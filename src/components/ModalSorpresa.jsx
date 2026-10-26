import { useState, useEffect, useMemo } from 'react'
import Carta from './juegos/Carta'
import RascaGana from './juegos/RascaGana'
import Memoria from './juegos/Memoria'
import Constelacion from './juegos/Constelacion'
import Palabra from './juegos/Palabra'
import AtrapaCorazones from './juegos/AtrapaCorazones'
import Burbujas from './juegos/Burbujas'

const JUEGOS = {
  carta: Carta, rasca: RascaGana, memoria: Memoria, constelacion: Constelacion,
  palabra: Palabra, atrapa: AtrapaCorazones, burbujas: Burbujas
}

function MensajeFinal({ texto }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (n >= texto.length) return
    const t = setTimeout(() => setN(n + 1), 40)
    return () => clearTimeout(t)
  }, [n, texto])

  let k = 0
  const palabras = texto.split(' ')

  return (
    <p className="mensaje-final">
      {palabras.map((p, wi) => {
        const ini = k
        k += p.length + 1
        if (ini >= n) return null
        return (
          <span key={wi}>
            <span className="palabra">
              {p.slice(0, n - ini).split('').map((c, ci) => (
                <span key={ci} className="letra">{c}</span>
              ))}
            </span>{' '}
          </span>
        )
      })}
      {n < texto.length && <span className="cursor">|</span>}
    </p>
  )
}

function Lluvia() {
  const items = useMemo(() => Array.from({ length: 35 }, (_, i) => ({
    i,
    x: Math.random() * 100,
    d: Math.random() * 1.5,
    t: 2 + Math.random() * 2.5,
    s: 0.8 + Math.random() * 1.4,
    e: ['💖', '💗', '💕', '🌸', '✨'][i % 5]
  })), [])

  return (
    <div className="lluvia">
      {items.map((c) => (
        <span key={c.i} style={{
          left: c.x + '%', animationDelay: c.d + 's',
          animationDuration: c.t + 's', fontSize: c.s + 'rem'
        }}>{c.e}</span>
      ))}
    </div>
  )
}

export default function ModalSorpresa({ sorpresa, onCerrar }) {
  const Juego = JUEGOS[sorpresa.tipo] || Carta
  const [ganado, setGanado] = useState(false)

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onCerrar()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [onCerrar])

  return (
    <div className="modal-fondo" onClick={onCerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={onCerrar} aria-label="Cerrar">×</button>
        <h2 className="modal-titulo">{sorpresa.titulo}</h2>
        <Juego sorpresa={sorpresa} onGanar={() => setGanado(true)} />
        {ganado && <MensajeFinal texto={sorpresa.mensaje} />}
      </div>
      {ganado && <Lluvia />}
    </div>
  )
}