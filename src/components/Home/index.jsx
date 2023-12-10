import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "../navbar/index.jsx";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <span className="navvv">
        <Navbar></Navbar>
      </span>
      <div>
        <form className="pesquisar">
          <input
            type="text"
            className="input-with-icon"
            placeholder="Pesquisar região:"
          />
        </form>
      </div>
      <div className="body-clima">
        <div className="widget-Clima">
          <div
            id="ww_92aa553b8005b"
            v="1.3"
            loc="auto"
            a='{"t":"horizontal","lang":"pt","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#0097A7","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#FFFFFF","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'
          >
            Mais previsões:{" "}
            <Link
              to="https://oneweather.org/el/ioannina/"
              id="ww_92aa553b8005b_u"
              target="_blank"
            >
              Ιωάννινα πρόγνωση καιρού
            </Link>
          </div>
          <script
            async
            src="https://app2.weatherwidget.org/js/?id=ww_92aa553b8005b"
          ></script>
        </div>
      </div>
      <div className="mapa"></div>

      <span className="footer">
        <Footer></Footer>
      </span>
    </div>
  );
}
export default Home;
