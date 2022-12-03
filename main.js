leftWristX = 0;
rightWristX = 0;
difference = 0;
textforcode = "Caleb";
function setup(){
    canvas = createCanvas(400,400);
    canvas.position(660, 200);
    video = createCapture(VIDEO);
    video.size(400, 400)
    video.position(250, 200)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#FFB422");
    textSize(difference);
    fill("#FFE787");
    text(textforcode, 50, 400);
}
function modelLoaded(){
    console.log("PoseNet is initialized")
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}