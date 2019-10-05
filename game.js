var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400,400,{backgroundColor: 0x000000});
gameport.appendChild(renderer.view);



var stage = new PIXI.Container();

var slime = new PIXI.Sprite(PIXI.Texture.fromImage("slime_sprite.png"));
var sun = new PIXI.Sprite(PIXI.Texture.fromImage("sun_sprite.png"));



slime.anchor.x = 0.5;
slime.anchor.y = 0.5;
slime.position.x = 200;
slime.position.y = 200;

sun.anchor.x = 0.6;
sun.anchor.y = 0.6;
sun.position.x = 220;
sun.position.y = 220;

stage.addChild(slime);
stage.addChild(sun);


function keydownEventHandler(e){
   //slime
   if(e.keyCode == 87) //w key
   {
      slime.position.y -=10;
   }
   if(e.keyCode == 83) //s key
   {
      slime.position.y +=10;
   }
   if(e.keyCode == 65) //a key
   {
      slime.position.x -=10;
   }
   if(e.keyCode == 68) //d key
   {
      slime.position.x +=10;
   }
   //Sun

   if(e.keyCode == 37) // left arrow key
   {
      sun.position.x -=10; 
   }
   if(e.keyCode == 39) // right arrow key
   {
      sun.position.x +=10;
   }
   if(e.keyCode == 40) // down arrow key
   {
      sun.position.y +=10;
   }
   if(e.keyCode == 38) // up arrow key
   {
      sun.position.y -=10;
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
