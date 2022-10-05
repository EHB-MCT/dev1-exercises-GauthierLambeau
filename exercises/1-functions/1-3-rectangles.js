"use script"

drawLine();

function drawLine() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

// top left
context.beginPath();
context.lineWidth = 1;
context.strokeStyle = 'red';
context.rect(50, 50, 175, 175 );
context.stroke();

// botto right
context.beginPath();
context.lineWidth = 1;
context.rect(175, 175, 175, 175 );
context.stroke();

//top right
context.beginPath();
context.lineWidth = 1;
context.rect(325, 50, 25, 25 );
context.fill();
context.stroke();

//bottom left
context.beginPath();
context.lineWidth = 1;
context.rect(50, 325, 25, 25 );
context.fill();
context.stroke();

//between middel and top right
context.beginPath();
context.lineWidth = 1;
context.rect(275, 75, 50, 50 );
context.stroke();

//between middel and bottom left
context.beginPath();
context.lineWidth = 1;
context.rect(75, 275, 50, 50 );
context.stroke();

//middel
context.beginPath();
context.lineWidth = 1;
context.rect(125, 125, 150, 150 );
context.fill();
context.stroke();

}