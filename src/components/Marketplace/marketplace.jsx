import React from "react";
import "./marketplace.css";
import Navbar from "../navbar";
import Footer from "../Footer/Footer";

import p1 from "./imagens-marketplace/1.jpg";
import p2 from "./imagens-marketplace/2.jpg";
import p3 from "./imagens-marketplace/3.jpg";
import p4 from "./imagens-marketplace/4.jpg";
import p5 from "./imagens-marketplace/5.png";
import p6 from "./imagens-marketplace/6.jpeg";
import ProductCard from "./productcard";

function Marketplace() {
  const products = [
    {
      name: "Cama Usada",
      title: "Cama Usada",
      price: "R$250.00",
      image: p1,
      description:
        "Cama antiga e usada tamanho king-size. Espaçosa e sem danos no bairro da Madalena.",
    },

    {
      name: "Armario Semiusado",
      title: "Armario Semiusado",
      price: "R$340.00",
      image: p2,
      description:
        "Armário recém comprado e em perfeito estado. Já foi usado, mas ainda está completamente novo",
    },

    {
      name: "Seguro Residencial - Porto Seguro",
      title: "Seguro Residencial - Porto Seguro",
      price: "R$200.00",
      image: p3,
      description:
        "Assine já um plano de seguro para previnir perca de bens em acidentes.",
    },

    {
      name: "Seguro Residencial - Liberty Seguros",
      title: "Seguro Residencial - Liberty Seguros",
      price: "R$215.00",
      image: p4,
      description:
        "Assine já um plano de seguro para previnir perca de bens em acidentes.",
    },

    {
      name: "Seguro Residencial - Allianz",
      title: "Seguro Residencial - Allianz",
      price: "R$210.00",
      image: p5,
      description:
        "Assine já um plano de seguro para previnir perca de bens em acidentes.",
    },

    {
      name: "Sofá Usado",
      title: "Sofá Usado",
      price: "R$400.00",
      image: p6,
      description:
        "Sofá usado e com algumas marcas do tempo, porém ainda grande e espaçoso",
    },
  ];

  const handleBuyClick = (productId) => {
    console.log(`Comprando produto ${productId}`);
  };

  const handleSaveClick = (productId) => {
    console.log(`Salvando produto ${productId}`);
  };

  const productsTop = products.slice(0, 3);
  const productsBottom = products.slice(3);

  return (
    <div>
      <span className="navvv">
        <Navbar></Navbar>
      </span>
      <div className="container-marketplace">
        <h2 className="titleMarketplace">Marketplace</h2>
        <div className="product-section">
          {productsTop.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              onBuyClick={handleBuyClick}
              onSaveClick={handleSaveClick}
            />
          ))}
        </div>
        <div className="product-section">
          {productsBottom.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              onBuyClick={handleBuyClick}
              onSaveClick={handleSaveClick}
            />
          ))}
        </div>
      </div>
      <span className="footer">
        <Footer></Footer>
      </span>
    </div>
  );
}

export default Marketplace;
