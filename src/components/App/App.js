import React from 'react';
import List from '../List/List';
import styles from './App.scss';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';

class App extends React.Component {
  state = {
    lists: [listData],
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
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div>
          {this.state.lists.map(({key, ...listProps}) => (
          <List key={key} {...listProps} />
        ))}
        </div>
        <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
      </main>
    )
  }
}

export default App;
