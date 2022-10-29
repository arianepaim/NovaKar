import "./styles.css"
import Logo from '../../assets/logo.png'


const Header = () => {

  return (

    <div href="/" className="header">
    
      <div className="header-logo">
          <a href='/dashboard'><img src={Logo} width="100%" height="100%"/></a>
      </div>

      <div className="header-rotas">
       <a href="/"> Página inicial</a>
        <a href="/"> Sobre nós</a>    
        <a href="/"> Comprar carro</a>

      </div>
    </div>
  )
}
export default Header;