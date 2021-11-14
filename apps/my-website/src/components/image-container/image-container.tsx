import React from 'react';
import { ReactElement } from 'react';
import './image-container.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IImageContainerProps {
  noHeightOrWidth?: boolean;
}
export const ImageContainer: React.FC<IImageContainerProps> = (props) => {

  AOS.init({
    delay: 200,
    duration: 1000,
    easing: 'ease',
    once: true,
  });

  return (
    <section className="image-container"  data-aos="fade-up-right">
      {props.children}
    </section>
  );
};
