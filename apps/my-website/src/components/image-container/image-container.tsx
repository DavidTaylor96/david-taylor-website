import React from 'react';
import { ReactElement } from 'react';
import './image-container.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IImageContainerProps {
  noHeightOrWidth?: boolean;
  image?: string;
}
export const ImageContainer: React.FC<IImageContainerProps> = (props) => {
  AOS.init({
    delay: 200,
    duration: 1000,
    easing: 'ease',
    once: true,
  });

  return (
    <section className="image-container" data-aos="fade-up-right">
      <div className="image-wrapper">
        <img
          src={props.image}
          className="image"
          alt="display of svg"
          height="auto"
          width="auto"
        />
      </div>
    </section>
  );
};
