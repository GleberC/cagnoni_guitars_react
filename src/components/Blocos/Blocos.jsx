import React from 'react';
import Gallery from '../Gallery/Gallery';


import './Blocos.css';



function Blocos({ id, title, paragraph }) {
  return (
    <div className="block_item" id={id}>
      <h1>{title}</h1>
      <p>{paragraph}</p>

      {/* Condição para renderizar a galeria apenas em blocos específicos */}
      {(id === 'construcao' || id === 'custom' || id === 'manutencao') && (
        <Gallery blocoId={id} /> // Já passamos o id se a galeria precisar saber de onde veio
      )}
     
    </div>
    
  );
}

export default Blocos;
