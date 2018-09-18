var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let buggers = (num, yvalue) => {
    let xvalue = 20
    for(i=0; i<num; i++) {
        ctx.beginPath();
        ctx.rect(xvalue, yvalue, 15, 10);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
        xvalue += 30;
    }
    
}

let dragon = (xvalue) => {
    ctx.beginPath();
    ctx.rect(xvalue, 115, 20, 30);
    ctx.fillStyle="#FF0000";
    ctx.fill();
    ctx.closePath();
}

var x = 160;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
let dragonx = 150;

let bullet = () => {
    ctx.beginPath();
    ctx.arc((dragonx + 10), y, 3, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

let draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    buggers(9, 10);
    buggers(9, 30);
    buggers(9, 50);
    dragon(dragonx);
    window.addEventListener('keydown', (event) => {
        if (event.keyCode == 32) {
            bullet();
        }
    })
    y+=dy;
}

setInterval(draw, 10);




buggers(9, 10);
buggers(9, 30);
buggers(9, 50);
dragon();

window.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowRight' && dragonx <= 270) {
        dragonx += 5;
    }
    if (keyName === 'ArrowLeft' && dragonx >= 10) {
        dragonx -= 5;
    } if (event.keyCode == 32) {
        
    } 
})

    

