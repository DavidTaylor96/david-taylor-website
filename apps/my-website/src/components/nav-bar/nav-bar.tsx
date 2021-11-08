import { Flex } from 'react-flex-lite';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './nav-bar.scss';

export const NavBar = () => {
  return (
    <Flex auto style={{backgroundColor: 'white'}}>
      <NavLink style={{ display: 'flex' }} to="/" activeClassName="selected">
        <Flex auto justify="center" align="center">
          <img id="image-logo" src={Logo} alt="image of david taylor" />
        </Flex>
      </NavLink>
      <ul className="nav-bar">
        <NavLink to="/About" activeClassName="selected">
          <li className="list-item sliding">About</li>
        </NavLink>
        <NavLink to="/work" activeClassName="selected">
          <li className="list-item sliding">Work</li>
        </NavLink>
      </ul>
      <Flex ml={10} align={'center'} justify={'center'} column>
        <Flex
          px={30}
          py={10}
          style={{
            borderRadius: 10,
            backgroundColor: '#557381',
            color: 'white',
            fontFamily: 'Poppins',
            cursor: 'pointer',
          }}
        >
          Hire me
        </Flex>
      </Flex>
    </Flex>
  );
};
