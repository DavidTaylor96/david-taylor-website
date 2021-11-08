import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import profileAtDesk from '../../assets/profile-at-desk.svg';
import mountains from '../../assets/mountains.svg';

import './about.scss';
import { FindOutMore } from '../../components/find-out-more/find-out-more';

const AboutScreen = () => {
  return (
    <section className="app">
      <header className="wrapper main-wrapper">
        <div className="title-wrapper">
          <WelcomeHeader />
        </div>
      </header>
      <div className="navigator-wrapper-left">
        <FindOutMore buttonText={'Recent experience'} id={'about-me'} />
      </div>
      <article className="wrapper main-wrapper">
        <div className="article-container" id={'about-me'}>
          <ArticleScreen articleHeader={'Recent experience'}>
            I am currently working with a small start up software consultancy
            furm based in Edinburgh. Through is I have worked on many diffrent
            projects. To deliver fast and effective solutions.
          </ArticleScreen>
          <div className="spacer" />
          <ImageContainer src={profileAtDesk} />
        </div>
      </article>
      <div className="navigator-wrapper-right">
        <FindOutMore id={'my-work'} onRight={true} buttonText={'My passion'} />
      </div>
      <article className="wrapper main-wrapper">
        <div className="article-container" id={'my-work'}>
          <ImageContainer src={mountains} />
          <div className="spacer" />
          <ArticleScreen articleHeader={'My passions'}>
            Growing up in the <b> Highlands of Scotland</b>. I was always
            surounded by <b>outdoor actives</b>. I became an outdoor instructor and had
            the opportunity to teach all over the EU. One of my faviroute pass
            times is getting out on the water or up on the mountains.
          </ArticleScreen>
        </div>
      </article>
    </section>
  );
};

export default AboutScreen;
