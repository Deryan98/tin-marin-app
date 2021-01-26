import Sound from 'react-native-sound';

Sound.setCategory('Ambient', true);

const buttonPress = new Sound(require('../audio/tuturu.mp3'), error => console.log(error));
export const playButtonPress = () => {
  buttonPress.play();
}

const heylisten = new Sound (require('../audio/heylisten.mp3'), error=> console.log(error));
export const heyListenButton = () =>{
  heylisten.play();
}

const wow = new Sound (require('../audio/wow.mp3'), error=> console.log(error));
export const wowButton = () =>{
  wow.play();
}

const msn = new Sound (require('../audio/msn.mp3'), error=> console.log(error));
export const msnButton = () =>{
  msn.play();
}

const catc = new Sound (require('../audio/catch.mp3'), error=> console.log(error));
export const catcButton = () =>{
  catc.play();
}

const coin = new Sound (require('../audio/coin.mp3'), error=> console.log(error));
export const coinButton = () =>{
  coin.play();
}

const ohh = new Sound (require('../audio/ohh.mp3'), error=> console.log(error));
export const ohhButton = () =>{
  ohh.play();
}




