import { useState } from 'react'

export default function Burbujas({ sorpresa, onGanar }) {
    const palabras = sorpresa.extra?.palabras || ['Eres', 'mi', 'persona', 'favorita']

    const [burbujas] = useState(() => palabras.map((p, i) => ({
        i, p,
        x: 5 + Math.random() * 72,
        y: 5 + Math.random() * 60,
        d: 3 + Math.random() * 3,
        h: Math.random() * 360
    })))
    const [rotas, setRotas] = useState([])

    const romper = (i) => {
        if (rotas.includes(i)) return
        const n = [...rotas, i]
        setRotas(n)
        if (n.length === palabras.length) setTimeout(onGanar, 700)
    }

    return (
        <div>
        <p className="instruccion">Cada burbuja esconde una palabra 🫧</p>
        <div className="frase">
            {palabras.map((p, i) => (
            <span key={i} className={rotas.includes(i) ? 'pal visible' : 'pal'}>
                {rotas.includes(i) ? p : '•••'}
            </span>
            ))}
        </div>
        <div className="burbujas-zona">
            {burbujas.map((b) =>
            !rotas.includes(b.i) ? (
                <button
                key={b.i}
                className="burbuja"
                style={{ left: b.x + '%', top: b.y + '%', '--d': b.d + 's', '--h': b.h }}
                onClick={() => romper(b.i)}
                aria-label="burbuja"
                />
            ) : (
                <span key={b.i} className="estallido" style={{ left: b.x + '%', top: b.y + '%' }} />
            )
            )}
        </div>
        </div>
    )
}