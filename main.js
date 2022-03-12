function preload() {

}
function setup(){
canvas = createCanvas(350,350);
canvas.center();
video = createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet = ml5.poseNet(video, ModelLoaded);
poseNet.on('pose', gotPoses);
}
function ModelLoaded(){
    console.log("poseNet is now initialized");
    
}
function draw(){
image(video,0,0,350,350);
}
function TS(){
    save('TT.jpeg');
    
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log('nose y = ' + results[0].pose.nose.y);
    }
}