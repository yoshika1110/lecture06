var showAnswer = function(message){
var output = document.querySelector("#answer");
output.value = message;
};

var add = function(event){
var inputA = document.querySelector("#input-a");
var inputB = document.querySelector("#input-b");

var a = inputA.value;
var b = inputB.value;

var answer = parseInt(a) - parseInt(b);

console.log("helloWorld: start");
showAnswer(answer);
console.log("helloWorld: end");
};

var zen = function(event){
console.log("zen: start");
var button = document.querySelector("button");
button.addEventListener("click", add);
console.log("zen: end");
};

window.addEventListener("load", zen);
