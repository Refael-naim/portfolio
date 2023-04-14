import './Footer.css';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn,FaMeetup } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer_copyright'>Refael naim</p>
      <ul className="social__list_footer">
        <li>
          <a className='social__item_footer' href="https://github.com/Refael-naim" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a className="social__item_footer" href="https://www.linkedin.com/in/refael-naim" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a className="social__item_footer" href="https://www.meetup.com/members/389247287" target="_blank" rel="noreferrer">
            <FaMeetup />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
