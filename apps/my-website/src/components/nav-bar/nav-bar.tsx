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
        
      </Flex>
    );
  }
  return (
    <Flex auto className="nav-bar">
      <NavLink to={'/'}>
        <img id="image-logo" src={Logo} alt="image of david taylor" />
      </NavLink>
      {content
        .filter((route) => !route.navBarHidden)
        .map((route, index) => {
          return (
            <NavLink key={index} to={route.path} activeClassName="selected">
              <li className="list-item sliding">{route.title}</li>
            </NavLink>
          );
        })}
    </Flex>
  );
};
