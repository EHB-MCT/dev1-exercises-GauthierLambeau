"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

//let frameCount = 0;
//frameCount++;
//if(frameCount > width){
//}

function move(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;
	context.fillStyle = "white";
	context;
	Utils.drawLine(x, y, width, y);
	Utils.drawLine(x, y, 0, y);

	Utils.drawLine(x, y, x, height);
	Utils.drawLine(x, y, x, 0);
}
