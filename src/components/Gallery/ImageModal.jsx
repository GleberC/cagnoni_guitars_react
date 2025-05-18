import React from 'react';
import './ImageModal.css';

function ImageModal({ isOpen, src, descricao, onClose }) {
  if (!isOpen) return null; // se não está aberto, nem renderiza o modal

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img className="modal-image" src={src} alt="Imagem ampliada" />
        {descricao && <p>{descricao}</p>}
      </div>
    </div>
  );
}

export default ImageModal;
