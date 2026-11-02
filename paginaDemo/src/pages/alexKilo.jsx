import React from 'react';
// Importa la imagen local desde tu carpeta del proyecto
import gtaImage from './assets/gta6.jpg'; 

export default function GTA6Simple() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>GTA VI: Lucia Caminos y Jason Dubal</h1>
      
      <p>
        Lucia y Jason son los dos protagonistas principales de Grand Theft Auto VI.
        Ambientado en el estado de Leonida y las calles de Vice City, la historia sigue
        a esta pareja en una trama de crimen, robos y supervivencia al estilo de Bonnie y Clyde.
      </p>

      <div style={{ width: '100%', height: '300px', margin: '1.5rem 0', overflow: 'hidden', borderRadius: '8px' }}>
        <img 
          src={gtaImage} 
          alt="GTA VI Personajes Principales" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}