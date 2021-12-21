import './article-text.scss';
import { FiArrowRight } from 'react-icons/fi';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IArticleScreenProps {
  articleHeader: string;
  button?: boolean;
  onClick?: () => void;
}

export const ArticleScreen: React.FC<IArticleScreenProps> = (props) => {
  AOS.init({
    delay: 200,
    duration: 500,
    easing: 'ease',
    once: true,
  });

  return (
    <article className="article-wrapper">
      <h1 data-aos="fade-right" data-aos-delay="300">
        {props.articleHeader}
      </h1>
      <span id="separator" />
      <p data-aos="zoom-in">{props.children}</p>
      {props.button && (
        <button className="btn btn-stripe btn-radius" onClick={props.onClick}>
          <p className="button-text">Learn more</p>
          <FiArrowRight id="icon" />
        </button>
      )}
    </article>
  );
};
