import { Flex } from 'react-flex-lite';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './nav-bar.scss';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import FadeIn from 'react-fade-in';

export const NavBar = () => {
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
            <Flex
              auto
              column
              align={'center'}
              justify={'center'}
              className="inner-mobile-container"
            >
              <FadeIn>
                <NavLink to="/" activeClassName="selected-mobile" className="link-text" onClick={toggleOpen}>
                  <p className="list-item-mobile">Home</p>
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="selected-mobile"
                  className="link-text" 
                  onClick={toggleOpen}
                >
                  <p className="list-item-mobile">About</p>
                </NavLink>
                <NavLink
                  to="/work"
                  activeClassName="selected-mobile"
                  className="link-text" 

                  onClick={toggleOpen}
                >
                  <p className="list-item-mobile">Work</p>
                </NavLink>
                <li className="mobile-contact">Contact</li>
              </FadeIn>
            </Flex>
          </ul>
        )}
      </Flex>
    );
  }
  return (
    <Flex auto className="nav-bar">
      <NavLink to="/">
        <Flex auto justify="center" align="center">
          <img id="image-logo" src={Logo} alt="image of david taylor" />
        </Flex>
      </NavLink>
      <Flex auto />
      <ul className="nav-bar-container">
        <NavLink to="/" activeClassName="selected">
          <li className="list-item sliding">Home</li>
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          <li className="list-item sliding">About</li>
        </NavLink>
        <NavLink to="/work" activeClassName="selected">
          <li className="list-item sliding">Work</li>
        </NavLink>
        <li className="sliding contact">Contact</li>
      </ul>
    </Flex>
  );
};
