import React from "react";
import "./areaRiscos.css";
import Navbar from "../navbar/index";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import lixo from "./imagens-area-de-risco/jogarlixocorretamente.jpg";
import manuntencao from "./imagens-area-de-risco/manuntecao.jpg";
import casa from "./imagens-area-de-risco/cena-simples-aldeia-rural/casa.jpg";

function AreaRiscos() {
  return (
    <div>
      <span className="navvv">
        <Navbar></Navbar>
      </span>

      <div className="areasRisco">
        <br></br>
        <h2 className="tituloAreaRisco">Áreas de Risco</h2>

        <div className="sobreAreasRisco">
          <div className="mapaAreasRisco">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=164Q9OJwapbPgiLUg7vhfwIzyvEzcMTU&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
            ></iframe>
          </div>

          <div className="textoAreasRisco">
            <p>
              Esses são os bairros que apresentam comunidades com altos riscos
              de alagamento durante chuvas e acidentes que envolvem água.
              Clicando no mapa, é possível ver mais informações sobre os
              respectivos bairros e suas comunidades.
            </p><br></br>
            <p>
              Os dados abaixo correspondem a pesquisas feitas pela Defesa Civil
              de Pernambuco e são anualmente atualizadas
            </p>
          </div>
        </div>
      </div>
      <br></br>

      <div className="abrigosProximos">
        <h2 className="tituloAbrigos">Abrigos próximos</h2>
        <p className="digitarLocal">Digite sua localização:</p>
        {/* o negocio para digitar a localização */}
        <button className="procurarAbrigo">Procurar</button>
        {/* aqui é outro negocio que mostra o endereço do abrigo mais proximo */}
        {/* aqui é o mapa */}
      </div>
      <br></br>
      <br></br>

      <div className="previna">
        <br></br>
        <h2 className="tituloPrevina">PREVINA-SE</h2>
        <p className="textoPrevina">
          Acidentes climáticos se tornam cada vez mais comuns e a prevenção de
          alagamentos se destaca como uma linha de defesa vital para a proteção
          das comunidades. A aplicação de métodos sólidos de prevenção não só
          diminui o risco de danos significativos, mas também fortalece a
          resiliência das áreas afetadas. Vamos explorar alguns métodos
          essenciais que desempenham um papel crucial na prevenção de
          alagamentos.
        </p>
        <div className="dicasPrevencao">
          <div className="descarteLixo">
            <div className="imagemTextoContainer">
              <img
                src={lixo}
                alt="jogar lixo corretamente"
                className="imagensPrevencao"
              />

              <div className="textoContainer">
                <h4 className="tituloDescarteLixo">
                  Descarte o lixo de forma correta
                </h4>
                <p>
                  O acúmulo de lixos mau descartados muitas vezes é o
                  responsável por fechar saídas de esgotos e consequentemente
                  gerar concentração de água que acabam ocasionando em
                  alagamentos.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="manutencao">
            <div className="imagemTextoContainer">
              <div className="textoContainer">
                <h4 className="tituloManutencao">Manutenção de Propriedades</h4>
                <p>
                  Mantenha os sitemas de drenagem do solo e as canaletas da rua
                  limpas e bem cuidadas, assim a água não se acumulará evitando
                  alagamentos.
                </p>
              </div>
              <img
                src={manuntencao}
                alt="Manutenção de Propriedades"
                className="imagensPrevencao"
              />
            </div>
          </div>

          <div className="arvoresVegetacao">
            <div className="imagemTextoContainer">
              <img src={casa} alt="casa" className="imagensPrevencao" />
              <div className="textoContainer">
                <h4 className="tituloArvoresVegetacao">
                  Árvores e vegetação protetora
                </h4>
                <p>
                  Tenha árvores e plantas no solo perto de casa para que assim
                  ajudem na absorção da água da chuva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="footer">
        <Footer></Footer>
      </span>
    </div>
  );
}

export default AreaRiscos;
