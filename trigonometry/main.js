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

    var radius = 100;
    var r2 = radius + radius * 0.5;

    var x, y;
    
    for (var angle = 0; angle < Math.PI * 2; angle += 0.1){
        
        var x = Math.cos(angle) * radius;
        var y = Math.sin(angle) * radius;

        var x2 = Math.cos(angle + 0.3) * r2;
        var y2  = Math.sin(angle + 0.3) * r2;
        
        context.moveTo(x,y);
        context.lineTo(x2,y2);

        context.fillRect(x, y, 5, 5);
        context.fillRect(x2, y2, 5, 5);

        context.stroke();
    }
};