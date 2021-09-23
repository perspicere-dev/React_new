import React from 'react';
import styles from './Header.scss';
// import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom'; //remeber to add NavLink
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import {settings, infoContent, FAQcontent} from '../../data/dataStore';
import Search from '../Search/Search';



class Header extends React.Component {

    
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to={settings.slash} className={styles.logo}>
              <Icon name={settings.header.logo}/>
            </Link>
            <nav>
              <NavLink exact to={settings.slash} activeClassName='active'>Home</NavLink> {/* why works even without ctiveClassName='active'? */}
              <NavLink exact to={infoContent.toAdress} activeClassName='active'>Info</NavLink>  
              <NavLink exact to={FAQcontent.toAdress} activeClassName='active'>FAQ</NavLink>   
              <Search />      
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;