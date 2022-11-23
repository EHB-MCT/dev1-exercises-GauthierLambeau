"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let list = [];
let average = 0;
let total = 0;
setup();
calculateAverage(list);
console.log(average);

function setup() {
	for (let i = 0; i < 1000; i++) {
		list[i] = Utils.randomNumber(0, 100);
		console.log(list[i]);
	}
}

function calculateAverage(listOfNumbers) {
	for (let i = 0; i < 1000; i++) {
		total += listOfNumbers[i];
	}
	average = total / list.length;
}
