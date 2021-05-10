var space , spaceImage 
var planet , planetImage , title1 , title2 , title1image , title2image
var play ,  playImage 
var asteroid , asteroidImage
var rocket, rocketImage
var stone1 , stone2 , stone3 , stone4 , stoneImage

var gameStates = "STAGE1" // gamestates
var varsity  // font

var S1HomePageObjectPlanet1 , S1HomePageObjectPlanet1Image
var S1HomePageObjectRockyStone , S1HomePageObjectRockyStoneImage
var S1HomePageRocket ,  S1HomePageRocketImage
var S1HomePageObjectBurning , S1HomePageObjectBurningImage
var S1HomePageObjectblueStone , S1HomePageObjectblueStoneImage
function preload(){
  spaceImage = loadImage("images/space-background.png")
 
  title1image = loadImage("images/spaceIMG.jpg")
  
  varsity = loadFont("varsity_regular.ttf")

 // All the images for the stage 2
  rocketImage = loadImage("images/rocket.png")
  stoneImage =  loadImage("images/stone.png")


  // Preloading all the objects for the home screen
  playImage = loadImage("images/play.png")
  S1HomePageObjectPlanet1Image= loadImage("images/planet2.png")
  S1HomePageObjectRockyStoneImage = loadImage("images/rockyStone.png")
  S1HomePageRocketImage = loadImage("images/homeScreenRocket.png")
  S1HomePageObjectBurningImage = loadImage("images/homeScreenObjectBurning.png")
  S1HomePageObjectblueStoneImage = loadImage("images/blueStone.png")

}



function setup() {
  createCanvas(1708,834);

  // SPACE title for the home screen
  title1 = createSprite(width/2 ,200 , 50, 50);
  title1.addImage(title1image)
  textSize(130)

  play= createSprite(width/2 , 500 , 50 , 50)
  play.addImage(playImage)

 
  play.scale = 0.5
 
  rocket = createSprite(150 , 500 , 50 , 50)
  rocket.addImage(rocketImage)
  rocket.visible = false
  rocket.scale = 0.5

  stone1 = createSprite(1600 , 200 , 50 , 50)
  stone1.addImage(stoneImage)
  stone1.visible = false

  S1HomePageObjectPlanet1 = createSprite(width/2 + 520 ,270 , 50 , 50)
  S1HomePageObjectPlanet1.addImage(S1HomePageObjectPlanet1Image)
  S1HomePageObjectPlanet1.scale = 0.8

  S1HomePageObjectRockyStone = createSprite(width/2 + 350 , 520 , 50 , 50)
  S1HomePageObjectRockyStone.addImage(S1HomePageObjectRockyStoneImage)
  S1HomePageObjectRockyStone.scale = 0.9

  S1HomePageRocket = createSprite(width/2 + 230 , 140 , 50 , 50)
  S1HomePageRocket.addImage( S1HomePageRocketImage)

  S1HomePageObjectBurning = createSprite(width/2 - 360 , 600 ,  50  ,50)
  S1HomePageObjectBurning.addImage(S1HomePageObjectBurningImage)
  S1HomePageObjectBurning.scale = 0.7

  S1HomePageObjectblueStone = createSprite(width/2 - 410 , 300 , 50 , 50)
  S1HomePageObjectblueStone.addImage(S1HomePageObjectblueStoneImage)
  S1HomePageObjectblueStone.scale = 0.7
}

function draw() {
  background(spaceImage); 

  if(gameStates==="STAGE1"){
  textFont(varsity)
  textSize(80)
  fill("red")
  stroke("green")
  text("MISSION" ,  width/2 - 160 , 300)
    
  if(mousePressedOver(play)){
      gameStates="STAGE2"
    }
  }

  if(gameStates==="STAGE2"){
    play.visible = false
    title1.visible = false
    asteroid.visible=false
    rocket.visible = true
    stone1.visible = true
    varsity.visible = false
  }
  drawSprites();
  
  
}