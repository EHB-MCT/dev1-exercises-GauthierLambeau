"use strict";

/**
 * @type {canvasrenderingContext2D}
 */

let context;

setupcanvascontext();

export default context;

function setupcanvascontext(){
 let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context = canvas.getContext("2d");

}
