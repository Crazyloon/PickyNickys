import { faFacebook, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer-copyright">
        &copy; 2021 Picky Nicky's
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/Picky-Nickys-106097991002314/">
          <FontAwesomeIcon className="fb" icon={faFacebook} size="2x"/>
        </a>
        <a href="https://www.instagram.com/picky.nickys/?hl=en">
          <FontAwesomeIcon className="ig" icon={faInstagram} size="2x" />
        </a>
        <FontAwesomeIcon className="tw" icon={faTwitterSquare} size="2x" />
      </div>
      <div className="footer-location">Cebu City, Philippines</div>
    </div>
   );
}
 
export default Footer;