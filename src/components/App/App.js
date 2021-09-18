import React from 'react';
import List from '../List/ListContainer';
import styles from './App.scss';
import {listData} from '../../data/dataStore'; //settings removed due to creator not beig used 
// import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';

class App extends React.Component {
  state = {
    lists: [listData],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  // addList(title){
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
  //           title,
  //           description: 'new list',
  //           image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  //           columns: [],
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        <div>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
        {/* <Creator text={settings.listCreatorText} action={title => this.addList(title)}/> */}
      </main>
    );
  }
}

export default App;
