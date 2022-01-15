import './article-text.scss';
import { FiArrowRight } from 'react-icons/fi';
import React, { FC } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

interface IArticleScreenProps {
  articleHeader: string;
  button?: boolean;
  onClick?: () => void;
  children: any;
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
      <p data-aos="zoom-in">{props.children[0]}</p>
      {props.button && <div>{props.children[1]}</div>}
    </article>
  );
};

interface IArticleButton {
  location: string;
}

export const ArticleButton: FC<IArticleButton> = (props) => {
  return (
    <NavLink className="btn btn-stripe btn-radius" to={props.location}>
      <p className="button-text">{props.children}</p>
      <FiArrowRight id="icon" />
    </NavLink>
  );
};
