import "./styles.css"
import Logo from '../../assets/logo.png'
import { CiSearch } from 'react-icons/ci';
import { BiUserCircle } from 'react-icons/bi';

const Header = () => {

  return (

    <div className="header">   
      <div className="header-logo">
          <a href='/'><img src={Logo} width="100%" height="100%"/></a>
      </div> 

      <div className="exp-search">
        <input type='search' placeholder="Procurar veículo"/>
        <button className='btn btn-secondary rounded-0'><CiSearch/></button>
      </div>
      
      <div className="header-rotas">
       <a href="/"> Página inicial</a>
        <a href="/"> Sobre nós</a>    
        <a href="/cadastrar"> Adicionar carro</a>
        <a href="/login"><BiUserCircle className="icons"/></a>

      </div>
    </div>
  )
}
export default Header;