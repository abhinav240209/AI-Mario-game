noseX="";
noseY="";

function preload() {
	world_start = loadSound("world_start.wav");
	coin_sound=loadSound("coin.wav");
	kick_sound=loadSound("kick.wav");
	jump_sound=loadSound("jump.wav");
	gameover_sound=loadSound("gameover.wav");
	marioDie_sound=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	video=createCapture(VIDEO);	
	video.size(600,400);
	video.parent("console");
	
	classifier=ml5.poseNet(video,modelLoaded);
	classifier.on('pose',gotPoses);	

	instializeInSetup(mario);
}

function draw() {
	game();
}

function modelLoaded() {
	console.log("model is loaded");
}
function gotPoses(results){
	if(results.length>0){
		//console.log(results);
		noseX=Math.floor(results[0].pose.nose.x);
		noseY=Math.floor(results[0].pose.nose.y);
		
	}
}






