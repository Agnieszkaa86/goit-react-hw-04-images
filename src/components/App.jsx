import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import { fetchPhotos } from 'services/fetchPhotos';
import { Wrapper, ErrorMsg } from './Loader/Loader.styled';

export class App extends Component {
  state = {
    searchPicture: '',
    pictures: [],
    page: 1,
    search: '',
    nextSearch: '',
    isLoading: false,
    error: null,
    isLoadMoreBtn: false,
    modal: {
      show: false,
      img: null,
    },
  };

  updatePictures = async newSearch => {
    const { page, pictures, search } = this.state;

    try {
      const photos = await fetchPhotos(newSearch, page);
      const oldPictures = pictures;
      if (photos.length !== 0) {
        const newPictures = [...oldPictures, ...photos];
        if (search !== newSearch) {
          this.setState({ pictures: photos, page: 1 });
        }
        if (search === newSearch) {
          this.setState({ pictures: newPictures, page: page + 1 });
        }
        if (photos.length < 12) {
          this.setState({ isLoadMoreBtn: true });
         
        }
      } else {
        alert('Sorry, no image matching');
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  resetArray = (searchPicture) => {
    this.setState({
      search: searchPicture,
      isLoading: true,
      pictures: [],
      page: 1,
    });
  };

  changeSearchValue = (searchPicture ) => {
    this.resetArray(searchPicture);
    this.updatePictures(searchPicture);
  };
  loadMorePictures = () => {
    const { nextSearch } = this.state;
    this.updatePictures(nextSearch);
  };

  async componentDidUpdate() {
    const { search, nextSearch } = this.state;
    if (nextSearch !== search) {
      this.updatePictures(search);
      this.setState({ nextSearch: search });
    }
  }

  openModalWindow = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      largeImg: e.target.dataset.img,
      show: true,
    });
  };

  closeModalWindow = () => {
    this.setState({ show: false });
  };
  render() {
    const {
      error,
      pictures,
      isLoading,
      show,
      largeImg,
      isLoadMoreBtn,
    } = this.state;

    return (
      <Wrapper>
        <Searchbar newSearch={this.changeSearchValue} />
        {error && (
          <ErrorMsg>Whoops, something went wrong: {error.message}</ErrorMsg>
        )}

        {pictures.length > 0 && (
          <ImageGallery
            pictures={pictures}
            openModalWindow={this.openModalWindow}
          />
        )}
        {isLoading && <Loader />}
        {pictures.length > 0 && !isLoadMoreBtn && (
          <Button text="Load more" func={this.loadMorePictures} />
        )}

        {show && (
          <Modal item={largeImg} closeModalWindow={this.closeModalWindow} />
        )}
      </Wrapper>
    );
  }
}
