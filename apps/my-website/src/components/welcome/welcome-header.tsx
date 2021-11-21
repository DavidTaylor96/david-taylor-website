import './welcome-header.scss';
import NameLogo from '../../assets/name-logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const WelcomeHeader = () => {


  AOS.init({
    once: true,
  });

  return (
    <header className="welcome-header">
      <h1 id="welcome-text">Hello, my name is</h1>
      <img
        data-aos="fade-right"
        data-aos-delay="300"
        id="name-logo"
        src={NameLogo}
        alt="image of david taylor"
      />
      <h3 id="welcome-sub-text">
        <i>creative developer</i>
      </h3>
    </header>
  );
};
