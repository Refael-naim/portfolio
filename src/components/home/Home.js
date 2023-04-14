import './Home.css';
import homeLogo from "../../assets/home-main.svg";
import avatar from "../../assets/avatar.svg";
import Writer from '../writer/Writer';
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMeetup } from "react-icons/fa";

function Home() {
  return (
    <div className='home'>
      <section className='section'>
        <div className="section__text-container">
          <h1 className='section__title'>Hi There! <span className="icon_wave">👋🏻</span><br />I'M <span className="text__color_main">REFAEL NAIM</span></h1>
          <Writer style={{ color: "#fff" }} />
        </div>
        <img className="section__image" src={homeLogo} />
      </section>
      <section className='section section_length_short section_spaced'>
        <div className="section__text-container">
          <h2 className="section__title section__title_centered">LET ME <span className="text__color_main">INTRODUCE</span> MYSELF</h2>
          <p className="section__text">As a Full Stack Developer with <span className="text__color_main">three years of experience</span>, I am dedicated to creating high-quality software solutions that meet the needs of both businesses and users.</p>
          <p className="section__text">My expertise includes proficiency in multiple programming languages, such as <span className="text__color_main">JavaScript and Java</span>, as well as experience with various front-end frameworks, including <span className="text__color_main">React.</span></p>
          <p className="section__text">I am always eager to tackle new challenges and opportunities and <span className="text__color_main">look forward to leveraging my skills</span> to contribute to a team of talented developers.</p>
        </div>
        <Tilt className='tilt'>
          <img className="section__image" src={avatar} />
        </Tilt>
      </section>
      <section className="section section_length_short section_direction_column">
        <h2 className="section__title">FIND ME ON</h2>
        <p className="section__subtitle">Feel free to <span className="text__color_main">connect </span>with me</p>
        <ul className="social__list">
          <li>
            <a className="social__link" href="https://github.com/Refael-naim" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a className="social__link" href="https://www.linkedin.com/in/refael-naim" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a className="social__link" href="https://www.meetup.com/members/389247287" target="_blank" rel="noreferrer">
              <FaMeetup />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
