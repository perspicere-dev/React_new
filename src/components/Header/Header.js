import React from 'react';
import styles from './Header.scss';
// import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';



class Header extends React.Component {
    
  render() {
    return (
      <Header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to = '/' className={styles.logo}>
              <Icon name='at'/>
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
            </nav>
          </div>
        </Container>

      </Header>
    );
  }
}

export default Header;