
const heart1= document.querySelector("#heart1");
const heart2= document.querySelector("#heart2");
const heart3= document.querySelector("#heart3");
const heart4= document.querySelector("#heart4");
const heart5= document.querySelector("#heart5");
const heart6= document.querySelector("#heart6");
const heart7= document.querySelector("#heart7");
const heart= document.querySelector(".heart");

const heartA = document.getElementById('heartAll');

let movement1 = [
	{transform: 'rotateY(50deg) translateX(62px) rotateZ(45deg)'},
	{transform: 'rotateY(360deg) rotateX(360deg) rotateZ(360deg)'},
	{transform: 'rotateY(50deg) translateX(62px) rotateZ(45deg)'}
];
let movement2 = [
	{transform: 'rotateY(100deg) translateX(62px) rotateZ(45deg)'},
	{transform: 'rotateY(410deg) rotateX(410deg) rotateZ(360deg)'},
	{transform: 'rotateY(100deg) translateX(62px) rotateZ(45deg)'}
];
let movement3 = [
	{transform: 'rotateY(150deg) translateX(62px) rotateZ(45deg)'},
	{transform: 'rotateY(460deg) rotateX(460deg) rotateZ(360deg)'},
	{transform: 'rotateY(150deg) translateX(62px) rotateZ(45deg)'}
];
let movement4 = [
	{transform: 'rotateY(200deg) translateX(62px) rotateZ(45deg)'},
	{transform: 'rotateY(510deg) rotateX(510deg) rotateZ(360deg)'},
	{transform: 'rotateY(200deg) translateX(62px) rotateZ(45deg)'}
];
let movement5 = [
	{transform: 'rotateY(250deg) translateX(62px) rotateZ(45deg)'},
	{transform: 'rotateY(560deg) rotateX(560deg) rotateZ(360deg)'},
	{transform: 'rotateY(250deg) translateX(62px) rotateZ(45deg)'}
];
let movement6 = [
	{transform: 'rotateY(300deg) translateX(62px) rotateZ(45deg)'},
	{transform: 'rotateY(610deg) rotateX(610deg) rotateZ(360deg)'},
	{transform: 'rotateY(300deg) translateX(62px) rotateZ(45deg)'}
];
let movement7 = [
	{transform: 'rotateY(350deg) translateX(62px) rotateZ(45deg)'},
	{transform: 'rotateY(660deg) rotateX(660deg) rotateZ(360deg)'},
	{transform: 'rotateY(350deg) translateX(62px) rotateZ(45deg)'}
];


let rotationTime = {
	duration: 10000, 
	iterations: Infinity
};

let heart1R = heart1.animate(movement1,rotationTime);
let heart2R = heart2.animate(movement2,rotationTime);
let heart3R = heart3.animate(movement3,rotationTime);
let heart4R = heart4.animate(movement4,rotationTime);
let heart5R = heart5.animate(movement5,rotationTime);
let heart6R = heart6.animate(movement6,rotationTime);
let heart7R = heart7.animate(movement7,rotationTime);



randomColor = () => {
	let randomNumber = Math.floor(Math.random() * 360);
}

window.addEventListener('load', randomColor);


let hueRatio;
let lightnessBrowserRatio;

function colorScale() {
	let browserWidth = window.innerWidth;
	let browserHeight = window.innerHeight;

	hueRatio = browserWidth / 360;
	lightnessRatio = browserHeight / 100;
}

function getPosition(event) {
	let xPos = event.clientX;
	let yPos = event.clientY;
	updateColor(xPos, yPos);
}

function updateColor(xPos, yPos) {
	let hue = Math.ceil(xPos / hueRatio);

	let lightness = 100 - Math.ceil(yPos / lightnessRatio);

	heart1.style.border = "solid hsl(" + hue + ", 100%, " + lightness + "%)";
	heart1.style.borderWidth = "5px 5px 0 0";
	heart2.style.border = "solid hsl(" + hue + ", 100%, " + lightness + "%)";
	heart2.style.borderWidth = "5px 5px 0 0";
	heart3.style.border = "solid hsl(" + hue + ", 100%, " + lightness + "%)";
	heart3.style.borderWidth = "5px 5px 0 0";
	heart4.style.border = "solid hsl(" + hue + ", 100%, " + lightness + "%)";
	heart4.style.borderWidth = "5px 5px 0 0";
	heart5.style.border = "solid hsl(" + hue + ", 100%, " + lightness + "%)";
	heart5.style.borderWidth = "5px 5px 0 0";
	heart6.style.border = "solid hsl(" + hue + ", 100%, " + lightness + "%)";
	heart6.style.borderWidth = "5px 5px 0 0";
	heart7.style.border = "solid hsl(" + hue + ", 100%, " + lightness + "%)";
	heart7.style.borderWidth = "5px 5px 0 0";
}

window.addEventListener('load', colorScale);

window.addEventListener('resize', colorScale);

window.addEventListener('mousemove', getPosition);



