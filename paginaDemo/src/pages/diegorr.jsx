import { useState } from 'react';

function MiComponente() {
  // 1. Definimos el estado (por defecto, la vista está oculta)
  const [esVisible, setEsVisible] = useState(false);

  return (
    <div>
      {/* Botón para cambiar el estado */}
      <button onClick={() => setEsVisible(!esVisible)}>
        {esVisible ? 'Ocultar vista' : 'Mostrar vista'}
      </button>

      {/* 2. Renderizado condicional usando && */}
      {esVisible && (
        <div className="mi-vista">
          <h2>¡Hola! Ahora soy visible</h2>
          <p>Este contenido se muestra condicionalmente.</p>
        </div>
      )}

      <h3>
        Mi parrafo funciona de esta manera :::....(Diego Robles)
        Mi parrafo funciona de esta manera :::....(Javier Verdugo)
        https://vkvideo.ru/video-142354277_456249818

      </h3>

      <h3>
        Hola wenas :D (Pedro Araneda)
      </h3>
      <h3>
        COCHAYUYO (Esteban Rojas)
      </h3>


      <h5>hola genteeee (joni)</h5>
    </div>
  );
}
