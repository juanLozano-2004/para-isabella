import { useEffect, useRef } from 'react'

export default function FondoMagico() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let w, h, raf

    const ajustar = () => { w = c.width = innerWidth; h = c.height = innerHeight }
    ajustar()
    addEventListener('resize', ajustar)

    function nuevoOrbe(inicio) {
      return {
        x: Math.random() * w,
        y: inicio ? Math.random() * h : h + 20,
        r: 2 + Math.random() * 4,
        v: 0.2 + Math.random() * 0.6,
        fase: Math.random() * Math.PI * 2,
        corazon: Math.random() < 0.4
      }
    }

    function corazon(x, y, s) {
      ctx.beginPath()
      ctx.moveTo(x, y + s * 0.3)
      ctx.bezierCurveTo(x, y, x - s, y, x - s, y + s * 0.3)
      ctx.bezierCurveTo(x - s, y + s * 0.7, x, y + s, x, y + s * 1.2)
      ctx.bezierCurveTo(x, y + s, x + s, y + s * 0.7, x + s, y + s * 0.3)
      ctx.bezierCurveTo(x + s, y, x, y, x, y + s * 0.3)
      ctx.fill()
    }

    const orbes = Array.from({ length: 45 }, () => nuevoOrbe(true))
    const chispas = []

    const mover = (e) => {
      for (let i = 0; i < 2; i++) {
        chispas.push({
          x: e.clientX, y: e.clientY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          vida: 1, hue: 320 + Math.random() * 50
        })
      }
    }

    const explotar = (e) => {
      for (let i = 0; i < 28; i++) {
        const a = (i / 28) * Math.PI * 2
        const vel = 2 + Math.random() * 2
        chispas.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(a) * vel, vy: Math.sin(a) * vel,
          vida: 1, hue: 330 + Math.random() * 40
        })
      }
    }

    addEventListener('pointermove', mover)
    addEventListener('pointerdown', explotar)

    function loop(t) {
      ctx.clearRect(0, 0, w, h)

      orbes.forEach((o, i) => {
        o.y -= o.v
        o.x += Math.sin(t / 1000 + o.fase) * 0.3
        const brillo = 0.35 + Math.sin(t / 600 + o.fase) * 0.3
        ctx.fillStyle = `rgba(255, ${170 + o.r * 10}, 220, ${Math.max(brillo, 0.05)})`
        ctx.shadowBlur = 15
        ctx.shadowColor = '#ff8fc7'
        if (o.corazon) corazon(o.x, o.y, o.r * 1.6)
        else { ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2); ctx.fill() }
        if (o.y < -20) orbes[i] = nuevoOrbe(false)
      })

      for (let i = chispas.length - 1; i >= 0; i--) {
        const p = chispas[i]
        p.x += p.vx; p.y += p.vy; p.vy += 0.03; p.vida -= 0.02
        if (p.vida <= 0) { chispas.splice(i, 1); continue }
        ctx.fillStyle = `hsla(${p.hue}, 100%, 75%, ${p.vida})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.5 * p.vida, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', ajustar)
      removeEventListener('pointermove', mover)
      removeEventListener('pointerdown', explotar)
    }
  }, [])

  return <canvas ref={ref} className="fondo" />
}