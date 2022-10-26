"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

backgroundcolors();

function backgroundcolors(){
    context.fillStyle= 'orange';
    context.fillRect(0, 0, width, height);

}

context.strokeStyle = "white";
context.lineWidth = 3.5;

DrawLines();

function DrawLines(){
    let step = 60;
    let stap = 30;
    let amounth = width / step;
    let amount = height/stap;
    for (let i = 0; i < amounth; i ++){
        Utils.drawLines(step * i, 0, width - (step * i), height);
    } 
    for (let i = 0; i < amount; i++){
        Utils.drawLines(0, stap * i, width, height - (stap * i));
    }
}






