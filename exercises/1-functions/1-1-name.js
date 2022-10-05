"use strict"
drawLine();

function drawLine() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.beginPath();
context.lineWidth = 9;
context.strokeStyle = 'red';
context.moveTo(175, 50);
context.lineTo(300, 50);
context.stroke();

context.beginPath();
context.lineWidth = 9;
context.strokeStyle = 'red';
context.moveTo(175, 50);
context.lineTo(175, 200);
context.stroke();

context.beginPath();
context.lineWidth = 9;
context.strokeStyle = 'red';
context.moveTo(175, 200);
context.lineTo(300, 200);
context.stroke();

context.beginPath();
context.lineWidth = 9;
context.strokeStyle = 'red';
context.moveTo(300, 200);
context.lineTo(300, 125);
context.stroke();

context.beginPath();
context.lineWidth = 9;
context.strokeStyle = 'red';
context.moveTo(300, 125);
context.lineTo(250, 125);
context.stroke();

context.beginPath();
context.lineWidth = 10;
context.strokeStyle = 'orange';
context.moveTo(350, 50);
context.lineTo(325, 200);
context.stroke();

context.beginPath();
context.lineWidth = 10;
context.strokeStyle = 'orange';
context.moveTo(350, 50);
context.lineTo(375, 200);
context.stroke();

context.beginPath();
context.lineWidth = 10;
context.strokeStyle = 'orange';
context.moveTo(325, 125);
context.lineTo(375, 125);
context.stroke();

context.beginPath();
context.lineWidth = 11;
context.strokeStyle = 'yellow';
context.moveTo(400, 50);
context.lineTo(400, 200);
context.stroke();

context.beginPath();
context.lineWidth = 11;
context.strokeStyle = 'yellow';
context.moveTo(400, 200);
context.lineTo(500, 200);
context.stroke();

context.beginPath();
context.lineWidth = 11;
context.strokeStyle = 'yellow';
context.moveTo(500, 200);
context.lineTo(500, 50);
context.stroke();

context.beginPath();
context.lineWidth = 12;
context.strokeStyle = 'green';
context.moveTo(530, 50);
context.lineTo(650, 50);
context.stroke();

context.beginPath();
context.lineWidth = 12;
context.strokeStyle = 'green';
context.moveTo(590, 50);
context.lineTo(590, 200);
context.stroke();

context.beginPath();
context.lineWidth = 13;
context.strokeStyle = 'blue';
context.moveTo(700, 50);
context.lineTo(700, 200);
context.stroke();

context.beginPath();
context.lineWidth = 13;
context.strokeStyle = 'blue';
context.moveTo(800, 50);
context.lineTo(800, 200);
context.stroke();

context.beginPath();
context.lineWidth = 13;
context.strokeStyle = 'blue';
context.moveTo(700, 125);
context.lineTo(800, 123);
context.stroke();

context.beginPath();
context.lineWidth = 14;
context.strokeStyle = 'purple';
context.moveTo(850, 50);
context.lineTo(850, 200);
context.stroke();

context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'red';
context.moveTo(900, 50);
context.lineTo(900, 200);
context.stroke();

context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'red';
context.moveTo(900, 50);
context.lineTo(1000, 50);
context.stroke();

context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'red';
context.moveTo(900, 200);
context.lineTo(1000, 200);
context.stroke();

context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'red';
context.moveTo(900, 125);
context.lineTo(1000, 125);
context.stroke();

context.beginPath();
context.lineWidth = 16;
context.strokeStyle = 'orange';
context.moveTo(1050, 50);
context.lineTo(1050, 250);
context.stroke();

context.beginPath();
context.lineWidth = 16;
context.strokeStyle = 'orange';
context.moveTo(1050, 50);
context.lineTo(1150, 100);
context.stroke();

context.beginPath();
context.lineWidth = 16;
context.strokeStyle = 'orange';
context.moveTo(1150, 100);
context.lineTo(1050, 150);
context.stroke();

context.beginPath();
context.lineWidth = 16;
context.strokeStyle = 'orange';
context.moveTo(1050, 150);
context.lineTo(1150, 250);
context.stroke();

}
