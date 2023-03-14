const svgCircle = document.getElementById('svg-circle');
const stepOne = document.getElementById('step-one');
const stepTwo = document.getElementById('step-two');
const stepThree = document.getElementById('step-three');
const stepFour = document.getElementById('step-four');
const stepFive = document.getElementById('step-five');
const main = document.getElementById('main');
const userBox = document.getElementById('user-box')


main.style.backgroundImage = 'url(img/img-1.jpg)';

stepOne.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '1004';
    main.style.backgroundImage = 'url(img/img-2.jpg)';
    userBox.style.top = '-350px'
});

stepTwo.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '753';
    main.style.backgroundImage = 'url(img/img-3.jpg)';
    userBox.style.top = '-800px'
});

stepThree.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '502';
    main.style.backgroundImage = 'url(img/img-4.jpg)';
    userBox.style.top = '-1250px'
});

stepFour.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '251';
    main.style.backgroundImage = 'url(img/img-5.jpg)';
    userBox.style.top = '-1700px'
});

stepFive.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '0';
    main.style.backgroundImage = 'url(img/img-1.jpg)';
    userBox.style.top = '100px'
});

