import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

const mostrar = (msg) => {
  document.body.innerHTML =
    '<pre style="color:#fff;background:#8b0000;padding:20px;margin:20px;border-radius:12px;white-space:pre-wrap;font-size:15px">' +
    msg + '</pre>'
}

window.addEventListener('error', (e) =>
  mostrar('ERROR:\n' + e.message + '\n\nArchivo: ' + (e.filename || 'desconocido'))
)
window.addEventListener('unhandledrejection', (e) =>
  mostrar('ERROR:\n' + (e.reason?.stack || e.reason))
)

class Guardian extends React.Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <pre style={{ color: '#fff', background: '#8b0000', padding: 20, margin: 20,
          borderRadius: 12, whiteSpace: 'pre-wrap', fontSize: 15 }}>
          {'ERROR AL DIBUJAR LA PÁGINA:\n\n' + (this.state.error.stack || this.state.error)}
        </pre>
      )
    }
    return this.props.children
  }
}

import('./App.jsx')
  .then(({ default: App }) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <Guardian><App /></Guardian>
    )
  })
  .catch((e) =>
    mostrar('No se pudo cargar App.jsx o alguno de los archivos que usa:\n\n' + e.message)
  )