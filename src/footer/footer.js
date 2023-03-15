import './footer.css';
import { FaWhatsapp , FaInstagram , FaFacebook } from "react-icons/fa";
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>About Us</h3>
                    <p>We are a shoe shop that specializes in comfortable, stylish footwear.</p>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>123 Main St.</p>
                    <p>Anytown, USA</p>
                    <p>Phone: 555-1234</p>
                    <p>Email: info@myshoeshop.com</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><FaWhatsapp></FaWhatsapp></li>
                        <li><FaFacebook></FaFacebook></li>
                        <li><FaInstagram></FaInstagram></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
