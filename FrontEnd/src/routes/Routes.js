import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AtualizarCarro from "../components/AtualizarCarro/index.js";
import CadastroCarro from "../components/CadastroCarro/index.js";
import Cards from "../components/Card/Cards.js";
import CardsAdm from "../components/CardAdm/CardsAdm.js";
import DeleteCarros from "../components/DeletarCarro/index.js";
import Login from "../components/Login/index.js";
// import { AuthProvider } from "./contexts/auth.js";

const Rotas = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Cards/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/edit/:id' element={<AtualizarCarro/>} />
          <Route path='/delete/:id' element={<DeleteCarros/>} />
          <Route path='/cardsAdm' element={<CardsAdm/>} />
          <Route path='/cadastrar' element={<CadastroCarro/>} />   
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </Router>
  );
}
export default Rotas;