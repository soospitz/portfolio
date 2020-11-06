
let playBtn = document.getElementById('play');
let pauseBtn = document.getElementById('pause');
let reverseBtn = document.getElementById('reverse');
let fastBtn = document.getElementById('fast');
let slowBtn = document.getElementById('slow');

let heart = document.querySelector('.heart');

play = () => heart.style.animationPlayState = 'running';
pause = () => heart.style.animationPlayState = 'paused';
reverse = () => heart.style.animationDirection = "reverse";
fast = () => heart.style.animationDuration = "5s";
slow = () => heart.style.animationDuration = "50s";

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
reverseBtn.addEventListener('click', reverse);
fastBtn.addEventListener('click', fast);
slowBtn.addEventListener('click', slow);


