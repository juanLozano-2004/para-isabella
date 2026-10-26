import { useState } from 'react'

const BASE = ['💖', '🌹', '🌙', '🦋', '🍓', '✨']
const barajar = (a) => [...a].sort(() => Math.random() - 0.5)

export default function Memoria({ sorpresa, onGanar }) {
    const emojis = sorpresa.extra?.emojis || BASE
    const [cartas] = useState(() =>
        barajar([...emojis, ...emojis]).map((e, i) => ({ id: i, e }))
    )
    const [volteadas, setVolteadas] = useState([])
    const [encontradas, setEncontradas] = useState([])

    const tocar = (id) => {
        if (volteadas.length === 2 || volteadas.includes(id) || encontradas.includes(id)) return
        const nv = [...volteadas, id]
        setVolteadas(nv)

        if (nv.length === 2) {
        const [a, b] = nv.map((i) => cartas[i])
        if (a.e === b.e) {
            const ne = [...encontradas, a.id, b.id]
            setEncontradas(ne)
            setVolteadas([])
            if (ne.length === cartas.length) setTimeout(onGanar, 600)
        } else {
            setTimeout(() => setVolteadas([]), 850)
        }
        }
    }

    return (
        <div>
        <p className="instruccion">Encuentra todas las parejas 🃏</p>
        <div className="mem-grid">
            {cartas.map((c) => {
            const clase = [
                'carta-mem',
                volteadas.includes(c.id) && 'volteada',
                encontradas.includes(c.id) && 'encontrada'
            ].filter(Boolean).join(' ')
            return (
                <button key={c.id} className={clase} onClick={() => tocar(c.id)}>
                <div className="interior">
                    <div className="cara atras">♥</div>
                    <div className="cara frente">{c.e}</div>
                </div>
                </button>
            )
            })}
        </div>
        </div>
    )
}