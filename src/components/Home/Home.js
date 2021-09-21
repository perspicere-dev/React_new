import React from 'react';
import List from '../List/ListContainer';
import styles from './Home.scss';
// import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';

class Home extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        <div>
          {
            // map -> weź dane z tablicy, na której to wywołujemy, wykonaj transformację na każdym elemencie
            //  i elementy powstałę po tej transformacji "sklej" jako nową tablicę
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            // https://epicreact.dev/why-react-needs-a-key-prop/ 

            /*
              {lists.map(kotek => (
              new List(kotek.id, kotek.title, ...)
            ))}
            */
          }
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
        {/* <Creator text={settings.listCreatorText} action={title => this.addList(title)}/> */}
      </main>
    );
  }
}

export default Home;
