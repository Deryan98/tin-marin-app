import { API_DEV, API_HOST } from '../constants/URL';

export const getAllFAQs = () => {
  const url = `${API_DEV}/faqs`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};
