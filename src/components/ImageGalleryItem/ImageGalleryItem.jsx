import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeSrc, tags }) => {
  return (
    <GalleryItem>
      <Image src={webformatURL} alt={tags} data-img={largeSrc} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeSrc: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
