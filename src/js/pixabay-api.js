//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.

import { searchInput } from '../main';

// const для pixabay
const API_KEY = '43217823-e472439c26018cf28ab0cff6b';
export default function fetchData(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchInput.value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  });
}
