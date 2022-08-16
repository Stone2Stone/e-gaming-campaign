export const canvas = document.querySelector("canvas");
export const canvasContext = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

canvas.fillStyle = "white";
canvasContext.fillRect(0, 0, canvas.width, canvas.height);
