import { API_DEV } from '../constants/URL';

export const getAllCovidRecommendations = () => {
  const url = `${API_DEV}/recommendations`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};
