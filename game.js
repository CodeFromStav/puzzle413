var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(600, 600, {backgroundColor: 0xADD8E6});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
//var start_page = new PIXI.Container();
//var end_page = new PIXI.Container();


PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add("assets.json")
  .add("sound.mp3")
  .load(ready);

  function ready()
   {
    sound = PIXI.audioManager.getAudio("sound.mp3");

    var frames = [];

    for (var i=1; i<=4; i++)
    {
      frames.push(PIXI.Texture.fromFrame('sprite_frame' + i + '.png'));
    }

    character = new PIXI.extras.MovieClip(frames);
    character.scale.x = 3;
    character.scale.y = 3;
    character.position.x = 200;
    character.position.y = 200;
    character.animationSpeed = 0.1;
    character.play();
    stage.addChild(character);


  character.interactive = true;
  character.on('mousedown', mouseHandler);

}
function mouseHandler(e)
 {
  sound.play();

   if( character.position.x > 0 && character.position.y > 0)
   {
    var new_x = Math.floor(Math.random() * 300) + 50;
    var new_y = Math.floor(Math.random() * 300) + 50;
    createjs.Tween.get(character.position).to({x: new_x, y: new_y}, 500);

   }
   else
   {
     new_x = position.x;
     new_y = position.y;
   }
  
}




function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();
























//   // PIXI.loader
//   // .add("dragonforce.mp3")
//   // .load(ready);




// function ready() {
  
//   var frames = [];

//   for (var i=1; i<=4; i++)
//   {
//     frames.push(PIXI.Texture.fromFrame('sprite_frame' + i + '.png'));
//   }

//   character = new PIXI.extras.MovieClip(frames);
//   character.scale.x = 3;
//   character.scale.y = 3;
//   character.position.x = 200;
//   character.position.y = 200;
//   character.animationSpeed = 0.1;
//   character.play();
//   stage.addChild(character);

// }


// function animate()
// {
//   requestAnimationFrame(animate);
//   renderer.render(stage);
// }
// animate();



// function keydownEventHandler(e)
//  {

//   if (e.keyCode == 87) { // W key
//     character.position.y -= 10;
//   }

//   if (e.keyCode == 83) { // S key
//     character.position.y += 10;
//   }

//   if (e.keyCode == 65) { // A key
//     character.position.x -= 10;
//   }

//   if (e.keyCode == 68) { // D key
//     character.position.x += 10;
//   }

// }
// document.addEventListener('keydown', keydownEventHandler);


