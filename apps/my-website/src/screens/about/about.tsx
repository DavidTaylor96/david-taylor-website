import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import ProfileAtDesk from '../../assets/profile-at-desk.svg';
import Mountains from '../../assets/mountains.svg';
import { FindOutMore } from '../../components/find-out-more/find-out-more';

import '../home/home-screen.scss';

const AboutScreen = () => {
  return (
    <section className="app">
      <header className="wrapper">
          <ArticleScreen articleHeader={'About me'}>
            Software develoer currently based in Edinburgh, Scotland. Passionate
            devloper that belives in bringing ideas to life through{' '}
            <b>creative UI</b>, fast website with great <b>SEO</b> and fantastic{' '}
            <b>user journeys</b> to give the best customer experience.
          </ArticleScreen>
      </header>
      <div className="navigator-wrapper-left">
        <FindOutMore buttonText={'Recent experience'} id={'about-me'} />
      </div>
      <article className="wrapper" id={'about-me'}>
          <ArticleScreen articleHeader={'Recent experience'}>
            I am currently working with a small start up software consultancy
            furm based in Edinburgh. Through is I have worked on many diffrent
            projects. To deliver fast and effective solutions.
          </ArticleScreen>
          <ImageContainer image={ProfileAtDesk} />
      </article>
      <div className="navigator-wrapper-right">
        <FindOutMore id={'my-work'} onRight={true} buttonText={'My passion'} />
      </div>
      <article className="wrapper" id={'my-work'}>
          <ImageContainer image={Mountains}/>
          <ArticleScreen articleHeader={'My passions'}>
            Growing up in the <b> Highlands of Scotland</b>. I was always
            surounded by <b>outdoor actives</b>. I became an outdoor instructor
            and had the opportunity to teach all over the EU. One of my
            faviroute pass times is getting out on the water or up on the
            mountains.
          </ArticleScreen>
      </article>
    </section>
  );
};

export default AboutScreen;
