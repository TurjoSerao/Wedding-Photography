import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            doloremque molestias ullam nihil nisi quasi non aspernatur nesciunt
            accusantium? Aperiam vel at voluptatem fugit nulla esse ad velit
            quaerat officiis mollitia
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="copyrights">
            <p>Copyright 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
