import { ArticleScreen } from '../../components/article-text/article-text';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import './home-screen.scss';

export function HomeScreen() {
  return (
    <div className="app">
      <header className="wrapper zero">
        <WelcomeHeader />
      </header>
      <header className="wrapper one">
        <ArticleScreen />
      </header>
      <header className="wrapper two">
        <WelcomeHeader />
      </header>
    </div>
  );
}

export default HomeScreen;
