import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
// import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description} = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        {/* <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div> */}
        {/* <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} cancelConfirmation={true}/>
        </div> */}
      </section>
    );
  }
}

export default List;

//TODO Read about react cxomponent state and genaral 
