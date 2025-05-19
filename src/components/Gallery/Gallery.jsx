import React, { useState } from 'react';
import imagens from './data';
import ImageModal from './ImageModal'; // ajuste o caminho conforme a estrutura do seu projeto

function Gallery({ blocoId }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const imagensFiltradas = imagens.filter(imagem => {
    if (blocoId === 'construcao' && imagem.src.includes('construcoes')) return true;
    if (blocoId === 'custom' && imagem.src.includes('customizacoes')) return true;
    if (blocoId === 'manutencao' && imagem.src.includes('manutencoes')) return true;
    return false;
  });

  const abrirModal = (imagem) => {
    setImagemSelecionada(imagem);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setImagemSelecionada(null);
  };
  console.log(imagensFiltradas)
  return (
    <div className="gallery">
      {imagensFiltradas.map((imagem) => (
        <div className="image-container" key={imagem.id}>
          <img
            src={imagem.src}
            alt={imagem.alt}
            className="thumbnail"
            onClick={() => abrirModal(imagem)}
          />
          {/* Ocultamos a descrição aqui para ela só aparecer no modal */}
        </div>
      ))}

      {/* Modal */}
      <ImageModal
        isOpen={modalAberto}
        src={imagemSelecionada?.src}
        descricao={imagemSelecionada?.descricao}
        onClose={fecharModal}
      />
    </div>
  );
}

export default Gallery;

