import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    cancelConfirmation: PropTypes.bool,
  }

  static defaultProps = {
    text: 'Add new item',
    cancelConfirmation: false,
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  hideButton() {
    this.setState({
      value: '',
      visibleButtons: false
    });
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.hideButton();
    }
  }

  handleCancel = () => {
    if(this.props.cancelConfirmation) {

      if (window.confirm("Do you really want to Cancel?")) {
        this.hideButton();
      }
      
    } else {
      this.hideButton();
    }

  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}

export default Creator;