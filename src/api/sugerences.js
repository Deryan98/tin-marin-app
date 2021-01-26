import { API_DEV } from '../constants/URL';

export const getAllSuperenceTypes = () => {
  const url = `${API_DEV}/suggestiontypes`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};

export const storeSugerence = (suggestionType,suggestion) => {
  const url = `${API_DEV}/suggestions`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      suggestionType,
      suggestion
    })
  })
  .then(response => response.json())
  .then(result => result)
}
