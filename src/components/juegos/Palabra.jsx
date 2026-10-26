import { useState } from 'react'

export default function Palabra({ sorpresa, onGanar }) {
  const palabra = (sorpresa.extra?.palabra || 'PRINCESA').toUpperCase()

  const [letras] = useState(() => {
    let m
    do {
      m = palabra.split('').map((l, i) => ({ l, i })).sort(() => Math.random() - 0.5)
    } while (m.map((x) => x.l).join('') === palabra && palabra.length > 1)
    return m
  })
  const [elegidas, setElegidas] = useState([])
  const [error, setError] = useState(false)
  const [listo, setListo] = useState(false)

  const elegir = (item) => {
    if (listo || error || elegidas.includes(item)) return
    const n = [...elegidas, item]
    setElegidas(n)
    if (n.length === palabra.length) {
      if (n.map((x) => x.l).join('') === palabra) {
        setListo(true)
        onGanar()
      } else {
        setError(true)
        setTimeout(() => { setError(false); setElegidas([]) }, 700)
      }
    }
  }

  const quitar = () => !listo && setElegidas(elegidas.slice(0, -1))

  return (
    <div>
      <p className="instruccion">Toca las letras en el orden correcto</p>
      {sorpresa.extra?.pista && <p className="pista">Pista: {sorpresa.extra.pista}</p>}

      <div className={`ranuras ${error ? 'temblar' : ''} ${listo ? 'correcto' : ''}`}>
        {palabra.split('').map((_, i) => (
          <span key={i} className="ranura">{elegidas[i]?.l || ''}</span>
        ))}
      </div>

      <div className="fichas">
        {letras.map((item) => (
          <button
            key={item.i}
            className={`ficha ${elegidas.includes(item) ? 'usada' : ''}`}
            onClick={() => elegir(item)}
          >
            {item.l}
          </button>
        ))}
      </div>

      {!listo && elegidas.length > 0 && (
        <button className="boton-suave" onClick={quitar}>↩ Borrar</button>
      )}
    </div>
  )
}