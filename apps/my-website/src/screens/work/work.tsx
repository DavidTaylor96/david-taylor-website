import { Flex } from 'react-flex-lite';
import Noticeboard from '../../assets/notice-board.svg';
import { ArticleScreen } from '../../components/article-text/article-text';
import { FindOutMore } from '../../components/find-out-more/find-out-more';
import { ImageContainer } from '../../components/image-container/image-container';
import { TechList } from '../../components/tech-list/tech-list';
import { useIsLargeScreen } from '../../hooks/use-is-large-screen';
import { useIsMobile } from '../../hooks/use-is-mobile';
import '../home/home-screen.scss';
import './work.scss';

const WorkScreen = () => {
  const isNotMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  return (
    <section className="app">
      <header className="welcome-wrapper">
        <ArticleScreen articleHeader={'About my work'}>
          I enjoy working with forward-thinking people to build interactive,
          accessible products. From working on projects from{' '}
          <b>3D e-commerce sites</b>, App to <b>track lyme disease</b> and a
          <b>social media scheduled app</b>. Through these experiences I have
          learn’t the importance of planning and forwarded-thinking. This allows
          me and the people i work with to finish projects on time.
        </ArticleScreen>
      </header>
      {isNotMobile && (
        <div className="navigator-wrapper-left">
          <FindOutMore
            buttonText={'My approach'}
            id={'about-me'}
            largeScreen={isLargeScreen ? true : false}
          />
        </div>
      )}
      <article className="wrapper reverse" id={'about-me'}>
        <ArticleScreen articleHeader={'My approach'}>
          No two projects are the same and I take a pragmatic approach to each
          projects I take on, focussing on delivering work that is as accessible
          and optimised as possible.
        </ArticleScreen>
        <Flex justify={'center'} className="image-container-outer">
          <img
            src={Noticeboard}
            className="noticeboard-logo"
            alt="david taylor"
          />
        </Flex>
      </article>
      {isNotMobile && (
        <div className="navigator-wrapper-right">
          <FindOutMore
            id={'my-work'}
            onRight={true}
            buttonText={'Technologies'}
            largeScreen={isLargeScreen ? true : false}
          />
        </div>
      )}
      <article className="wrapper" id={'my-work'}>
        <TechList articleHeader={'My passions'} />
      </article>
    </section>
  );
};

export default WorkScreen;
