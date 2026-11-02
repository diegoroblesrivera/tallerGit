import { useState } from 'react';

function MiComponente() {
  const [esVisible, setEsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setEsVisible(!esVisible)}>
        {esVisible ? 'Ocultar vista' : 'Mostrar vista'}
      </button>

      {esVisible && (
        <div className="mi-vista">
          <h2>¡Hola! Ahora soy visible</h2>
          <p>Este contenido se muestra condicionalmente.</p>
          
          {/* Ruta directa desde la raíz pública */}
          <img src="/Speed.jpg" alt="Descripción de la imagen" />
        </div>
      )}
    </div>
  );
}