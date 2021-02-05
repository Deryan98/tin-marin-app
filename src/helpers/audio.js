import Sound from 'react-native-sound';

Sound.setCategory('Ambient', true);

/**
 * Los metodos de este archivo se encargan de reproducir un sonido en especifico cada vez que se presiona un boton del MenuPrincipal
 */


 
/**
 * Variable que hace referencia al boton "Exhibiciones"
 */
const buttonPress = new Sound(require('../audio/tuturu.mp3'), error => console.log(error));
/**
 * Reproduce un sonido al presionar el boton de "Exhibiciones"
 */
export const playButtonPress = () => {
  buttonPress.play();
}


/**
 * Variable que hace referencia al boton "Recomendaciones Covid"
 */
const heylisten = new Sound (require('../audio/heylisten.mp3'), error=> console.log(error));
/**
 * Reproduce un sonido al presionar el boton de "Recomendaciones COVID"
 */
export const heyListenButton = () =>{
  heylisten.play();
}


/**
 * Variable que hace referencia al boton "Sitios de Interes"
 */
const wow = new Sound (require('../audio/wow.mp3'), error=> console.log(error));
/**
 * Reproduce un sonido al presionar el boton de "Sitios de Interes"
 */
export const wowButton = () =>{
  wow.play();
}


/**
 * Variable que hace referencia al boton "Sugerencias"
 */
const msn = new Sound (require('../audio/msn.mp3'), error=> console.log(error));
/**
 * Reproduce un sonido al presionar el boton de "Sugerencias"
 */
export const msnButton = () =>{
  msn.play();
}


/**
 * Variable que hace referencia al boton "Preguntas Frecuentes"
 */
const catc = new Sound (require('../audio/catch.mp3'), error=> console.log(error));
/**
 * Reproduce un sonido al presionar el boton de "Preguntas Frecuentes"
 */
export const catcButton = () =>{
  catc.play();
}


/**
 * Variable que hace referencia a los botones "Saber mas, conocela"
 */
const coin = new Sound (require('../audio/coin.mp3'), error=> console.log(error));
/**
 * Reproduce un sonido al presionar de los botones "Saber Mas", "Conocela", que se encuentran en cada una de las diferentes pantallas
 */
export const coinButton = () =>{
  coin.play();
}


/**
 * Variable que hace referencia al boton "Conocenos mas"
 */
const ohh = new Sound (require('../audio/ohh.mp3'), error=> console.log(error));
/**
 * Reproduce un sonido al presionar de los botones "Conocenos Mas"
 */
export const ohhButton = () =>{
  ohh.play();
}




