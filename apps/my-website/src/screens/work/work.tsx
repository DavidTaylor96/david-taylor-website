import Noticeboard from '../../assets/notice-board.svg';
import { ArticleScreen } from '../../components/article-text/article-text';
import { FindOutMore } from '../../components/find-out-more/find-out-more';
import { ImageContainer } from '../../components/image-container/image-container';
import { TechList } from '../../components/tech-list/tech-list';
import '../home/home-screen.scss';

const WorkScreen = () => {
  return (
    <section className="app">
      <header className="wrapper">
        <ArticleScreen articleHeader={'About my work'}>
          I enjoy working with forward-thinking people to build interactive,
          accessible products. From working on projects from{' '}
          <b>3D e-commerce sites</b>, App to <b>track lyme disease</b> and a
          <b>social media scheduled app</b>. Through these experiences I have
          learn’t the importance of planning and forwarded-thinking. This allows
          me and the people i work with to finish projects on time.
        </ArticleScreen>
      </header>
      <div className="navigator-wrapper-left">
        <FindOutMore buttonText={'My approach'} id={'about-me'} />
      </div>
      <article className="wrapper reverse" id={'about-me'}>
        <ArticleScreen articleHeader={'My approach'}>
          No two projects are the same and I take a pragmatic approach to each
          projects I take on, focussing on delivering work that is as accessible
          and optimised as possible.
        </ArticleScreen>
        <ImageContainer image={Noticeboard} />
      </article>
      <div className="navigator-wrapper-right">
        <FindOutMore
          id={'my-work'}
          onRight={true}
          buttonText={'Technologies'}
        />
      </div>
      <article className="wrapper" id={'my-work'}>
        <TechList articleHeader={'My passions'} />
      </article>
    </section>
  );
};

export default WorkScreen;
