"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawConcentricCircles();
}

function drawConcentricCircles(x, y, radius) {
    let i = 0 ;
    while (i < 11) {
        //This strokeCircle function does not exist yet!
        //Add it to the utils script:
        //The function draws the stroke of a circle 
        //and has the following parameters: x,y,radius
        Utils.strokeCircle(50 * i, 50, 10 );
        i = i + 1;
    }
}