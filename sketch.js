var balloon,balloonimg1,database,height,bg;
function preload(){
  bg=loadImage("Hot Air Ballon-01.png")
  balloonimg1=loadImage("Hot Air Ballon-02.png")
}
function setup() {
  database=firebase.database();
  createCanvas(1500,700);
  balloon=createSprite(400, 200, 50, 50);
  balloon.addImage(balloonimg1)
  balloon.scale=0.5;
  var balloonheight=database.ref("balloon/position")
  balloonheight.on("value",readHeight)
}

function draw() {
  background(bg);  
  if(keyDown(LEFT_ARROW)){
  updateHeight(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
  updateHeight(10,0);
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
      updateHeight(0,10);
      }   

  drawSprites();
}
function updateHeight(x,y){
  database.ref('balloon/position').set({
    x:height.x+x,
    y:height.y+y
  })
}
function readHeight(data){
  height=data.val();
  balloon.x=height.x;
  balloon.y=height.y;
}