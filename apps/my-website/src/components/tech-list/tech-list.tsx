import './tech-list.scss';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IBaseLayout, IRoute, ITechListLayout } from '../../service/website-types';
import { FindOutMore } from '../find-out-more/find-out-more';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { useIsLargeScreen } from '../../hooks/use-is-large-screen';

interface ITechListProps {
  content: ITechListLayout;
  scrollIndicator: IBaseLayout;
  route: IRoute;
}

export const TechListLayout: React.FC<ITechListProps> = ({ content, scrollIndicator }) => {
  AOS.init({
    delay: 200,
    duration: 1000,
    easing: 'ease',
    once: true,
  });
  const isNotMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  return (
    <>
    {isNotMobile && (
      <div className="navigator-wrapper-right">
        <FindOutMore
          id={scrollIndicator.id}
          onRight={true}
          buttonText={scrollIndicator.buttonText}
          largeScreen={isLargeScreen ? true : false}
        />
      </div>
    )}
    <section className="tech-wrapper"  id={scrollIndicator.id}>
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
    </>
  );
};
