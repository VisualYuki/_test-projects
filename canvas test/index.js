let canvas = document.getElementById("my-canvas");

let ctx = canvas.getContext("2d");
ctx.globalAlpha = 0.5;
//ctx.fillStyle = "red";
//ctx.fillRect(50, 50, 10, 10);
ctx.strokeStyle = "red";
ctx.lineWidth = 0.5;
ctx.rect(50, 50, 50, 50);
ctx.stroke();
ctx.arc(40, 40, 20, 0, Math.PI * 2);
