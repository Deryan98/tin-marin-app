import { API_DEV, API_HOST } from '../constants/URL';

/**
 * @return {Promise<string[], MyError>} Esta promesa retorna un arreglo
 *  de tipo String con toda la
 * información de los Tipos de Sugerencia.
 * @todo Agregue validaciones cuando hay problemas en la conectividad
 */
export const getAllSuperenceTypes = () => {
  const url = `${API_DEV}/suggestiontypes`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
};

/**
 * @return {Promise<string[], MyError>}
 * Esta promesa realiza una petición de tipo POST y crea un nuevo registro
 * con la información de una sugerencia.
 * @param {string} suggestionType - Aquí se almacena el tipo de sugerencia.
 * @param {string} suggestion - Aquí se guarda la sugerencia que realiza un usuario.
 * @todo Agregue validaciones cuando hay problemas en la conectividad.
 */
export const storeSugerence = (suggestionType, suggestion) => {
  const url = `${API_DEV}/suggestions`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      suggestionType,
      suggestion,
    }),
  });
};
