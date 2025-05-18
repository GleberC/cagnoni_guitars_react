import React from 'react';
import logoFav from "../../assets/images/logo_fav.png";

import dogImage from "../../assets/images/dog_new1.png";
import './Header.css'; 



function Header() {
  return (
    <header className='menu'>
      <div className='cagnoni_logo'>
        <img src={logoFav} alt="logotipo"/>
      </div>
      <div className="dog">
        <img src={dogImage} alt="Cagne Logo"/>
      </div>


    <nav className="p-menu">
      <ul className="menu menu_principal">
        <li className="p-menu__item selecionado">
          <a href="#sobre">Sobre</a>
        </li>
        <li className="p-menu__item">
          <a href="#construcao">Construções</a>
        </li>
        <li className="p-menu__item">
          <a href="#custom">Customizações</a>
        </li>

        <li className="p-menu__item">
          <a href="#manutencao">Manutenções</a>
        </li>
        <li className="p-menu__item">
          <a href="#contato">Contatos</a>
        </li>
      </ul>
    </nav>

    </header>
  );
}

export default Header;
