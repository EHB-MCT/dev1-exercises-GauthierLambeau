"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

console.log("width", width);
console.log("height", height);

drawBars();
drawSun();



function drawBars(){
context.fillStyle = "goldenrod";
context.fillRect(0,0, width, height/4);
context.fillStyle = "darkorange";
context.fillRect(0,height/4, width, height/4);
context.fillStyle = "brown";
context.fillRect(0, 2 *  height/4, width, height/4);
context.fillStyle = "darkblue";
context.fillRect(0, 3 *  height/4, width, height/4);

}

function drawSun() {

    context.fillStyle = "lightyellow";
    context.ellipse(width/2, 3 * height/4, width/4, width/4, 0, Math.PI, 0);
    context.fill();
}

window.onresize =  drawBars;
