import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import ProfileAtDesk from '../../assets/profile-at-desk.svg';
import Mountains from '../../assets/mountains.svg';
import { FindOutMore } from '../../components/find-out-more/find-out-more';

import '../home/home-screen.scss';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { Flex } from 'react-flex-lite';

const AboutScreen = () => {
  const isNotMobile = useIsMobile();
  return (
    <section className="app">
      <header className="welcome-wrapper">
        <ArticleScreen articleHeader={'About me'}>
          Software develoer currently based in Edinburgh, Scotland. Passionate
          devloper that belives in bringing ideas to life through{' '}
          <b>creative UI</b>, fast website with great <b>SEO</b> and fantastic{' '}
          <b>user journeys</b> to give the best customer experience.
        </ArticleScreen>
      </header>
      {isNotMobile && (
        <div className="navigator-wrapper-left">
          <FindOutMore buttonText={'Recent experience'} id={'about-me'} />
        </div>
      )}
      <article className="wrapper reverse" id={'about-me'}>
        <ArticleScreen articleHeader={'Recent experience'}>
          I am currently working with a small start up software consultancy furm
          based in Edinburgh. Through is I have worked on many diffrent
          projects. To deliver fast and effective solutions.
        </ArticleScreen>
        <ImageContainer image={ProfileAtDesk} />
      </article>
      {isNotMobile && (
        <div className="navigator-wrapper-right">
          <FindOutMore
            id={'my-work'}
            onRight={true}
            buttonText={'My passion'}
          />
        </div>
      )}
      <article className="wrapper" id={'my-work'}>
        <ImageContainer image={Mountains} />
        <ArticleScreen articleHeader={'My passions'}>
          Growing up in the <b> Highlands of Scotland</b>. I was always
          surounded by <b>outdoor actives</b>. I became an outdoor instructor
          and had the opportunity to teach all over the EU. One of my faviroute
          pass times is getting out on the water or up on the mountains.
        </ArticleScreen>
      </article>
      <Flex auto className="bottom-padding"/>

    </section>
  );
};

export default AboutScreen;
