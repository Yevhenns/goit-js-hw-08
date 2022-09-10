import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const durationData = {
  videoPlayerCurrentTime: 45,
};
player.on('timeupdate', function (duration) {
  durationData.videoPlayerCurrentTime = player.on;
  console.log(durationData);
});
