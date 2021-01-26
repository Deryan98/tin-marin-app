import {API_DEV} from '../constants/URL';

export const getAllLinks = () => {
    const url= `${API_DEV}/recommended-websites`;
    return fetch(url)
        .then((response) => response.json())
        .then((result) => result);
}