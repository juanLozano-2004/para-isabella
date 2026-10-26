import { useEffect, useRef } from 'react'

export default function RascaGana({ sorpresa, onGanar }) {
    const ref = useRef(null)
    const hecho = useRef(false)

    useEffect(() => {
        const c = ref.current
        const ctx = c.getContext('2d')
        ctx.globalCompositeOperation = 'source-over'

        const g = ctx.createLinearGradient(0, 0, c.width, c.height)
        g.addColorStop(0, '#c9b6ff')
        g.addColorStop(0.5, '#ffb3d6')
        g.addColorStop(1, '#b6e3ff')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, c.width, c.height)

        for (let i = 0; i < 400; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.7})`
        ctx.fillRect(Math.random() * c.width, Math.random() * c.height, 1.5, 1.5)
        }

        ctx.fillStyle = 'rgba(255,255,255,0.9)'
        ctx.font = 'bold 22px Quicksand, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('Rasca aquí ✨', c.width / 2, c.height / 2 + 8)

        ctx.globalCompositeOperation = 'destination-out'
        ctx.fillStyle = '#000'
    }, [])

    const rascar = (e) => {
        if (hecho.current) return
        if (e.pointerType === 'mouse' && e.buttons !== 1) return
        const c = ref.current
        const r = c.getBoundingClientRect()
        const ctx = c.getContext('2d')
        const x = ((e.clientX - r.left) * c.width) / r.width
        const y = ((e.clientY - r.top) * c.height) / r.height
        ctx.beginPath()
        ctx.arc(x, y, 24, 0, Math.PI * 2)
        ctx.fill()

        if (Math.random() < 0.2) {
        const d = ctx.getImageData(0, 0, c.width, c.height).data
        let vacios = 0
        for (let i = 3; i < d.length; i += 16) if (d[i] === 0) vacios++
        if (vacios / (d.length / 16) > 0.55) {
            hecho.current = true
            c.style.transition = 'opacity 1s'
            c.style.opacity = 0
            onGanar()
        }
        }
    }

    return (
        <div>
        <p className="instruccion">Rasca con tu dedo o el mouse 🪄</p>
        <div className="rasca-zona">
            <div className="rasca-premio">{sorpresa.extra?.premio || '💖'}</div>
            <canvas
            ref={ref}
            width={300}
            height={160}
            onPointerDown={rascar}
            onPointerMove={rascar}
            />
        </div>
        </div>
    )
}