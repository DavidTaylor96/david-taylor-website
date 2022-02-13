import { FC } from 'react';
import { Flex } from 'react-flex-lite';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineGitlab
} from 'react-icons/ai';
import {
  ArticleButton,
  ArticleScreen
} from '../../components/article-text/article-text';
import { FindOutMore } from '../../components/find-out-more/find-out-more';
import { ImageContainer } from '../../components/image-container/image-container';
import { WelcomeHeader } from '../../components/welcome/welcome-header';
import { useIsLargeScreen } from '../../hooks/use-is-large-screen';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { IBasicLayout, IRoute } from '../../service/website-types';
import './basic-right-layout.scss';

export interface IBasicLayoutProps {
  content: IBasicLayout;
  route: IRoute;
}

const BasicRightLayout: FC<IBasicLayoutProps> = ({ content }) => {
  const isMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  return (
    <section className="app">
      {content.showWelcome && (
        <header className="welcome-wrapper">
          <WelcomeHeader />
        </header>
      )}
      {isMobile && (
        <div className="navigator-wrapper-left">
          <FindOutMore
            buttonText={content.buttonText}
            id={content.id}
            largeScreen={isLargeScreen ? true : false}
          />
        </div>
      )}
      <article className="wrapper reverse" id={content.id}>
        <ArticleScreen articleHeader={content.title} button={true}>
          {content.text}
          {!content.hiddenButton && (
            <>
              <div className="icon-link-wrapper">
                {content?.links?.map((link, index) => {
                  return (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      {link.icon === 'git-hub' && (
                        <AiOutlineGithub className="icons" />
                      )}
                      {link.icon === 'git-lab' && (
                        <AiOutlineGitlab className="icons" />
                      )}
                      {link.icon === 'Linkedin' && (
                        <AiFillLinkedin className="icons" />
                      )}
                    </a>
                  );
                })}
              </div>
              {content.actions.map((route, index) => {
                return (
                  <ArticleButton key={index} location={route.link}>
                    {route.title}
                  </ArticleButton>
                );
              })}
            </>
          )}
        </ArticleScreen>
        <ImageContainer image={content.image} />
      </article>
      <Flex auto className="bottom-padding" />
    </section>
  );
};

export default BasicRightLayout;
