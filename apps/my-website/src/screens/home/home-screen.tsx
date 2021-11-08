import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import profileMain from '../../assets/profile-main.svg';
import computer from '../../assets/computer-books-and-plant.svg';

import './home-screen.scss';
import { FindOutMore } from '../../components/find-out-more/find-out-more';
import { useHistory } from 'react-router-dom';

 const HomeScreen = () => {

  const history = useHistory();

  const handleAbout = () => {
    history.push('/about')
  };
  const handleWork = () => {
    history.push('/work')
  };

  
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
          id={'about-me'}
           />
        </div>
      <article className="wrapper main-wrapper">
        <div className="article-container" id={"about-me"}>
          <ArticleScreen articleHeader={'About Me'} button={true} onClick={handleAbout}>
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
          id={'my-work'}
          onRight={true}
          buttonText={'My Approach'}
          />
        </div>
      <article className="wrapper main-wrapper">
        <div className="article-container" id={'my-work'}>
          <ImageContainer src={computer} />
          <div className="spacer" />
          <ArticleScreen articleHeader={'My Approach'} button={true} onClick={handleWork}>
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
