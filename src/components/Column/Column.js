import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
// import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
 
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }
  
  render() {
    const {title, icon} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {/* <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} cancelConfirmation={true}/>
        </div> */}
      </section>
    );
  }
}

export default Column;
