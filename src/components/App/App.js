import React from 'react';
// import List from '../List/List';
import styles from './App.scss';
import {listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    lists: [listData],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description: 'new list',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, subtitle} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div>
          {/* {this.state.lists.map(({key, ...listProps}) => ( // przez ...listProps przekazywane są do List i w List poprzez this.props.xxxx dostajemy się do róznych np. obiektów, tablic etc. 
            <List key={key} {...listProps} />
          ))} */}
        </div>
        <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
      </main>
    );
  }
}

export default App;
