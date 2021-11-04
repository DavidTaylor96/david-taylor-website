import './article-text.scss';
import React from 'react';

interface IArticleScreenProps {
  articleHeader: string;
  button?: boolean;
}

export const ArticleScreen: React.FC<IArticleScreenProps> = (props) => {
  return (
    <article className="article-wrapper">
      <h1>{props.articleHeader}</h1>
      <span id="separator" />
      <p>{props.children}</p>
      {props.button && (
        <button className="button">
          <p className="button-text">Learn more</p>
        </button>
      )}
    </article>
  );
};
