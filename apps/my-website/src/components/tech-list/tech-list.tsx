import './tech-list.scss';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ITechListProps {
  articleHeader: string;
}

export const TechList: React.FC<ITechListProps> = (props) => {
  AOS.init({
    delay: 200,
    duration: 1000,
    easing: 'ease',
    once: true,
  });

  return (
    <section className="tech-wrapper">
      <h1 className="header"  data-aos="fade-right" data-aos-delay="300" >{props.articleHeader}</h1>
      <span  id="separator" className="header" />
      <div className="list-inner-wrapper">
        <section className="list-container">
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element" data-aos="zoom-out">React js</p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element" data-aos="zoom-out">React Native</p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element" data-aos="zoom-out">Expo</p>
          </div>
        </section>
        <section className="list-container">
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element" data-aos="zoom-out">Node js</p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element" data-aos="zoom-out">Express </p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element" data-aos="zoom-out">Mongodb</p>
          </div>
        </section>
      </div>
    </section>
  );
};
