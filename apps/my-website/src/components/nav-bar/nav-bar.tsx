import { Flex } from 'react-flex-lite';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './nav-bar.scss';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { FC, useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import FadeIn from 'react-fade-in';
import { IRoute } from '../../service/website-types';

export interface NavBarProps {
  content: Array<IRoute>;
  // isDark: IRoute;
}

export const NavBar: FC<NavBarProps> = ({ content }) => {
  const isMobile = useIsMobile();

  const [isOpen, setOpen] = useState<boolean>();

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  if (!isMobile) {
    return (
      <Flex px={25} pb={20} className="mobile-wrapper">
        <NavLink to="/">
          <Flex
            auto
            justify="center"
            align="center"
            onClick={() => setOpen(false)}
          >
            <img id="image-logo" src={Logo} alt="image of david taylor" />
          </Flex>
        </NavLink>
        <Flex auto />
        <Hamburger toggled={isOpen} toggle={toggleOpen} color={'#557381'} />
        {isOpen && (
          <ul className="nav-bar-mobile-container">
            <FadeIn>
              <Flex
                auto
                column
                align={'center'}
                justify={'center'}
                className="inner-mobile-container"
              >
                {content
                  .filter((route) => !route.navBarHidden)
                  .map((route, index) => {
                    return (
                      <NavLink
                        key={index}
                        to={route.path}
                        activeClassName="selected-mobile"
                        className="link-text"
                        onClick={toggleOpen}
                      >
                        <p className="list-item-mobile">{route.title}</p>
                      </NavLink>
                    );
                  })}
                <a
                  href="mailto:david_taylor96@outlook.com?subject=Hello David!"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-contact"
                >
                  Contact
                </a>
              </Flex>
            </FadeIn>
          </ul>
        )}
      </Flex>
    );
  }
  return (
    <Flex auto className="nav-bar">
      <NavLink to={'/'}>
        <img id="image-logo" src={Logo} alt="image of david taylor" />
      </NavLink>
      <Flex auto />
      {content
        .filter((route) => !route.navBarHidden)
        .map((route, index) => {
          return (
            <NavLink key={index} to={route.path} activeClassName="selected">
              <li className="list-item sliding">{route.title}</li>
            </NavLink>
          );
        })}
         <a
          href="mailto:david_taylor96@outlook.com?subject=Hello David!"
          target="_blank"
          rel="noreferrer"
          className="sliding contact"
        >
          Contact
        </a>
    </Flex>
  );
};
