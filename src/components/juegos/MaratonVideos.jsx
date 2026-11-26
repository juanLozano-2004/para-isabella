export default function MaratonVideos({ sorpresa, onGanar }) {
  const videos = sorpresa.extra?.videos || []

  const verTodos = () => {
    onGanar()
  }

  return (
    <div className="maraton-videos">
      <p className="instruccion">Nuestra maratón especial 🎬💕</p>
      <div className="maraton-lista">
        {videos.map((video, index) => (
          <article className="maraton-video" key={video.src}>
            <h3>Video {index + 1}: {video.titulo}</h3>
            <video
              controls
              preload="metadata"
              src={video.src}
              onEnded={() => {
                if (index === videos.length - 1) verTodos()
              }}
            >
              Tu navegador no puede reproducir este video.
            </video>
          </article>
        ))}
      </div>
      {videos.length > 0 && (
        <button className="boton-suave maraton-boton" onClick={verTodos}>
          Ver nuestro mensaje final 💖
        </button>
      )}
    </div>
  )
}
