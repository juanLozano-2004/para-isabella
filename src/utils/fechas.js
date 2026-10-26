const dosDigitos = (n) => String(n).padStart(2, '0')

export const hoyISO = () => {
  const d = new Date()
  return `${d.getFullYear()}-${dosDigitos(d.getMonth() + 1)}-${dosDigitos(d.getDate())}`
}

export const aISO = (anio, mes, dia) =>
  `${anio}-${dosDigitos(mes + 1)}-${dosDigitos(dia)}`

export const diasEntre = (a, b) =>
  Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000)