import aboutImage from '../../assets/about.svg';
import './About.css';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiRedux,
  SiExpress
} from "react-icons/si";

import {
  BiBasketball,
  BiMoviePlay
} from "react-icons/bi";

import {
  FaAws,
  FaBicycle,
  FaDocker
} from "react-icons/fa";

import {
  MdHtml,
  MdCss
} from "react-icons/md";

function About() {
  return (
    <div className='about'>
      <section className='section section_spaced'>
        <div className="section__text-container">
          <h2 className="section__title section__title_centered">Know Who <span className="text__color_main">I'M</span></h2>
          <p className="section__text">Hi Everyone, I am <span className="text__color_main">Refael naim</span> from <span className="text__color_main">Tel aviv, Israel.</span><br />I am a Full stack developer with three years of experience.</p>
          <p className="section__text">Apart from coding, some other activities that I love to do:</p>
          <ul className='section__list'>
            <li className="section__text section__list-item"><BiBasketball /> Playing basketball</li>
            <li className="section__text section__list-item"><BiMoviePlay /> Making clay animations</li>
            <li className="section__text section__list-item"><FaBicycle /> Travelling</li> 
          </ul>
        </div>
        <img className="section__image section__image_small" src={aboutImage} />
      </section>
      <section className='section section_length_short section_direction_column'>
        <h2 className="section__title">Professional <span className="text__color_main">Skillset</span></h2>
        <ul className='card__list'>
          <li className='card__item'>
            <MdHtml />
          </li>
          <li className='card__item'>
            <MdCss />
          </li>
          <li className='card__item'>
            <DiJavascript1 />
          </li>
          <li className='card__item'>
            <DiNodejs />
          </li>
          <li className='card__item'>
            <DiReact />
          </li>
          <li className='card__item'>
            <DiMongodb />
          </li>
          <li className='card__item'>
            <DiGit />
          </li>
          <li className='card__item'>
            <SiRedux />
          </li>          
          <li className='card__item'>
            <FaAws />
          </li>
          <li className='card__item'>
            <SiExpress />
          </li>
        </ul>
      </section>
      <section className='section section_length_short section_direction_column'>
        <h2 className="section__title"><span className="text__color_main">Tools</span> I use</h2>
        <ul className='card__list'>
          <li className='card__item'>
            <SiLinux /> 
          </li>
          <li className='card__item'>
            <SiVisualstudiocode />
          </li>
          <li className='card__item'>
            <SiPostman />
          </li>
          <li className='card__item'>
            <FaDocker />
          </li>
          <li className='card__item'>
            <SiHeroku />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;