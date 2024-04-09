const API_KEY = '34205532-dcd3b12e75460bc879dbf1602';
const BASE_URL = 'https://pixabay.com/api/?';

export function fetchCards(searchQuery) {
  const SEARCH_PARAMS = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${SEARCH_PARAMS}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(error => console.log(error));
}
