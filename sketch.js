var canvas,bgImage;
var gamestate=0,playercount
var form,player,game;
var database;

function setup(){
  
 
  createCanvas(500,500);
  
  
  

  database = firebase.database();
  game = new Game();
  game.getState()
  game.start()
}

function draw(){
  background("white");
  
  
}

