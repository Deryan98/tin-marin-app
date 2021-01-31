import { API_DEV, API_HOST } from '../constants/URL';

/**
 * @return {Promise<string[], MyError>} Esta promesa retorna un arreglo
 *  de tipo String con toda la
 * información de las recomendaciones.
 * @todo Agregue validaciones cuando hay problemas en la conectividad
 */
export const getAllCovidRecommendations = () => {
  const url = `${API_DEV}/recommendations`;

  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};
