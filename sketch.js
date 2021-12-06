var waterIm,factoryIm,skyIm
var test
var gamestate=0
var manIm
var animal1,an1,an2,an3,an4,an5,an6,animal2,animal3,animal4,animal5,animal6



function preload() {
  waterIm = loadImage("./pic/water.png");
 factoryIm = loadImage("./pic/factory.png");
skyIm = loadImage("./pic/sky.png");
manIm = loadImage("./pic/man.png");
an1=loadImage("./pic/toto.png");
an2=loadImage("./pic/oct.png");
an3=loadImage("./pic/fish1.png");
an4=loadImage("./pic/fish 2.png");
an5=loadImage("./pic/whale1.png");
an6=loadImage("./pic/crab.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  test= createSprite(500,400,100,100);
  test.addImage("boy",manIm)
  test.scale=0.5

  //animal1= createSprite(700,300,100,100);
  //animal1.addImage("water",an6)
  //for(x=100; x<=width-100 ; x=x+100)
//{
  
  
//}


}



function draw() {
   background("black");

  var y =Math.random(round(300,height-300))
  var x =Math.random(round(300,width-300))
  animal1=new Sea(250,300)
  animal2= new Sea(500,100)
  animal3= new Sea(200,600)
  animal4= new Sea(800,500)
  animal5= new Sea(700,200)
  animal6= new Sea(1100,300)
  

 //0 gamestate
   if(gamestate==0){
     background(factoryIm);
   }
 
   //1 gamestate
   if(gamestate==1){
     background(waterIm);
    
   } 
 
 //2 gamestate 
 if(gamestate==2){
  background(skyIm)

}


///placing fishes 


/*animal1.image("an"+ran)//an1
animal2.image("an"+"ran)//an2
animal3.image("an"+"ran")//an3
animal4.image("an"+"ran")//an4
animal5.image("an"+"ran")//an5
animal6.image("an"+"ran")//an6*/

var ran =Math.round(random(1,6))
var rand=Math.round(random(1,6))
console.log("an"+ran)
var imgname="an"+ran
animal1.image(an1)
animal2.image(an2)
animal2.scales(0.5)
animal3.image(an3)
animal3.scales(0.2)
animal4.image(an4)
animal5.image(an5)
animal6.image(an6)
animal6.scales(0.5)
//animal2.velocity();

//animal1.scales()

/*switch(rand){



case 1:animal1.image("new","an"+ran)
  break;

  case 2:animal2.image("old","an"+ran)
  break;

  case 3:animal3.image("water","an"+ran)
  break;

  case 4:animal4.image("sky","an"+ran)
  break;

  case 5:animal5.image("air","an"+ran)
  break;

  case 6:animal6.image("fire","an"+ran)
  break;
default:break;
}*/

animal1.display();
  animal2.display();
  animal3.display();
  animal4.display();
  animal5.display();
  animal6.display();

   
  drawSprites();

 }

 function keyPressed(){
  if(keyCode==DOWN_ARROW){
    gamestate=1
    
      }
      console.log(gamestate);

      if(keyCode==UP_ARROW){
        gamestate=2
      }
    console.log("test");
}