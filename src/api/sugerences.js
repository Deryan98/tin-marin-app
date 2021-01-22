import { API_DEV } from '../constants/URL';

export const getAllSuperenceTypes = () => {
  const url = `${API_DEV}/suggestiontypes`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};
