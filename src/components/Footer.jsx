import { faFacebook, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer-copyright">
        &copy; 2021 Picky Nicky's
      </div>
      <div className="footer-social">
        <FontAwesomeIcon className="fb" icon={faFacebook} size="2x"/>
        <FontAwesomeIcon className="ig" icon={faInstagram} size="2x" />
        <FontAwesomeIcon className="tw" icon={faTwitterSquare} size="2x" />
      </div>
      <div className="footer-location">Cebu City, Philippines</div>
    </div>
   );
}
 
export default Footer;