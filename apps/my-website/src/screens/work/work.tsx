import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import noticeboard from '../../assets/notice-board.svg';

import './work.scss';
import { FindOutMore } from '../../components/find-out-more/find-out-more';
import { TechList } from '../../components/tech-list/tech-list';

const WorkScreen = () => {
  return (
    <section className="app">
      <header className="wrapper main-wrapper">
        <div className="title-wrapper">
          <ArticleScreen articleHeader={'About my work'}>
            I enjoy working with forward-thinking people to build interactive,
            accessible products. From working on projects from{' '}
            <b>3D e-commerce sites</b>, App to <b>track lyme disease</b> and a
            <b>social media scheduled app</b>. Through these experiences I have learn’t
            the importance of planning and forwarded-thinking. This allows me and
            the people i work with to finish projects on time.
          </ArticleScreen>
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
        <FindOutMore
          id={'my-work'}
          onRight={true}
          buttonText={'Technologies'}
        />
      </div>
      <article className="wrapper main-wrapper">
        <div className="article-container" id={'my-work'}>
          <div className="spacer" />
          <TechList articleHeader={'My passions'} />
        </div>
      </article>
    </section>
  );
};

export default WorkScreen;
