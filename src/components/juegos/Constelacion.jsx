import { useState, useMemo } from 'react'

// ─── Formas ────────────────────────────────────────────────────────────────
// Cada forma devuelve { linea, esquinas }:
//   linea:    contorno cerrado como lista de puntos [x, y] (cualquier escala)
//   esquinas: índices de `linea` donde SIEMPRE debe caer una estrella
//             (puntas, picos) para que la figura se reconozca.

const PASOS = 600

const curva = (fn) => Array.from({ length: PASOS }, (_, i) => fn((i / PASOS) * Math.PI * 2))

const FORMAS = {
    corazon: {
        nombre: 'un corazón', emoji: '❤️',
        crear: () => ({
            linea: curva(t => [
                16 * Math.sin(t) ** 3,
                -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
            ]),
            esquinas: [0, PASOS / 2] // hendidura de arriba y punta de abajo
        })
    },

    estrella: {
        nombre: 'una estrella', emoji: '⭐',
        crear: () => ({
            linea: Array.from({ length: 10 }, (_, i) => {
                const r = i % 2 === 0 ? 1 : 0.4
                const a = -Math.PI / 2 + (i * Math.PI) / 5
                return [r * Math.cos(a), r * Math.sin(a)]
            }),
            esquinas: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        })
    },

    luna: {
        nombre: 'una luna', emoji: '🌙',
        crear: () => {
            // Círculo grande (0,0,r=1) menos círculo (d,0,r2)
            const d = 0.5, r2 = 0.85
            const ix = (d * d + 1 - r2 * r2) / (2 * d)
            const iy = Math.sqrt(1 - ix * ix)
            const a0 = Math.atan2(iy, ix)
            const b0 = Math.atan2(iy, ix - d)
            const mitad = PASOS / 2
            const exterior = Array.from({ length: mitad }, (_, i) => {
                const a = a0 + (i / mitad) * (2 * Math.PI - 2 * a0)
                return [Math.cos(a), Math.sin(a)]
            })
            const interior = Array.from({ length: mitad }, (_, i) => {
                const b = 2 * Math.PI - b0 - (i / mitad) * (2 * Math.PI - 2 * b0)
                return [d + r2 * Math.cos(b), r2 * Math.sin(b)]
            })
            return { linea: [...exterior, ...interior], esquinas: [0, mitad] }
        }
    },

    flor: {
        nombre: 'una flor', emoji: '🌸',
        crear: () => {
            const linea = curva(t => {
                const a = t - Math.PI / 2
                const r = 0.35 + 0.65 * Math.abs(Math.sin(2.5 * t + Math.PI / 2))
                return [r * Math.cos(a), r * Math.sin(a)]
            })
            // 5 puntas de pétalo + 5 uniones entre pétalos
            const esquinas = Array.from({ length: 10 }, (_, i) => Math.round((i * PASOS) / 10))
            return { linea, esquinas }
        }
    },

    infinito: {
        nombre: 'un infinito, como lo nuestro', emoji: '♾️',
        crear: () => ({
            linea: curva(t => {
                const s = 1 + Math.sin(t) ** 2
                return [Math.cos(t) / s, (Math.sin(t) * Math.cos(t)) / s]
            }),
            esquinas: []
        })
    },

    diamante: {
        nombre: 'un diamante', emoji: '💎',
        crear: () => ({
            linea: [[-0.5, -0.75], [0.5, -0.75], [1, -0.25], [0, 1], [-1, -0.25]],
            esquinas: [0, 1, 2, 3, 4]
        })
    }
}

const NOMBRES_FORMAS = Object.keys(FORMAS)

// ─── Geometría ─────────────────────────────────────────────────────────────

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1])

// Punto a una distancia `s` a lo largo de un tramo abierto de puntos
function puntoEn(tramo, acum, s) {
    let i = 1
    while (i < acum.length - 1 && acum[i] < s) i++
    const L = acum[i] - acum[i - 1] || 1
    const f = (s - acum[i - 1]) / L
    const a = tramo[i - 1], b = tramo[i]
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]
}

function longitudes(tramo) {
    const acum = [0]
    for (let i = 1; i < tramo.length; i++) acum.push(acum[i - 1] + dist(tramo[i - 1], tramo[i]))
    return acum
}

// Reparte N estrellas sobre el contorno: una en cada esquina y el resto
// distribuidas de forma pareja según la longitud de cada tramo.
function repartir(linea, esquinas, N) {
    const anclas = esquinas.length && N >= esquinas.length ? [...esquinas].sort((a, b) => a - b) : [0]

    const tramos = anclas.map((desde, k) => {
        const hasta = anclas[(k + 1) % anclas.length]
        const pts = []
        let i = desde
        do { pts.push(linea[i]); i = (i + 1) % linea.length } while (i !== hasta)
        pts.push(linea[hasta])
        const acum = longitudes(pts)
        return { pts, acum, largo: acum[acum.length - 1] }
    })

    // Cuántas estrellas extra le tocan a cada tramo (resto mayor)
    const total = tramos.reduce((s, t) => s + t.largo, 0)
    const libres = N - anclas.length
    const ideal = tramos.map(t => (t.largo / total) * libres)
    const cuota = ideal.map(Math.floor)
    let faltan = libres - cuota.reduce((a, b) => a + b, 0)
    ideal
        .map((v, i) => [v - Math.floor(v), i])
        .sort((a, b) => b[0] - a[0])
        .slice(0, faltan)
        .forEach(([, i]) => cuota[i]++)

    const salida = []
    tramos.forEach((t, k) => {
        salida.push(t.pts[0])
        for (let j = 1; j <= cuota[k]; j++) {
            salida.push(puntoEn(t.pts, t.acum, (j / (cuota[k] + 1)) * t.largo))
        }
    })
    return salida
}

// Escala la figura para que quepa centrada en el cielo (300 × 270)
function encajar(pts) {
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1])
    const minX = Math.min(...xs), maxX = Math.max(...xs)
    const minY = Math.min(...ys), maxY = Math.max(...ys)
    const ancho = 240, alto = 210
    const k = Math.min(ancho / (maxX - minX || 1), alto / (maxY - minY || 1))
    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2
    return pts.map(([x, y]) => ({ x: 150 + (x - cx) * k, y: 135 + (y - cy) * k }))
}

// ─── Juego ─────────────────────────────────────────────────────────────────

export default function Constelacion({ sorpresa, onGanar }) {
    const N = sorpresa.extra?.estrellas || 12

    // extra.forma: 'corazon' | 'estrella' | 'luna' | 'flor' | 'infinito' | 'diamante'
    // Si no se indica (o es 'aleatoria'), se elige una al azar.
    const clave = useMemo(() => {
        const f = sorpresa.extra?.forma
        if (f && FORMAS[f]) return f
        return NOMBRES_FORMAS[Math.floor(Math.random() * NOMBRES_FORMAS.length)]
    }, [sorpresa.extra?.forma])
    const forma = FORMAS[clave]

    const puntos = useMemo(() => {
        const { linea, esquinas } = forma.crear()
        return encajar(repartir(linea, esquinas, N))
    }, [forma, N])

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
        <p className="instruccion">
            {prog === N
            ? `¡Es ${forma.nombre}! ${forma.emoji}`
            : 'Une las estrellas en orden y descubre qué forman ✨'}
        </p>
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
