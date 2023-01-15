import axios from 'axios';

export const fetchPhotos = async (searchP, currentPage) => {

  const API_KEY = '28056380-7ebf030984661b6034d156d96';
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: currentPage,
  });

  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchP}&${params}`
  );
  const responseData = response.data.hits;
  return responseData;
};

