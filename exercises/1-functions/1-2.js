"use script"
alert("hello");
drawLine();

function drawLine() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

//vierkant
context.beginPath();
context.moveTo(50, 50);
context.lineTo(150, 50);
context.stroke();

context.beginPath();
context.moveTo(50, 50);
context.lineTo(50, 150);
context.stroke();

context.beginPath();
context.moveTo(150, 50);
context.lineTo(150, 150);
context.stroke();

context.beginPath();
context.moveTo(50, 150);
context.lineTo(150, 150);
context.stroke();

//kruis
context.beginPath();
context.strokeStyle = 'red';
context.moveTo(50, 50);
context.lineTo(150, 150);
context.stroke();

context.beginPath();
context.strokeStyle = 'red';
context.moveTo(150, 50);
context.lineTo(50, 150);
context.stroke();
}
