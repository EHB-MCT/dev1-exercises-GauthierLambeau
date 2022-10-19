"use strict";

import context from './context.js';

/**
 * Draws a line between to points 
 * @param {*} x1 coordinate start point 
 * @param {*} y1 coordinate start point 
 * @param {*} x2 coordinate end point 
 * @param {*} y2 coordinate end point 
 */

export function drawLines(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function rbg(r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
}

