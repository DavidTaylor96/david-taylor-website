import { Flex } from 'react-flex-lite';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './nav-bar.scss';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

export const NavBar = () => {
  const isMobile = useIsMobile();

  const [toggle, setToggle] = useState<boolean>();
  const [isOpen, setOpen] = useState(false);

  if (!isMobile) {
    return (
      <Flex px={25} className="mobile-wrapper">
        <NavLink to="/">
          <Flex auto justify="center" align="center">
            <img id="image-logo" src={Logo} alt="image of david taylor" />
          </Flex>
        </NavLink>
        <Flex auto />
        <Hamburger toggled={isOpen} toggle={setOpen} color={'#557381'} />
        {isOpen && (
          <ul className="nav-bar-mobile-container">
            <Hamburger toggled={isOpen} toggle={setOpen} color={'#557381'} />
            <NavLink to="/" activeClassName="selected">
              <li className="list-item">Home</li>
            </NavLink>
            <NavLink to="/about" activeClassName="selected">
              <li className="list-item">About</li>
            </NavLink>
            <NavLink to="/work" activeClassName="selected">
              <li className="list-item">Work</li>
            </NavLink>
            <li className="mobile-contact">Contact</li>s
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
