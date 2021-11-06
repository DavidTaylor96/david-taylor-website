import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import profileMain from '../../assets/profile-main.svg';
import computer from '../../assets/computer-books-and-plant.svg';

import './home-screen.scss';
import { FindOutMore } from '../../components/find-out-more/find-out-more';

export function HomeScreen() {
  return (
    <section className="app">
      <header className="wrapper main-wrapper">
        <div className="title-wrapper">
          <WelcomeHeader />
        </div>
      </header>
        <div className="navigator-wrapper-left">
          <FindOutMore
          buttonText={'Find out more'}
           />
        </div>
      <article className="wrapper main-wrapper">
        <div className="article-container">
          <ArticleScreen articleHeader={'About Me'} button={true}>
            Innovative and self-motivated software developer with good
            problem-solving skills and a strong desire for continuous learning.
            committed to continuing my progress and eager to develop my
            professional development.
          </ArticleScreen>
          <div className="spacer" />
          <ImageContainer src={profileMain} />
        </div>
      </article>
        <div className="navigator-wrapper-right">
          <FindOutMore 
          onRight={true}
          buttonText={'About my work'}
          />
        </div>
      <article className="wrapper main-wrapper">
        <div className="article-container">
          <ImageContainer src={computer} />
          <div className="spacer" />
          <ArticleScreen articleHeader={'About my work'} button={true}>
            I believe in a proactive approch to software deveopment.
            Understanding the bigger picture and making sure everyone is on the
            same page. This allows you to react and be agile in your approch to
            software.
          </ArticleScreen>
        </div>
      </article>
    </section>
  );
}

export default HomeScreen;
