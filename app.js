const svgCircle = document.getElementById('svg-circle');
const stepOne = document.getElementById('step-one');
const stepTwo = document.getElementById('step-two');
const stepThree = document.getElementById('step-three');
const stepFour = document.getElementById('step-four');
const stepFive = document.getElementById('step-five');

stepOne.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '1004';
});

stepTwo.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '753';
    
});

stepThree.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '502';
    
});

stepFour.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '251';
});

stepFive.addEventListener('click', () => {
	svgCircle.style.strokeDashoffset = '0';
});
