window.onload = function(){

//Template_________________________________________________________

var canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

context.fillRect(0, 0, width, height);
context.fillStyle = "white";
context.strokeStyle = "purple";

var centerX = width/2;
var centerY = height/2;
context.translate(centerX, centerY); //center the canvas
//ontext.scale(1, -1); //invert Y axis

//__________________________________________________________________


    for (var i  =0; i < 100; i++){
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
    }
};