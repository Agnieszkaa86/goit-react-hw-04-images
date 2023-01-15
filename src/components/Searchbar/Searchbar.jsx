import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, Form, SearchBtn, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  valueSubmit = e => {
    const search = e.target.searchPicture.value;
    e.preventDefault();
    this.props.newSearch(search);
  };

  render() {
    return (
      <>
        <Header>
          <Form onSubmit={this.valueSubmit}>
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
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};



