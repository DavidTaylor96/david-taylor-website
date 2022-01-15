import './tech-list.scss';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IRoute, ITechListLayout } from '../../service/website-types';

interface ITechListProps {
  content: ITechListLayout;
  route: IRoute;
}

export const TechListLayout: React.FC<ITechListProps> = ({ content }) => {
  AOS.init({
    delay: 200,
    duration: 1000,
    easing: 'ease',
    once: true,
  });

  return (
    <section className="tech-wrapper">
      <h1 className="header" data-aos="fade-right" data-aos-delay="300">
        {content.title}
      </h1>
      <span id="separator" className="header" />
      <div className="list-inner-wrapper">
        <section className="list-container">
          {content.actions.map((lng, index) => {
            return (
              <section className="list-container">
                <div className="inner-list">
                  <FiChevronRight id="logo" />
                  <p id="list-element" data-aos="zoom-out" key={index}>
                    {lng.title}
                  </p>
                </div>
              </section>
            );
          })}
        </section>
      </div>
    </section>
  );
};
