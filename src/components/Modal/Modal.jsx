import {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';


export function Modal({ closeModalWindow, imgSrc}) {
  useEffect(() => {
   window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

   const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModalWindow();
      }
    };
  return (
    <Overlay onClick={handleKeyDown}>
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
