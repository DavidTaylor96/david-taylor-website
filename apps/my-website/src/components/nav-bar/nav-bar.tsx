import { Flex } from 'react-flex-lite';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import './nav-bar.scss'

export const NavBar = () => {
  return (
    <Flex auto >
      <NavLink
        style={{ display: 'flex' }}
        to="/"
        activeClassName="selected"
      >
        <Flex justify="center" align="center">
          <h2>logo</h2>
          <Logo/>
        </Flex>
      </NavLink>
      <ul className="nav-bar">
        <NavLink to="/design" activeClassName="selected">
          <li className="list-item sliding">Design</li>
        </NavLink>
        <NavLink to="/software" activeClassName="selected">
          <li className="list-item sliding">Work</li>
        </NavLink>
      </ul>
      <Flex ml={10} align={'center'} justify={'center'} column>
        <Flex
          px={30}
          py={10}
          style={{
            borderRadius: 10,
            backgroundColor: '#4F8689',
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
