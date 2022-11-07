"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";



context.fillStyle= 'LightSkyBlue';
context.strokeStyle= 'LightSkyBlue';
strokeCircle();

function strokeCircle() {  
for (let j = 0; j <10; j++){
    for (let i = 0; i<10; i++){
    Utils.strokeCircle(0 ,0 + (i * 82), 40);
        }
    }
    for (let j = 0; j <=10; j++){
        for (let i = 0; i<10; i++){
        Utils.strokeCircle(0 + (i * 82),0 + (j*82), 40);
            }
        }
}