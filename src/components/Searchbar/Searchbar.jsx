import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, Form, SearchBtn, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({newSearch}) => {
  const [search, setSearch] = useState('');
  const valueSubmit = e => {
    setSearch(e.target.value);
    e.preventDefault();
    newSearch(search);
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
             value={search}
            />
          </Form>
        </Header>
      </>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};



