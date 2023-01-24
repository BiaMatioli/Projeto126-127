musica1 = "";
musica2 = "";

function preload(){
    musica1 = loadSound("music1.mp3");
    musica2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function tocar(){
    musica.play();
}
