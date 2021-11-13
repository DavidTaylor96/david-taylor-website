import React from 'react';
import { ReactElement } from 'react';
import './image-container.scss';

interface IImageContainerProps {
  noHeightOrWidth?: boolean;
}
export const ImageContainer: React.FC<IImageContainerProps> = (props) => {
  return (
    <section className="image-container">
      {props.children}
    </section>
  );
};
