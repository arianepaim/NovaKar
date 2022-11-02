import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Cards from "../components/Card/Cards.js";
import Login from "../components/Login/index.js";
// import { AuthProvider } from "./contexts/auth.js";

const Rotas = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Cards/>} />
          <Route path='/login' element={<Login />} />     
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </Router>
  );
}
export default Rotas;