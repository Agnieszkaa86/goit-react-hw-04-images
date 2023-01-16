import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, Form, SearchBtn, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({newSearch}) => {
  const [searchPicture, setSearchPicture] = useState('');
  const valueSubmit = e => {
    setSearchPicture(e.target.searchPicture.value);
    e.preventDefault();
    newSearch({ searchPicture });
    setSearchPicture('');
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
            />
          </Form>
        </Header>
      </>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};



