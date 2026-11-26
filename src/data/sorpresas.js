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
  {
    fecha: '2026-11-12',
    tipo: 'constelacion',
    titulo: 'Une las estrellas que muestran la luz que le das a mi vida.',
    mensaje: 'Cada vez que mires al cielo, recuerda que hay una constelación que lleva tu nombre, porque eres la luz que ilumina mi vida y la razón de mi felicidad.',
    extra: { estrellas: 20}
  },
  {
    fecha: '2026-11-13',
    tipo: 'palabra',
    titulo: 'Para el mensaje encontrar, la palabra secreta debes ordenar',
    mensaje: 'Eres la mejor mi vida, te adoro.',
    extra: { palabra: 'FIONA', pista: 'Alguien que te ama y te espera mucho' }
  },
  {
    fecha: '2026-11-14',
    tipo: 'atrapa todo mi amor',
    titulo: 'turno de ser veloz mi vida',
    mensaje: 'cada dia mi corazon late mas rapido por ti, eres lo mejor que me ha pasado en la vida y lo mejor que me pasara, te adoro mi cielo',
    extra: { meta: 18 }
  },
  {
    fecha: '2026-11-15',
    tipo: 'burbujas',
    titulo: 'Como papel burbuja mi amor, revienta las burbujas y descubre el mensaje secreto que te tengo preparado',
    mensaje: 'Eres el amor de mi vida, mi compañera y mi mejor amiga. Gracias por cada momento compartido y por hacer que cada día sea especial. Te amo con todo mi corazón y siempre lo haré.',
    extra: { palabras: ['Te','adoro','con','todo','mi','ser,','gracias','por','iluminar',',mi','vida','y','darme','un','amor,','tan', 'bello', 'como', 'lo', 'das', 'tu,', 'te', 'adoro'] }
  },
  {
    fecha: '2026-11-16',
    tipo: 'carta',
    titulo: 'Una carta para empezar esta nueva semana juntos mi amor',
    mensaje: 'Mi amor, una semana más a tu lado y una semana más en la que me enamoro de ti como el primer día. Gracias por tu paciencia, por tu ternura y por esa sonrisa que me arregla cualquier día. Que esta semana sea tan bonita como tú.',
    extra: { firma: 'Con todo mi amor, tu novio 💌. Hoy y siempre.' }
  },
  {
    fecha: '2026-11-17',
    tipo: 'rasca',
    titulo: 'Hay un premio escondido para ti mi vida, rasca y descúbrelo',
    mensaje: 'Este cupón es válido por un día de consentirte: tu comida favorita, una película que tú elijas y todos los abrazos y besos que quieras. Tú pones la fecha, yo me encargo del resto.',
    extra: { premio: '🎟️ Cupón: 1 día de consentirte' }
  },
  {
    fecha: '2026-11-18',
    tipo: 'memoria',
    titulo: 'Encuentra todas las parejas mi amor y descubre lo que mi corazón quiere decirte',
    mensaje: 'Puedo olvidar muchas cosas, pero nunca olvidaré cómo me miras, cómo te ríes y cómo me haces sentir en casa cuando estoy contigo. Eres mi recuerdo favorito y el que quiero seguir construyendo toda la vida.',
    extra: { emojis: ['💕', '🌷', '☀️', '🐻', '🍫', '💍', '🎀', '🌈'] }
  },
  {
    fecha: '2026-11-19',
    tipo: 'constelacion',
    titulo: 'Une las estrellas mi cielo y mira lo que el universo escribió para ti',
    mensaje: 'Dicen que las estrellas guían a quien se pierde, pero yo no necesito mirar al cielo: desde que te conocí, mi camino siempre lleva a ti. Te amo, Isabella, más que a todas las estrellas juntas.',
    extra: { estrellas: 16 }
  },
  {
    fecha: '2026-11-20',
    tipo: 'constelacion',
    titulo: 'Une las estrellas mi amor',
    mensaje: 'Las estrellas del cielo no se comparan con la luz que traes a mi vida. Eres mi guía, mi inspiración y la razón por la que sonrío cada día. Te amo más de lo que las palabras pueden expresar.',
    extra: { estrellas: 12 }
  },
  {
    fecha: '2026-11-21',
    tipo: 'palabra',
    titulo: 'Ordena la palabra secreta',
    mensaje: 'Es lo que eres para mi, mi futuro',
    extra: { palabra: 'ESPOSA', pista: 'Lo que pronto seremos mi vida' }
  },
  {
    fecha: '2026-11-22',
    tipo: 'atrapa todo mi amor',
    titulo: 'Cada corazon que atrapes es un pedacito de mi amor para ti, aunque no sean el real porque ya eres dueña de el desde que nos conocimos mi amor',
    mensaje: 'Cada corazon que atrapes es un pedacito de mi amor para ti, aunque no sean el real porque ya eres dueña de el desde que nos conocimos mi amor, te adoro mi cielo',
    extra: { meta: 22 }
  },
  {
    fecha: '2026-11-23',
    tipo: 'burbujas',
    titulo: 'Revienta las burbujas',
    mensaje: 'Este papelito de burbuja es para ti, mi amor. Cada burbuja que revientes es un recordatorio de lo mucho que te amo y de lo feliz que me haces cada día. Gracias por ser mi compañera, mi amiga y mi amor eterno.',
    extra: { palabras: ['Tu','Isabella','haces','que','mi','vida','sea','muchisimo','mejor',',te','adoro','con','todo','mi','ser,','eres', 'mi', 'persona', 'favorita', 'en', 'todo', 'el', 'mundo'] }
  },
  {
    fecha: '2026-11-24',
    tipo: 'carta',
    titulo: 'Para que veas cuanto te amo mi vida, una carta para ti',
    mensaje: 'Te extraño mucho, mi amor. Cada día sin ti se siente incompleto, y no puedo esperar para abrazarte de nuevo. Eres mi todo, Isabella, y te amo más de lo que las palabras pueden expresar.',
    extra: { firma: 'Con todo el amor del mundo, tu novio 💌. SIEMPRE tuyo.' }
  },
  {
    fecha: '2026-11-27',
    tipo: 'rasca',
    titulo: 'Hay un premio escondido para ti mi vida, debes deseentrarlo y descubrirlo',
    mensaje: 'Esto es para ti, mi amor. Una vida de consentirte, donde tú eliges la comida, la película y todo lo que quieras hacer. Solo dime cuándo y yo me encargo de que sea un día inolvidable.',
    extra: { premio: '🎟️ Cupón: 1 vida juntos como esposos' }
  },
  {
    fecha: '2026-11-26',
    tipo: 'memoria',
    titulo: 'Como nosotros, debes encontrar todas las parejas para descubrir el mensaje secreto que te tengo preparado.',
    mensaje: 'Te amo con todo mi ser, Isabella. Cada momento contigo es un tesoro que guardo en mi corazón. Gracias por ser mi compañera, mi amiga y mi amor eterno. Eres mi todo y siempre lo serás.',
    extra: { emojis: ['💕', '🌷', '☀️', '🐻', '🍫', '💍', '🎀', '🌈'] }
  },
  {
    fecha: '2026-11-25',
    tipo: 'maraton',
    titulo: 'Nuestra maratón de videos',
    mensaje: 'Esta maratón guarda tres pedacitos de nosotros. Gracias por cada recuerdo, cada risa y cada momento juntos. Eres mi amor, mi historia favorita y mi hogar.',
    extra: {
      videos: [
        { titulo: 'Nuestro primer recuerdo', src: '/videos/video-1.mp4' },
        { titulo: 'Todas las aventuras contigo', src: '/videos/video-2.mp4' },
        { titulo: 'Mi mensaje final para ti', src: '/videos/video-3.mp4' }
      ]
    }
  },
] 