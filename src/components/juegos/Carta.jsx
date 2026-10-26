import { useState } from 'react'

export default function Carta({ sorpresa, onGanar }) {
    const [abierta, setAbierta] = useState(false)

    const abrir = () => {
        if (abierta) return
        setAbierta(true)
        setTimeout(onGanar, 1400)
    }

    return (
        <div>
        <p className="instruccion">{abierta ? 'Lee con el corazón 💕' : 'Toca el sobre 💌'}</p>
        <div className={`sobre ${abierta ? 'abierto' : ''}`} onClick={abrir}>
            <div className="sobre-carta">
            <span>{sorpresa.extra?.firma || 'Te amo 💖'}</span>
            </div>
            <div className="sobre-frente" />
            <div className="sobre-solapa" />
            <div className="sello">❤</div>
        </div>
        </div>
    )
}