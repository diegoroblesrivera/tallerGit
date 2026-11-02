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
          <h2>¡Hola! Ahora soy EstebanR</h2>
          <p>Este contenido se muestra condicionalmente.</p>
        </div>
      )}
    </div>
  );
}
