var runner,runnerImg
var day,dayImg
var hydrant,hydrantGroup,hydrantImg
var trashCan,trashCanGroup,trashCanImg
var gameOver,gameOverImg
var gameState="play"
var ground



function preload(){
    runnerImg = loadImage("giphy.gif");
    dayImg = loadImage("moving-landscape-driving-cartoon-characters-086042179_prevstill.webp");
    trashCanImg = loadImage("istockphoto-1138875155-612x612.jpg");
    gameOverImg = loadImage("images.jpg");
    hydrantImg = loadImage("fire-hydrant-cartoon-icon-vector-7523784.jpg")
    }

function setup() {
    createCanvas(600, 600);
    day = createSprite(300,300);
    day.addImage("day",dayImg);
    day.velocityX = -2;
    day.scale=0.5
    runner = createSprite(30,500)
    runner.addImage("runner",runnerImg)
    runner.scale=0.4
    runner.debug = false
    ground = createSprite(10,590,400,50)
    ground.velocityX= -2
    ground.visible=false
    
    hydrantGroup = createGroup()
    trashCanGroup =createGroup()
    

    runner.setCollider("circle",0,0,40)
     
}

function draw() {
    background(200);
    if (gameState=="play"){
      
      if(day.x < 200){
        day.x = 300}

        if(ground.x < 0){
          ground.x = 10}

      
  if (keyDown("space")){
  runner.velocityY=-5

  
  
  }
  runner.velocityY+=0.4
  if (hydrantGroup.isTouching(runner)){
  runner.velocityX=0 
  gameState=="end"     
  }
  
  makeHydrantTrashCan()
  
  
  
  
    }
    if (gameState=="end"){
    runner.destroy()
    gameOver = createSprite(300,300)
    gameOver.addImage("gameOver",gameOverImg)
    
    
  }


  runner.collide(ground)
  drawSprites()
    
  
  
  
    }
    function makeHydrantTrashCan(){
    if(frameCount%240==0){
    hydrant = createSprite(250,550)
   // hydrant.x=Math.round(random(0,50))
    hydrant.addImage("hydrant",hydrantImg)
    hydrant.scale=0.1
    hydrant.lifetime= 800
    hydrantGroup.add(hydrant)
    trashCan = createSprite(570,300)
   trashCan.addImage("trashCan",trashCanImg)
    trashCan.scale=0.1
    trashCan.lifetime= 800
    trashCanGroup.add(trashCan)
    runner.depth=trashCan.depth+1
    runner.depth=hydrant.depth+1
    trashCan.velocityX=-2
   hydrant.velocityX=-2
    
    }
    
  
    }
  
    
    
    
    
    
    
    
