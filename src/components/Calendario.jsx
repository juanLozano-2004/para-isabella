import { useState, useMemo } from 'react'
import { hoyISO, aISO, diasEntre } from '../utils/fechas'

const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
    const ICONOS = {
    carta: '💌', rasca: '🎟️', memoria: '🃏', constelacion: '🌌',
    palabra: '🔤', atrapa: '💘', burbujas: '🫧'
    }

    export default function Calendario({ sorpresas, onAbrir }) {
    const hoy = hoyISO()
    const [ref, setRef] = useState(() => {
        const d = new Date()
        return { y: d.getFullYear(), m: d.getMonth() }
    })
    const [vistas, setVistas] = useState(() => {
        try { return JSON.parse(localStorage.getItem('vistas')) || [] } catch { return [] }
    })

    const mapa = useMemo(
        () => Object.fromEntries(sorpresas.map((s) => [s.fecha, s])),
        [sorpresas]
    )

    const offset = (new Date(ref.y, ref.m, 1).getDay() + 6) % 7
    const diasMes = new Date(ref.y, ref.m + 1, 0).getDate()
    const celdas = [...Array(offset).fill(null), ...Array.from({ length: diasMes }, (_, i) => i + 1)]

    const cambiar = (delta) =>
        setRef(({ y, m }) => {
        const d = new Date(y, m + delta, 1)
        return { y: d.getFullYear(), m: d.getMonth() }
        })

    const abrir = (s) => {
        if (!vistas.includes(s.fecha)) {
        const n = [...vistas, s.fecha]
        setVistas(n)
        try { localStorage.setItem('vistas', JSON.stringify(n)) } catch {}
        }
        onAbrir(s)
    }

    return (
        <section className="calendario">
        <div className="cal-nav">
            <button onClick={() => cambiar(-1)} aria-label="Mes anterior">‹</button>
            <h2>{MESES[ref.m]} {ref.y}</h2>
            <button onClick={() => cambiar(1)} aria-label="Mes siguiente">›</button>
        </div>

        <div className="cal-grid" key={`${ref.y}-${ref.m}`}>
            {DIAS.map((d) => <div key={d} className="cal-dia-nombre">{d}</div>)}

            {celdas.map((dia, i) => {
            if (!dia) return <div key={'v' + i} />
            const iso = aISO(ref.y, ref.m, dia)
            const s = mapa[iso]
            const bloqueada = iso > hoy
            const clases = [
                'celda',
                s && 'con-sorpresa',
                s && bloqueada && 'bloqueada',
                iso === hoy && 'hoy',
                s && vistas.includes(iso) && 'vista'
            ].filter(Boolean).join(' ')

            return (
                <button
                key={iso}
                className={clases}
                style={{ '--i': i }}
                disabled={!s || bloqueada}
                onClick={() => abrir(s)}
                title={s && bloqueada ? `Faltan ${diasEntre(hoy, iso)} días 💭` : ''}
                >
                <span className="numero">{dia}</span>
                {s && <span className="icono">{bloqueada ? '🔒' : ICONOS[s.tipo]}</span>}
                </button>
            )
            })}
        </div>
        </section>
    )
    }