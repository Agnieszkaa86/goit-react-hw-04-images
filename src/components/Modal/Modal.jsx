import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export function Modal({ closeModalWindow, imgSrc }) {
  const closeByOverlayClick = e => {
    const overlay = e.currentTarget;
    if (e.target === overlay) {
      closeModalWindow();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModalWindow();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
    document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModalWindow]);

  return (
    <Overlay onClick={closeByOverlayClick}>
      <ModalWindow>
        <img src={imgSrc} alt="" />
      </ModalWindow>
    </Overlay>
  );
}

Modal.propTypes = {
  imgSrc: PropTypes.string,
  closeModalWindow: PropTypes.func,
};
