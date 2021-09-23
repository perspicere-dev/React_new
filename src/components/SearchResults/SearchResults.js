import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';


class SearchResults extends React.Component {
 
  static propTypes = {
    cards: PropTypes.array,
  }

  
  render() {
    const {cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>title
          <span className={styles.icon}>
            <Icon name='cat' />
          </span>
        </h3>
        <div>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
