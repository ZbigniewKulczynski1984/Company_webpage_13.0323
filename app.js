const svgCircle = document.getElementById('svg-circle');
const stepOne = document.getElementById('step-one');
const stepTwo = document.getElementById('step-two');
const stepThree = document.getElementById('step-three');
const stepFour = document.getElementById('step-four');
const stepFive = document.getElementById('step-five');
const main = document.getElementById('main');

main.style.backgroundImage = 'url(img/img-1.jpg)';

stepOne.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '1004';
    main.style.backgroundImage = 'url(img/img-2.jpg)';
});

stepTwo.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '753';
    main.style.backgroundImage = 'url(img/img-3.jpg)';
});

stepThree.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '502';
    main.style.backgroundImage = 'url(img/img-4.jpg)';
});

stepFour.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '251';
    main.style.backgroundImage = 'url(img/img-5.jpg)';
});

stepFive.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '0';
    main.style.backgroundImage = 'url(img/img-1.jpg)';
});

