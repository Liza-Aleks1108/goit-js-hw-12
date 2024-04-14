//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.

import axios from 'axios';

// const для pixabay
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43217823-e472439c26018cf28ab0cff6b';

export default async function fetchData(query, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    // query = searchInput.value.trim()
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}
