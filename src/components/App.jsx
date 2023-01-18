import { useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchPhotos } from 'services/fetchPhotos';
import { Wrapper, ErrorMsg } from './Loader/Loader.styled';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [nextSearch, setNextSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState(false);
  const [show, setShow] = useState(false);
  const [largeImg, setLargeImg] = useState(null);

  const updatePictures = useCallback(
    async newSearch => {
      try {
        setIsLoading(true);
        const photos = await fetchPhotos(newSearch, page);
        const oldPictures = pictures;
        if (photos.length !== 0) {
          const newPictures = [...oldPictures, ...photos];
          if (search !== newSearch) {
            setPictures(photos);
          }
          if (search === newSearch) {
            setPictures(newPictures);
          }
          if (photos.length < 12) {
            setIsLoadMoreBtn(true);
          }
        } else {
          alert('Sorry, no image matching');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [page, pictures, search]
  );

  const resetArray = searchPicture => {
    setSearch(searchPicture);
    setIsLoading(true);
    setPictures([]);
    setPage(1);
  };

  function changeSearchValue(searchPicture) {
    resetArray(searchPicture);
    updatePictures(searchPicture);
  }
  const loadMorePictures = () => {
    updatePictures(nextSearch);
  };

  useEffect(() => {
    if (nextSearch !== search) {
      updatePictures(search);
      setNextSearch(search);
    }
  }, [search, nextSearch, updatePictures]);

  const openModalWindow = e => {
    const largeImg = e.target.dataset.img;
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    setLargeImg(largeImg);
    setShow(true);
  };

  const closeModalWindow = () => {
    setShow(false);
  };

  return (
    <Wrapper>
      <Searchbar newSearch={changeSearchValue} />
      {error && (
        <ErrorMsg>Whoops, something went wrong: {error.message}</ErrorMsg>
      )}

      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} openModalWindow={openModalWindow} />
      )}
      {isLoading && <Loader />}
      {pictures.length > 0 && !isLoadMoreBtn && (
        <Button text="Load more" func={loadMorePictures} />
      )}

      {show && <Modal imgSrc={largeImg} closeModalWindow={closeModalWindow} />}
    </Wrapper>
  );
};
