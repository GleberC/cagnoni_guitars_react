import React from 'react';
import './Contato.css'; // Seu CSS do Contato, se tiver

function Contato() {
  return (
    <section className="bloco net" id="contato">
      <h1 className="text title">Contate-me</h1>
      <p className="text paragraph">
        Para qualquer dúvida ou orçamento contacte através das redes abaixo
      </p>
      <ul className="menu menu-social">
        <li>
          <a className="menu__link" href="https://wa.me/5511991941685" target="_blank" rel="noreferrer">
            <i className="menu__icon bi bi-whatsapp"></i>
            <span>whatsapp</span>
          </a>
        </li>
        <li>
          <a className="menu__link" href="https://www.instagram.com/gleber_cagnoni/" target="_blank" rel="noreferrer">
            <i className="menu__icon bi bi-instagram"></i>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
      <a href="mailto:glebercontato@yahoo.com.br">
        <button className="btn btn-primary">
          <i className="menu__icon bi bi-envelope-at"></i>
          <span className="email">glebercontato@yahoo.com.br</span>
        </button>
      </a>
    </section>
  );
}

export default Contato;
