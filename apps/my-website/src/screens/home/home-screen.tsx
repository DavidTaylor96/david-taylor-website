import { ArticleScreen } from '../../components/article-text/article-text';
import { ImageContainer } from '../../components/image-container/image-container';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import Computer from '../../assets/computer-plant-and-books.svg';
import { FindOutMore } from '../../components/find-out-more/find-out-more';
import ProfileMain from '../../assets/profile-main.svg';
import { useHistory } from 'react-router-dom';
import './home-screen.scss';
import { Flex } from 'react-flex-lite';

const HomeScreen = () => {
  const history = useHistory();

  const handleAbout = () => {
    history.push('/about');
  };
  const handleWork = () => {
    history.push('/work');
  };

  return (
    <section className="app">
      <header className="welcome-wrapper">
          <WelcomeHeader />
      </header>
      <div className="navigator-wrapper-left">
        <FindOutMore buttonText={'Find out more'} id={'about-me'} />
      </div>

      <article className="wrapper reverse" id={'about-me'}>
        <ArticleScreen
          articleHeader={'About Me'}
          button={true}
          onClick={handleAbout}
        >
          Innovative and self-motivated software developer with good
          problem-solving skills and a strong desire for continuous learning.
          committed to continuing my progress and eager to develop my
          professional development.
        </ArticleScreen>
        <ImageContainer image={ProfileMain} />
      </article>
      <div className="navigator-wrapper-right">
        <FindOutMore id={'my-work'} onRight={true} buttonText={'My Approach'} />
      </div>
      <article className="wrapper" id={'my-work'}>
        <Flex  justify={'center'} className="profile-container-outer">
             <img src={Computer} className="computer-logo"  alt="david taylor"/>
        </Flex>
        <Flex w={100}/>
        <ArticleScreen
          articleHeader={'My Approach'}
          button={true}
          onClick={handleWork}
        >
          I believe in a proactive approch to software deveopment. Understanding
          the bigger picture and making sure everyone is on the same page. This
          allows you to react and be agile in your approch to software.
        </ArticleScreen>
      </article>
    </section>
  );
};

export default HomeScreen;
