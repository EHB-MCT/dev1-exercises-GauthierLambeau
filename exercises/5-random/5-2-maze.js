"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze(){
    for (let i = 0; i < 10; i++ ){
        let r = Math.floor(Math.random() * 2);
        context.lineWidth = 5;
        if (r == 0){
            Utils.drawLine(0 + i * 100 ,0 * i, 50 * i,50 * i );

        }else{
            Utils.drawLine(0 * i,50 * i,50 *i ,0 * i);

        }
    }    
}


