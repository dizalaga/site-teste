import React from "react";
import camaUsada from "./imagens-marketplace/1.jpg";
import Armario from "./imagens-marketplace/2.jpg";
import seguroPorto from "./imagens-marketplace/3.jpg";
import seguroLiberty from "./imagens-marketplace/4.jpg";
import seguroAllianz from "./imagens-marketplace/5.png";
import sofáUsado from "./imagens-marketplace/6.jpeg";
import "./marketplace.css";

import Navbar from "../navbar/index.jsx";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Marketplace() {
  return (
    <div>
      <span className="navvv">
        <Navbar></Navbar>
      </span>
      <div className="container-marketplace">
        <h2 className="nameTitle">Marketplace</h2>
        <div className="product-section">
          <div className="card-product">
            <img src={camaUsada} alt="Cama Usada" className="imageProduct" />
            <h3 className="nameTitleCama">Cama Usada</h3>
            <p className="descriptionCama">
              Cama antiga e usada tamanho king-size. Espaçosa e sem danos no
              bairro da Madalena.
            </p>
            <p className="location">Recife-PE</p>
            <p className="price">R$250.00</p>
            <div className="button-container">
              <Link to="https://wa.me/818633710">
                <button className="contato">Entrar em contato</button>
              </Link>
            </div>
          </div>

          <div className="card-product">
            <img
              src={Armario}
              alt="Armario Semiusado"
              className="imageProduct"
            />
            <h3 className="nameTitleArmario">Armario Semiusado</h3>
            <p className="descriptionArmario">
              Armário recém comprado e em perfeito estado. Já foi usado, mas
              ainda está completamente novo
            </p>
            <p className="location">Recife-PE</p>
            <p className="price">R$240.00</p>
            <div className="button-container">
              <Link to="https://wa.me/818633710">
                <button className="contato">Entrar em contato</button>
              </Link>
            </div>
          </div>

          <div className="card-product">
            <img
              src={seguroPorto}
              alt="Seguro Residencial - Porto Seguro"
              className="imageProduct"
            />
            <h3 className="nameTitlePortoSeguro">
              Seguro Residencial - Porto Seguro
            </h3>
            <p className="descriptionPortoSeguro">
              Assine já um plano de seguro para previnir perca de bens em
              acidentes.
            </p>
            <p className="invisivel">lalal</p>
            <p className="location">Recife-PE</p>
            <p className="price">R$200.00</p>
            <div className="button-container">
              <Link to="#">
                <button className="saibaMais">Saiba Mais</button>
              </Link>
            </div>
          </div>

          <div className="card-product">
            <img
              src={seguroLiberty}
              alt="Seguro Residencial - Liberty Seguros"
              className="imageProduct"
            />
            <h3 className="nameTitleLibertySeguro">
              CSeguro Residencial - Liberty Seguros
            </h3>
            <p className="descriptionLibertySeguro">
              Assine já um plano de seguro para previnir perca de bens em
              acidentes.
            </p>
            <p className="location">Recife-PE</p>
            <p className="price">R$215.00</p>
            <div className="button-container">
              <Link to="#">
                <button className="saibaMais">Saiba Mais</button>
              </Link>
            </div>
          </div>

          <div className="card-product">
            <img
              src={seguroAllianz}
              alt="Seguro Residencial - Allianz"
              className="imageProduct"
            />
            <h3 className="nameTitleAllianz">Seguro Residencial - Allianz</h3>
            <p className="descriptionAllianz">
              Assine já um plano de seguro para previnir perca de bens em
              acidentes.
            </p>
            <p className="location">Recife-PE</p>
            <p className="price">R$210.00</p>
            <div className="button-container">
              <Link to="#">
                <button className="saibaMais">Saiba Mais</button>
              </Link>
            </div>
          </div>

          <div className="card-product">
            <img src={sofáUsado} alt="Sofá Usado" className="imageProduct" />
            <h3 className="nameTitleSofa">Sofá Usado</h3>
            <p className="descriptionSofa">
              Sofá usado e com algumas marcas do tempo, porém ainda grande e
              espaçoso
            </p>
            <p className="location">Recife-PE</p>
            <p className="price">R$400.00</p>
            <div className="button-container">
              <Link to="https://wa.me/818633710">
                <button className="contato">Entra em contato</button>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/marketplace" className="paginas">
          <p className="tracinho">{"<"}</p>
          <p className="um">1 </p>
          <p className="tracinho">{">"} </p>
        </Link>
      </div>
      <span className="footer">
        <Footer></Footer>
      </span>
    </div>
  );
}

export default Marketplace;
