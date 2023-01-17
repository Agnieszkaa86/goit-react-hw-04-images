import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, Form, SearchBtn, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ newSearch }) => {
  const [searchPictures, setSearchPictures] = useState('');

  const valueSubmit = e => {
    e.preventDefault();
    newSearch(searchPictures);
    setSearchPictures('');
  };
  const handleInput = e => {
    setSearchPictures(e.target.value);
  };
  return (
    <>
      <Header>
        <Form onSubmit={valueSubmit}>
          <SearchBtn type="submit">
            <ImSearch />
          </SearchBtn>

          <Input
            type="text"
            placeholder="Search images and photos"
            name="searchPicture"
            autoFocus
            autoComplete="off"
            onChange={handleInput}
          />
        </Form>
      </Header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
