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
    mensaje: 'Gracias por cada domingo, cada risa y cada abrazo, cada día te amo más de lo que las palabras alcanzan a decir, ya el decir te amo, te adoro o que me encantas se queda corto, porque eres lo mejor que me ha pasado en la vida y lo mejor que me pasaráy hasta el día que encuentre la palabra que diga lo que siento, te lo demostraré',
    extra: { palabras: ['Tu','Isabella','haces','que','mi','vida','sea','muchisimo','mejor',',te','adoro','con','todo','mi','ser,','eres', 'mi', 'persona', 'favorita', 'en', 'todo', 'el', 'mundo'] }
  },
  {
    fecha: '2026-11-02',
    tipo: 'carta',
    titulo: 'Una carta para cerrar la semana e iniciarla con un gran festivo',
    mensaje: 'Mi amor, quiero que sepas que cada día a tu lado es un regalo, gracias por ser mi compañera, mi amiga y mi amor eterno y la bendición más grande que me ha dado la vida, te amo con todo mi corazón y siempre lo haré.',
    extra: { firma: 'Con todo mi amor, tu novio 💌. SIEMPRE tuyo.' }
  },
  {
    fecha: '2026-11-03',
    tipo: 'rasca',
    titulo: 'Descubre un pedazo de nuestra historia mi amor',
    mensaje: 'Desde el primer día que nos conocimos, supe que había algo especial entre nosotros. Cada momento contigo es un tesoro que guardo en mi corazón. Gracias por ser mi compañera de vida y por hacerme sentir amado cada día.',
    extra: { premio: '🎟️ Una vida juntos ❤️' }
  },
  {
    fecha: '2026-11-04',
    tipo: 'memoria',
    titulo: 'Debes de jugar mi amor para desbloquear el mnensaje secreto que te tengo preparado',
    mensaje: 'Gracias por dedicar un tiempo de tu vida a mi vida, gracias por cada momento que hemos compartido, gracias por ser mi compañera, mi amiga y mi amor eterno. Te amo con todo mi corazón y siempre lo haré.',
    extra: { emojis: ['💖', '🌹', '🌙', '🦋', '🍓', '✨'] }
  },
  {
    fecha: '2026-11-05',
    tipo: 'constelacion',
    titulo: 'Ve paso a paso mi amor y une las estrellas para descubrir el mensaje secreto que te tengo preparado',
    mensaje: 'Ni todas las estrellas del cielo podrían igualar la luz que traes a mi vida. Eres mi guía y mi inspiración, y cada día contigo es un regalo que atesoro profundamente.',
    extra: { estrellas: 20 }
  },
  {
    fecha: '2026-11-06',
    tipo: 'palabra',
    titulo: 'Descubre mi amor la palabra secreta que te tengo preparada',
    mensaje: 'Esta palabra representa algo con lo que inicio nuestra relación y que siempre me recuerda a ti: aunque no me lo aceptaras mi amor jeje.',
    extra: { palabra: 'SANDWICH', pista: 'Lo primero que te ofreci mi amor' }
  },
  {
    fecha: '2026-11-07',
    tipo: 'Como mi corazon es tuyo, atrapa todos mis corazones mi amor',
    titulo: 'Atrapa todos mis corazones, aunque no sean el real porque ya eres dueña de el desde que nos conocimos mi amor',
    mensaje: 'Gracias por darle sentido a mi vida, por hacerme sentir amado y por ser mi compañera en cada paso del camino. Eres mi todo, Isabella, y te amo más de lo que las palabras pueden expresar.',
    extra: { meta: 15 }
  },
  {
    fecha: '2026-11-08',
    tipo: 'burbujas',
    titulo: 'Revienta las burbujas',
    mensaje: 'Isabella, gracias por brindarme cada dia mas amor, apoyio, alegria, felicidad, y por ser la mejor novia del mundo, te amo con todo mi corazon y siempre lo hare, eres lo mejor que me ha pasado en la vida y lo mejor que me pasara, te adoro mi cielo',
    extra: { palabras: ['Eres',"la","mujer", 'que', 'mi', 'vida', 'necesitaba', 'te', 'amo', 'con', 'todo', 'mi', 'ser', 'y', 'agradezco', 'que', 'me', 'dejaras', 'entrar', 'en', 'tu', 'vida', 'te', 'amo'] }
  },
  {
    fecha: '2026-11-09',
    tipo: 'carta',
    titulo: 'Una carta para iniciar la semnana mi amor',
    mensaje: 'Isa, jamas olvides la mujer tan maravillosa que eres, te amo con todo mi corazon y siempre lo hare, eres lo mejor que me ha pasado en la vida y lo mejor que me pasara, te adoro mi cielo',
    extra: { firma: 'Eres la mejor mi vida, te adoro.' }
  },
  {
    fecha: '2026-11-10',
    tipo: 'rasca',
    titulo: 'Necesitas descubrir tu premio mi amor, asi que rasca y descubre lo que te tengo preparado',
    mensaje: 'Este cupón es válido por una noche de juegos y diversión juntos, donde tú eliges la actividad y yo me encargo de todo lo demás. ¡Será una noche inolvidable!',
    extra: { premio: '🎟️ Cupón: Noche de juegos juntos' }
  },
  {
    fecha: '2026-11-11',
    tipo: 'memoria',
    titulo: 'Debes descubrir el mensaje secreto mi amor, asi que juega y desbloquealo',
    mensaje: 'Igual que estas cartas, yo también encontré a mi pareja perfecta. Y fuiste tú, Isabella, en ese aeropuerto donde inicio nuestra bella historia, te amo muchisimo',
    extra: { emojis: ['🐶', '👀', '💫', '🦋', '🍓', '✨','💩','😅','😍'] }
  },
] 