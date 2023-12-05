import "./components/navbar/style.css";
import "./components/Login/index.css";
import "./components/Home/index.css";
import "./components/Cadastro/index.css";
import "./components/PontosDoacao/index.css";
import "./components/QuemSomos/index.css";
import "./components/FormPost/FormPost.css";
import "./components/FormPost/PostList.css";
import "./components/Footer/Footer.css";

import Navbar from "./components/navbar/index.js";
import Home from "./components/Home/index";
import Login from "./components/Login/index.js";
import CadastroForm from "./components/Cadastro/index.js";
import PontosDoacao from "./components/PontosDoacao/index.js";
import QuemSomos from "./components/QuemSomos/index.js";
import FormPost from "./components/FormPost/FormPost";
import PostList from "./components/FormPost/PostList";
import Footer from "./components/Footer/Footer";
import AreaRiscos from "./components/AreaRiscos/areaRiscos";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denuncias" element={<FormPost username="User" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/areas-de-risco" element={<AreaRiscos />} />
        <Route path="/pontos-de-doacao" element={<PontosDoacao />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
      </Routes>
    </Router>
  );
}

export default App;
