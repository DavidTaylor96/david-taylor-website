import './tech-list.scss';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import React from 'react';

interface ITechListProps {
  articleHeader: string;
}

export const TechList: React.FC<ITechListProps> = (props) => {
  return (
    <section className="tech-wrapper">
      <h1>{props.articleHeader}</h1>
      <span id="separator" />
      <div className="list-inner-wrapper">
        <section className="list-container">
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element">React js</p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element">React Native</p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element">Expo</p>
          </div>
        </section>
        <section className="list-container">
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element">Node js</p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element">Express </p>
          </div>
          <div className="inner-list">
            <FiChevronRight id="logo" />
            <p id="list-element">Mongodb</p>
          </div>
        </section>
      </div>
    </section>
  );
};
