import './article-text.scss';
import { FiArrowRight } from 'react-icons/fi';
import React from 'react';

interface ITechListProps {
  articleHeader: string;
}

export const TechList: React.FC<ITechListProps> = (props) => {
  return (
    <article className="tech-wrapper">
      <h1>{props.articleHeader}</h1>
      <span id="separator" />
      <ul>
        <li>React js</li>
        <li>React Native</li>
        <li>Expo</li>
      </ul>
      <ul>
        <li>Node js</li>
        <li>Express</li>
        <li>Mongodb</li>
      </ul>
    </article>
  );
};
