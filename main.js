leftWristX=0;
rightWristX=0;
differance=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(450,400);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
    background(	'#0ce8f0');
    textSize(differance);
    fill('#fc036f');
    text('Debika',50,400);
}

function gotPoses(results){
    if(results.length > 0){

        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        differance=floor(leftWristX-rightWristX);
        console.log("leftWristX =" + leftWristX + " , rightWristX =" + rightWristX + ", differance =" + differance);


    }

}
