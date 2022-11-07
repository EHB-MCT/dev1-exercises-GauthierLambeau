"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";



context.fillStyle= "rgba(0,0,255,0.3)";
context.strokeStyle= "rgba(0,0,255,0)";
strokeCircle();

function strokeCircle() {  
for (let j = 0; j <10; j++){
    for (let i = 0; i<10; i++){
    Utils.strokeCircle(0 ,0 + (i * 82), 10 + (i* 10));
        }
    }
    for (let j = 0; j <=10; j++){
        for (let i = 0; i<10; i++){
        Utils.strokeCircle(82,0 + (i*82), 10 + (i * 10));
            }
        }
    for (let j = 0; j <=10; j++){
        for (let i = 0; i<10; i++){
           Utils.strokeCircle(164,0 + (i*82), 10 + (i * 10));
                }
            }
    
        
}