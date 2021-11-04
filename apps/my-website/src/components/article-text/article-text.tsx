import './article-text.scss';
import React from 'react'

interface IArticleScreenProps{
  articleHeader: string;
  articleText: string;
  button?: boolean;

}


export const ArticleScreen: React.FC<IArticleScreenProps>  = (props) => {
  return (
    <article className="article-wrapper">
      <h1>About me</h1>
      <span id="separator" />
      <p>
        Innovative and self-motivated software developer with good
        problem-solving skills and a strong desire for continuous learning.
        committed to continuing my progress and eager to develop my professional
        development.
      </p>
    <button className="button">
      <p className="button-text">Learn more</p>
    </button>
    </article>
  );
};


