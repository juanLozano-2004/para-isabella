// Cada sorpresa necesita:
//   fecha:   "AAAA-MM-DD"  (el día en que se desbloquea)
//   tipo:    carta | rasca | memoria | constelacion | palabra | atrapa | burbujas
//   titulo:  lo que verá arriba del juego
//   mensaje: el mensaje que aparece al ganar (una sola línea, sin saltos)
//   extra:   opciones especiales de cada juego (ver ejemplos)

export const sorpresas = [
  {
    fecha: '2026-10-26',
    tipo: 'carta',
    titulo: 'Una carta para empezar la semana',
    mensaje: 'Buenos días, mi amor. Quería que sepas que desde el inicio de la semana que te amo con todo mi corazón y que haría lo que fuera por ti.',
    extra: { firma: 'Con amor, tu novio 💌. Eres lo más importante para mí.' }
  },
  {
    fecha: '2026-10-27',
    tipo: 'rasca',
    titulo: 'Rasca y descubre tu premio',
    mensaje: 'Este cupón es válido por una cita sorpresa planeada completamente por mí. Tú solo tienes que decir cuándo.',
    extra: { premio: '🎟️ Cupón: 1 cita sorpresa' }
  },
  {
    fecha: '2026-10-28',
    tipo: 'memoria',
    titulo: 'Encuentra las parejas',
    mensaje: 'Igual que estas cartas, yo también encontré a mi pareja perfecta. Y fuiste tú, Isabella.',
    extra: { emojis: ['💖', '🌹', '🌙', '🦋', '🍓', '✨'] }
  },
  {
    fecha: '2026-10-29',
    tipo: 'constelacion',
    titulo: 'Une las estrellas',
    mensaje: 'Si pudiera dibujar en el cielo, todas las estrellas formarían tu nombre. Eres mi lugar favorito del universo.',
    extra: { estrellas: 12 }
  },
  {
    fecha: '2026-10-30',
    tipo: 'palabra',
    titulo: 'Ordena la palabra secreta',
    mensaje: 'Eso eres para mí: mi PRINCESA. Hoy es viernes y solo quiero recordarte lo especial que eres.',
    extra: { palabra: 'PRINCESA', pista: 'Así te veo siempre 👑' }
  },
  {
    fecha: '2026-10-31',
    tipo: 'atrapa',
    titulo: 'Atrapa todos mis corazones',
    mensaje: 'Aunque la verdad no tenías que atraparlos, todos mis corazones ya eran tuyos desde hace mucho.',
    extra: { meta: 12 }
  },
  {
    fecha: '2026-11-01',
    tipo: 'burbujas',
    titulo: 'Revienta las burbujas',
    mensaje: 'Gracias por cada domingo, cada risa y cada abrazo. Te amo más de lo que las palabras alcanzan a decir.',
    extra: { palabras: ['Eres', 'mi', 'persona', 'favorita', 'en', 'todo', 'el', 'mundo'] }
  }
]