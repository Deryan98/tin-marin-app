import Sound from 'react-native-sound';

Sound.setCategory('Ambient', true);

const buttonPress = new Sound(require('../audio/tuturu.mp3'), error => console.log(error));
export const playButtonPress = () => {
  buttonPress.play();
}

// const pull = new Sound(require('../audio/pull.mp3'), error => console.log(error));
// export const playListPull = () => {
//   pull.play((success) => pull.reset());
// }

// const pullFinished = new Sound(require('../audio/pullFinished.mp3'), error => console.log(error));
// export const playListPullFinished = () => {
//   pullFinished.play((success) => pullFinished.reset());
// }