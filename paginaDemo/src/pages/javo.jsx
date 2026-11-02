import { useState, useRef, useEffect } from 'react';

function MiComponente() {
  // 1. Definimos el estado
  const [esVisible, setEsVisible] = useState(false);

  // Referencia para controlar el elemento Audio de HTML5
  const audioRef = useRef(null);

  // URL del tema musical de Benny Hill (Yakety Sax)
  const audioUrl = "https://ia800107.us.archive.org/33/items/BennyHillTheme/BennyHillTheme.mp3";

  // 2. Control del audio cuando cambia el estado 'esVisible'
  useEffect(() => {
    if (audioRef.current) {
      if (esVisible) {
        audioRef.current.play().catch(error => {
          console.log("Error al reproducir audio:", error);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reinicia la canción al ocultar
      }
    }
  }, [esVisible]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      {/* Objeto de audio controlado mediante API Web / React Ref */}
      <audio ref={audioRef} src={audioUrl} preload="auto" loop />

      {/* Botón para cambiar el estado */}
      <button 
        onClick={() => setEsVisible(!esVisible)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' }}
      >
        {esVisible ? 'Ocultar vista' : 'Mostrar vista'}
      </button>

      {/* Renderizado condicional */}
      {esVisible && (
        <div className="mi-vista" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Joseph_Ducreux_-_Self-portrait_of_the_artist_as_a_mocker.jpg" 
            alt="Joseph Ducreux - Self-portrait of the artist as a mocker"
            style={{ maxWidth: '300px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          />
        </div>
      )}
    </div>
  );
}

export default MiComponente;