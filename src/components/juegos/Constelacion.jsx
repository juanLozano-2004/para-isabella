import { useState, useMemo } from 'react'

export default function Constelacion({ sorpresa, onGanar }) {
    const N = sorpresa.extra?.estrellas || 12

    const puntos = useMemo(() => Array.from({ length: N }, (_, i) => {
        const t = (i / N) * Math.PI * 2
        return {
        x: 150 + 128 * Math.sin(t) ** 3,
        y: 115 - 8 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
        }
    }), [N])

    const polvo = useMemo(() => Array.from({ length: 70 }, () => ({
        x: Math.random() * 300, y: Math.random() * 270,
        r: Math.random() * 1.2 + 0.2, d: Math.random() * 3
    })), [])

    const [prog, setProg] = useState(0)
    const [error, setError] = useState(false)

    const tocar = (i) => {
        if (prog === N) return
        if (i === prog) {
        const n = prog + 1
        setProg(n)
        if (n === N) setTimeout(onGanar, 900)
        } else {
        setError(true)
        setTimeout(() => setError(false), 400)
        }
    }

    const lineas = []
    for (let i = 1; i < prog; i++) lineas.push([puntos[i - 1], puntos[i]])
    if (prog === N) lineas.push([puntos[N - 1], puntos[0]])

    return (
        <div>
        <p className="instruccion">Une las estrellas en orden y descubre qué forman ✨</p>
        <svg
            viewBox="0 0 300 270"
            className={`cielo ${error ? 'temblar' : ''} ${prog === N ? 'completo' : ''}`}
        >
            {polvo.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} className="polvo"
                style={{ animationDelay: s.d + 's' }} />
            ))}
            {lineas.map(([a, b], i) => (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="trazo" />
            ))}
            {puntos.map((p, i) => (
            <g key={i} onClick={() => tocar(i)} style={{ cursor: 'pointer' }}>
                <circle cx={p.x} cy={p.y} r="16" fill="transparent" />
                <circle
                cx={p.x} cy={p.y} r={i < prog ? 6 : 4}
                className={`estrella ${i < prog ? 'activa' : ''} ${i === prog ? 'siguiente' : ''}`}
                />
                <text x={p.x + 8} y={p.y - 8} className="num">{i + 1}</text>
            </g>
            ))}
        </svg>
        </div>
    )
}