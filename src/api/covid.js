import { API_HOST } from '../constants/URL';

export const getAllCovidRecommendations = () => {
  const url = `${API_HOST}/recommendations`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};

// const url = `${API_HOST}/exhibitions`;

// return fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     return result;
//   });
