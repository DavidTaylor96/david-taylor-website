import { Flex } from 'react-flex-lite';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './nav-bar.scss';

export const NavBar = () => {
  return (
    <Flex auto style={{ backgroundColor: 'white' }}>
      <NavLink style={{ display: 'flex' }} to="/">
        <Flex auto justify="center" align="center">
          <img id="image-logo" src={Logo} alt="image of david taylor" />
        </Flex>
      </NavLink>
      <ul className="nav-bar">
        <NavLink to="/" activeClassName="selected">
          <li className="list-item sliding">
              Home
          </li>
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
