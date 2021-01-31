import { API_HOST } from '../constants/URL';

/**
 * Petición fetch que consume el endpoint para obtener un JSON con las Exhibiciones.
 * @property {string} url - Contiene la ruta del endpoint.
 * @return {Promise<string[], MyError>} Esta promesa retorna un arreglo
 *  de tipo String con toda la
 * información de las exhibiciones.
 * @todo Agregue validaciones cuando hay problemas en la conectividad.
 * @example getAllExhibitions()
 * .then((response) => {...});
 */
export function getAllExhibitions() {
  const url = `${API_HOST}/exhibitions`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

/**
 * Petición fetch que consume el endpoint para obtener un JSON con el detalle de una Exhibición.
 * @param {string} idExhibition - ID de la exhibición a mostrar.
 * @property {string} url - Contiene la ruta del endpoint.
 * @return {Promise<string[], MyError>} Esta promesa retorna un objeto JSON
 * con el detalle de una exhibición.
 * @todo Agregue validaciones cuando hay problemas en la conectividad.
 * @example getExhibitionById('5ff944b427c7c600175674ef')
 * .then((response) => {...});
 */
export function getExhibitionById(idExhibition) {
  const url = `${API_HOST}/exhibitions/${idExhibition}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

/**
 * Petición fetch que consume el endpoint para obtener un arreglo de Nombres que coincidan con una variable nombre definida por el Usuario.
 * @param {string} name - Nombre de la exhibición a mostrar.
 * @property {string} url - Contiene la ruta del endpoint.
 * @return {Promise<string[], MyError>} Esta promesa retorna un arreglo
 *  de tipo String con toda la
 * información de las exhibiciones que coincidan con el nombre.
 * @todo Agregue validaciones cuando hay problemas en la conectividad.
 * @example getExhibitionByName('El Avión')
 * .then((response) => {...});
 */
export function getExhibitionByName(name) {
  const url = `${API_HOST}/exhibitions/?name=${name}`;

  return fetch(url)
    .then((response) => {
      // console.log(response)
      return response.json();
    })
    .then((result) => {
      // console.log(result)
      return result;
    });
}
