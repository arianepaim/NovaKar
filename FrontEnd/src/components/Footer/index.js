import "./styles.css"
import logo from "../../assets/logo.png"

const Footer = () => {

    return(
        <div className="footer bg-dark">            
            <div className="icone-footer">
                <img src={logo} width="100%" height="100%"/>
            </div>
            <div className="texto-footer">
                <p>|  @2022</p>
            </div>
        </div>

    )

}

export default Footer;