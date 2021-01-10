import {API_HOST} from '../constants/URL'; 

export function getAllExhibitions(){
    const url = `${API_HOST}/exhibitions`;

    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    });
}

export function getExhibitionById(idExhibition){
    const url = `${API_HOST}/exhibitions/${idExhibition}`;

    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    });
}