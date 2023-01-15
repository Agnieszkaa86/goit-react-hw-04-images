import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export const Button = ({ text, func }) => {
  return (
    <LoadMoreBtn type="button" onClick={func}>
      {text}
    </LoadMoreBtn>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
