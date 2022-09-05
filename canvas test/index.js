let canvas = document.getElementById("my-canvas");

let ctx = canvas.getContext("2d");
let ctx2 = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.rect(50, 50, 50, 50);
ctx.stroke();

ctx.save();

ctx.rect(150, 150, 100, 100);
ctx.stroke();

ctx.restore();

//ctx2.rect(100, 100, 100, 100);
//ctx2.stroke();
