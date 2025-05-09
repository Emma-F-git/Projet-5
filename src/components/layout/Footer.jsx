import Logo from "../../assets/LogoFooter.svg";
import "../../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
