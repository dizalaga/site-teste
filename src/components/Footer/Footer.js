import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import email from "./imagens-footer/email.png";

import instagram from "./imagens-footer/instagram.svg";
import linkedin from "./imagens-footer/linkedin.svg";
import AreaRiscos from "../AreaRiscos/areaRiscos";

function Footer() {
  return (
    <div>
    <footer>
      <div id="footer_contacts">
        <h3>Contatos</h3>
        <div id="footer_social_media">
          <Link
            to="https://www.instagram.com/dizalaga/"
            className="footer-link"
            id="instagram"
          >
            <img src={instagram} alt="instagram" />
          </Link>

          <Link
            to="https://www.linkedin.com/in/diz-alaga-471015298/"
            className="footer-link"
            id="linkedin"
          >
            <img src={linkedin} alt="linkedin" />
          </Link>
        </div>
        <br></br>
        <p className="emailDizAlaga">dizalaga@gmail.com</p>
      </div>

      <ul className="footer-list">
        <li>
          <h3>Mapa do site</h3>
        </li>
        <li>
          <a href="/" className="footer-link">
            Página Inicial
          </a>
        </li>
        <li>
          <a href="/denuncias" className="footer-link">
            Denúncias
          </a>
        </li>
        <li>
          <a href="/areas-de-risco" className="footer-link">
            Áreas de Risco
          </a>
        </li>
        <li>
          <a href="pontos-de-doacao" className="footer-link">
            Pontos de Doação
          </a>
        </li>
        <li>
          <a href="/marketplace" className="footer-link">
            Marketplace
          </a>
        </li>
        <li>
          <a href="quemsomos" className="footer-link">
            Quem Somos?
          </a>
        </li>
      </ul>

      <ul className="footer-list">
        <li>
          <a href="/areas-de-risco" className="footer-link">
            Abrigos Próximos
          </a>
        </li>
        <li>
          <a href="/areas-de-risco" className="footer-link">
            Previna-se
          </a>
        </li>
      </ul>

      <ul className="footer-list">
        <li>
          <h3>Sobre nós</h3>
        </li>
        <li>
          <a href="/quemsomos" className="footer-link">
            Quem somos?
          </a>
        </li>
        <li>
          <a href="/quemsomos" className="footer-link">
            Equipe
          </a>
        </li>
        <li>
          <a href="/quemsomos" className="footer-link">
            Parceiros
          </a>
        </li>
      </ul>

      
    </footer>
    <div id="footer_copyright">&#169; DizAlaga 2023</div>
    </div>
    
  );
}

export default Footer;
