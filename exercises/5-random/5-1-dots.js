"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

//function drawDots(){
    
        //for(let i = 0; i < 100000; i++){
        //let x = Math.random() * width;
        //let y = Math.random() * height;
        //let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        //if(x  < width/2){
           // context.fillStyle = "red";
        //}else{
            //context.fillStyle = "green";
       // }
    //Utils.fillCircle(x,y,2); 
//}
//}

//function drawDots(){
    //for(let i = 0; i < 100000; i++){
      //  let x = Math.random() * width;
        //let y = Math.random() * height;
        //let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        //if(  y < height/3){
        // context.fillStyle = "red";
        //}else{
           // context.fillStyle = "white";
       // }
       // if( y > height/1.5){
            //context.fillStyle= "blue";
       // }
    //Utils.fillCircle(x,y,2); 
//}
//}

//function drawDots(){
    //for(let i = 0; i < 100000; i++){
          //let x = Math.random() * width;
          //let y = Math.random() * height;
          //let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
          //if(  x < width/4){
             //context.fillStyle = "red";
            //}else{
               //context.fillStyle = "white";
            //}
            //if(x > width/1.4){
                //context.fillStyle = "yellow";
            //}
          //Utils.fillCircle(x,y,2); 
//}
//}

//function drawDots(){
   // for(let i = 0; i < 100000; i++){
        //  let x = Math.random() * width;
        //  let y = Math.random() * height;
         // let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
         // if(  x > width/1.5){
           //  context.fillStyle = "white";
           // }else{
            //   context.fillStyle = "green";
            //}
           // if(y > height/1.5 ){
               // context.fillStyle = "white";
            //}
         
          //Utils.fillCircle(x,y,2); 
//}
//}

//function drawDots(){
    //for(let i = 0; i < 100000; i++){
         // let x = Math.random() * width;
         // let y = Math.random() * height;
         // let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
         // if(  x > width/1.5){
            // context.fillStyle = "BLUE";
           // }else{
           //    context.fillStyle = "white";
           // }
           // if(y > height/1.5){
            //    context.fillStyle = "blue";
            //}
           // if(x < width/3){
                //context.fillStyle = "blue";
           // }
            //if(y < height/3){
                //context.fillStyle = "blue";
           //}
         
         // Utils.fillCircle(x,y,2); 
//}
//}

function drawDots() {

    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance > 250) {
            context.fillStyle = "WHITE";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 2);
    }



}