import { FC } from 'react';
import { Flex } from 'react-flex-lite';
import ProfileMain from '../../assets/profile-main.svg';
import {
  ArticleButton,
  ArticleScreen,
} from '../../components/article-text/article-text';
import { FindOutMore } from '../../components/find-out-more/find-out-more';
import { ImageContainer } from '../../components/image-container/image-container';
import { useIsLargeScreen } from '../../hooks/use-is-large-screen';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { IBasicLayout, IRoute } from '../../service/website-types';
import './basic-layout.scss';

export interface IBasicLayoutProps {
  content: IBasicLayout;
  route: IRoute;
}

const BasicLayout: FC<IBasicLayoutProps> = ({ content }) => {
  const isNotMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  return (
    <section className="app">
      <article className="welcome-wrapper" id={content.title}>
        <ArticleScreen articleHeader={content.title} button={true}>
          {content.text}
          {!content.hiddenButton && (
            <>
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
      </article>
      <Flex auto className="bottom-padding" />
    </section>
  );
};

export default BasicLayout;
