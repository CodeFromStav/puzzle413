var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400,400,{backgroundColor: 0x000000});
gameport.appendChild(renderer.view);



var stage = new PIXI.Container();

var char_back = new PIXI.Sprite(PIXI.Texture.fromImage("character_back.png"));

char_back.anchor.x = 0.5;
char_back.anchor.y = 0.5;
char_back.position.x = 200;
char_back.position.y = 200;

stage.addChild(char_back);


function keydownEventHandler(e){
   //char_back
   if(e.keyCode == 87) //w key
   {
      char_back.position.y -=10;
   }
   if(e.keyCode == 83) //s key
   {
      char_back.position.y +=10;
   }
   if(e.keyCode == 65) //a key
   {
      char_back.position.x -=10;
   }
   if(e.keyCode == 68) //d key
   {
      char_back.position.x +=10;
   }
   
}

document.addEventListener('keydown', keydownEventHandler);


function animate()
{
   requestAnimationFrame(animate);
   //sprite.rotation +=0.1;
   renderer.render(stage);
}
animate();

// var generator = require('generate-maze');
 
// // Width and height == 4
// var maze = generator(4);
 
// // Width == 8, height == 4
// var maze = generator(8, 4);
 
// // Width == 8, height == 4, maze edges are open
// var maze = generator(8, 4, false);
 
