import "./Footer.css";
import Logo from "../../assets/logo.png";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-box">

        {/* Left */}

        <div className="footer-left">

          <img src={Logo} alt="logo" className="footer-logo" />

          <div className="social">
            <a href="#"><FaTelegramPlane /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

        </div>

        {/* Middle */}

        <div className="footer-center">

          <div className="footer-col">
            <h4>INFORMATION</h4>

            <a href="#">Privacy</a>
            <a href="#">Shipping & Payment</a>
            <a href="#">Partners</a>
            <a href="#">Blog</a>
            <a href="#">Contacts</a>
          </div>

          <div className="footer-col">
            <h4>MENU</h4>

            <a href="#">For a Couple</a>
            <a href="#">For Him</a>
            <a href="#">For Her</a>
          </div>

        </div>

        {/* Right */}

        <div className="footer-right">

          <button>Request a Call</button>

          <h3>+91 98765 43210</h3>

          <p>info@soulunfolding.com</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          1901 Thornridge Cir. Shiloh,
          <br />
          Hawaii 81063
        </p>

      </div>

    </footer>
  );
}