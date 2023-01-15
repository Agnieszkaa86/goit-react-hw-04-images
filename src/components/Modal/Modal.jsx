import {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export const Modal= ()=> {
  const[isCloseModalWindow,setCloseModalWindow]=useState(false)

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setCloseModalWindow();
      }
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);
  // useEffect(() => {
  //   const handleKeyDown = e => console.log("keydown event: ", e);
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
 
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
