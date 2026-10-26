import { useState, useEffect, useRef } from 'react'

const TIPOS = ['💖', '💗', '💘', '💝', '💕']

export default function AtrapaCorazones({ sorpresa, onGanar }) {
    const meta = sorpresa.extra?.meta || 10
    const [items, setItems] = useState([])
    const [cont, setCont] = useState(0)
    const id = useRef(0)
    const terminado = cont >= meta

    useEffect(() => {
        if (terminado) return
        const t = setInterval(() => {
        setItems((a) => [...a, {
            id: id.current++,
            x: 5 + Math.random() * 82,
            dur: 2.6 + Math.random() * 2,
            e: TIPOS[Math.floor(Math.random() * TIPOS.length)]
        }])
        }, 550)
        return () => clearInterval(t)
    }, [terminado])

    useEffect(() => {
        if (terminado) onGanar()
    }, [terminado])

    const atrapar = (it) => {
        if (it.ok || terminado) return
        setItems((a) => a.map((x) => (x.id === it.id ? { ...x, ok: true } : x)))
        setCont((c) => c + 1)
        setTimeout(() => setItems((a) => a.filter((x) => x.id !== it.id)), 400)
    }

    return (
        <div>
        <p className="instruccion">
            Atrapa {meta} corazones: <b>{Math.min(cont, meta)}/{meta}</b>
        </p>
        <div className="atrapa-zona">
            {items.map((it) => (
            <span
                key={it.id}
                className="cae"
                style={{ left: it.x + '%', animationDuration: it.dur + 's' }}
                onPointerDown={() => atrapar(it)}
                onAnimationEnd={(e) => {
                if (e.animationName === 'caer')
                    setItems((a) => a.filter((x) => x.id !== it.id))
                }}
            >
                <span className={`in ${it.ok ? 'atrapado' : ''}`}>{it.e}</span>
            </span>
            ))}
        </div>
        <div className="barra">
            <div style={{ width: Math.min(cont / meta, 1) * 100 + '%' }} />
        </div>
        </div>
    )
}