nose_x = '';
nose_y = '';
rightWrist_x = '';
leftWrist_x = '';
difference = '';

function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    canvas = createCanvas(500, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}
function draw() {
     background("grey");
     fill("red");
     stroke("red");
     square(nose_x, nose_y, difference);
     document.getElementById("square_size").innerHTML = "The sides of the square is  " + difference + "px";
}

function modelLoaded() {
     console.log("Model is loaded!!");
    
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.x;
        console.log("nose x - " + nose_x + " nose y - " + nose_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        leftWrist_x = results[0].pose.leftWrist.x;
        difference = floor(leftWrist_x - rightWrist_x);
        console.log("left wrist x - " + leftWrist_x + "right wrist x - " + rightWrist_x);
    }
}