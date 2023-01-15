import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(200vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(260px, 460px));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
