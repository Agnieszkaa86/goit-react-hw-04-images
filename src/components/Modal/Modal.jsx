import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.closeModalWindow();
    }
  };
  render() {
    const { item } = this.props;
    return (
      <Overlay onClick={this.handleKeyDown}>
        <ModalWindow>
          <img src={item} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  item: PropTypes.string,
  closeModalWindow: PropTypes.func,
};
