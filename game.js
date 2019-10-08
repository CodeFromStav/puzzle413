var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0xADD8E6});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
//var start_page = new PIXI.Container();
//var end_page = new PIXI.Container();

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add("assets.json")
  .load(ready);

// PIXI.loader
//   .add("dragonforce.mp3")
//   .load(ready);

function ready() {
  
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
}


function mouseHandler(e)
{
  // dragonforce.play();
  var new_x = Math.floor(Math.random() * 300) + 50;
  var new_y = Math.floor(Math.random() * 300) + 50;
  createjs.Tween.get(character.position).to({x: new_x, y: new_y}, 1000, createjs.Ease.bounceOut);
}
character.interactive = true;
character.on("mousedown", mouseHandler);



function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();



// function keydownEventHandler(e) {

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
