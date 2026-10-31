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
    titulo: 'Si quieres tu premio mi amor, debes desenterrarlo',
    mensaje: 'Este cupón es válido por una cita sorpresa planeada completamente por mí. Tú solo tienes que decir cuándo.',
    extra: { premio: '🎟️ Cupón: 1 cita sorpresa' }
  },
  {
    fecha: '2026-10-28',
    tipo: 'memoria',
    titulo: 'Encuentra las parejas mi amor para descubrir el mensaje secreto',
    mensaje: 'Igual que estas cartas, yo también encontré a mi pareja perfecta. Y fuiste tú, Isabella, en ese aeropuerto donde inicio nuestra bella historia, te amo muchisimo',
    extra: { emojis: ['💖', '🌹', '🌙', '🦋', '🍓', '✨'] }
  },
  {
    fecha: '2026-10-29',
    tipo: 'constelacion',
    titulo: 'Une las estrellas mi amor',
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
    tipo: 'atrapa todo mi amor',
    titulo: 'Atrapa todos mis corazones, aunque no sean el real porque ya eres dueña de el desde que nos conocimos mi amor',
    mensaje: 'Aunque la verdad no tenías que atraparlos, Mi corazones ya es tuyo desde hace mucho, porque te lo ganaste y porque lomereces, lo cuidas y lo amas, te adoro mi cielo',
    extra: { meta: 30 }
  },
  {
    fecha: '2026-11-01',
    tipo: 'burbujas',
    titulo: 'Revienta las burbujas',
    mensaje: 'Gracias por cada domingo, cada risa y cada abrazo. Te amo más de lo que las palabras alcanzan a decir.',
    extra: { palabras: ['Eres', 'mi', 'persona', 'favorita', 'en', 'todo', 'el', 'mundo'] }
  }
]