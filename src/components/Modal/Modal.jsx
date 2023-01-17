import {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';


export function Modal({ closeModalWindow, item, handleKeyDown }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModalWindow();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <Overlay onClick={handleKeyDown}>
      <ModalWindow>
        <img src={item} alt="" />
      </ModalWindow>
    </Overlay>
  );
}


Modal.propTypes = {
  item: PropTypes.string,
  closeModalWindow: PropTypes.func,
};
