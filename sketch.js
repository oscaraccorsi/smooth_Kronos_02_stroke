let cronos;
let waves;


function preload(){
  cronos = loadModel('obj/Cronos_02a.obj');
  waves = loadSound('sound/sea_waves_mod.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  
  waves.loop();
 

  
}

function draw() {
  background(0);
  ambientLight(100);
  translate(0,0,-500);
  ambientLight(100);
  noFill();
  strokeWeight(1)
  
  
  
  
  let d = new Date();

  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let mill = d.getMilliseconds();

  let dhr = hr;
  let dmin = min;
  let dsec = sec;

  sec += mill/1000;
  min += sec/60;
  hr += min/60;

  
  

  
  

  if (dsec < 10) {
    dsec = "0" + dsec;
  }
  if (dmin < 10) {
    dmin = "0" + dmin;
  }
  if (dhr % 12 == 0) {
    dhr = "12";
  }
  else if ((dhr % 12) < 10) {
    dhr = "0" + (dhr % 12);
  }
 
  push();
  stroke(0);
  strokeWeight(5);
  let minAngle = map(min, 0, 60, 0, 360);      //minute
  let secAngle = map(sec, 0, 60, 0, 360);       //second
  translate(0,0,-600);
  rotateZ(minAngle*16);
  model(cronos);
  pop();
  
  push();
  stroke(0,0,255);
  
  translate(0,0,-650);
  rotateZ(minAngle);
  model(cronos);
  pop();

  push();
  stroke(0,200,0);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);    //hour
  translate(0,0,-700);
  model(cronos);
  rotateZ(hourAngle);
  
  pop();
  
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}  