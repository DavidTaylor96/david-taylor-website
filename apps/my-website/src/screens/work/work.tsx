import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import noticeboard from '../../assets/notice-board.svg';

import './work.scss';
import { FindOutMore } from '../../components/find-out-more/find-out-more';

const WorkScreen = () => {
  return (
    <section className="app">
      <header className="wrapper main-wrapper">
        <div className="title-wrapper">
          <WelcomeHeader />
        </div>
      </header>
      <div className="navigator-wrapper-left">
        <FindOutMore buttonText={'My approach'} id={'about-me'} />
      </div>
      <article className="wrapper main-wrapper">
        <div className="article-container" id={'about-me'}>
          <ArticleScreen articleHeader={'My approach'}>
            No two projects are the same and I take a pragmatic approach to each
            projects I take on, focussing on delivering work that is as
            accessible and optimised as possible.
          </ArticleScreen>
          <div className="spacer" />
          <ImageContainer src={noticeboard} />
        </div>
      </article>
      <div className="navigator-wrapper-right">
        <FindOutMore id={'my-work'} onRight={true} buttonText={'Technologies'} />
      </div>
      <article className="wrapper main-wrapper">
        <div className="article-container" id={'my-work'}>
          <div className="spacer" />
          <ArticleScreen articleHeader={'My passions'}>
            Growing up in the <b> Highlands of Scotland</b>. I was always
            surounded by outdoor actives. I became an outdoor instructor and had
            the opportunity to teach all over the EU. One of my faviroute pass
            times is getting out on the water or up on the mountains.
          </ArticleScreen>
        </div>
      </article>
    </section>
  );
};

export default WorkScreen;
